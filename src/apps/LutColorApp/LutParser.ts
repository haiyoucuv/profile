import { LUTData } from './RenderEngine.ts';

export class LutParser {
  /**
   * 解析.cube格式的LUT文件
   */
  static async parseCubeLUT(file: File): Promise<LUTData> {
    const text = await file.text();
    const lines = text.split('\n').map(line => line.trim()).filter(line => line && !line.startsWith('#'));

    let size = 0;
    let title = '';
    let domainMin = [0, 0, 0];
    let domainMax = [1, 1, 1];
    const lutData: number[] = [];

    for (const line of lines) {
      if (line.startsWith('TITLE')) {
        title = line.substring(5).trim().replace(/"/g, '');
      } else if (line.startsWith('LUT_3D_SIZE')) {
        size = parseInt(line.split(' ')[1]);
      } else if (line.startsWith('DOMAIN_MIN')) {
        const values = line.split(' ').slice(1).map(Number);
        domainMin = values;
      } else if (line.startsWith('DOMAIN_MAX')) {
        const values = line.split(' ').slice(1).map(Number);
        domainMax = values;
      } else {
        // 数据行
        const values = line.split(/\s+/).map(Number);
        if (values.length === 3 && values.every(v => !isNaN(v))) {
          lutData.push(values[0], values[1], values[2], 1.0); // RGBA格式
        }
      }
    }

    if (size === 0) {
      throw new Error('Invalid LUT file: LUT_3D_SIZE not found');
    }

    if (lutData.length !== size * size * size * 4) {
      throw new Error(`Invalid LUT file: Expected ${size * size * size * 4} values, got ${lutData.length}`);
    }

    return {
      size,
      data: new Float32Array(lutData)
    };
  }

  /**
   * 解析.3dl格式的LUT文件
   */
  static async parse3dlLUT(file: File): Promise<LUTData> {
    const text = await file.text();
    const lines = text.split('\n').map(line => line.trim()).filter(line => line && !line.startsWith('#'));

    const lutData: number[] = [];
    let size = 0;

    for (const line of lines) {
      const values = line.split(/\s+/).map(Number);
      if (values.length === 3 && values.every(v => !isNaN(v))) {
        lutData.push(values[0], values[1], values[2], 1.0);
      }
    }

    // 推断尺寸（通常是32x32x32）
    const totalPoints = lutData.length / 4;
    size = Math.round(Math.cbrt(totalPoints));

    if (size * size * size * 4 !== lutData.length) {
      throw new Error('Invalid 3DL LUT file: Data size does not match cubic dimensions');
    }

    return {
      size,
      data: new Float32Array(lutData)
    };
  }

  /**
   * 创建默认的身份LUT（无调色效果）
   */
  static createIdentityLUT(size: number = 32): LUTData {
    const data = new Float32Array(size * size * size * 4);
    let index = 0;

    for (let b = 0; b < size; b++) {
      for (let g = 0; g < size; g++) {
        for (let r = 0; r < size; r++) {
          data[index++] = r / (size - 1); // R
          data[index++] = g / (size - 1); // G
          data[index++] = b / (size - 1); // B
          data[index++] = 1.0;            // A
        }
      }
    }

    return { size, data };
  }

  /**
   * 创建一些预设的艺术风格LUT
   */
  static createPresetLUT(preset: string, size: number = 32): LUTData {
    const data = new Float32Array(size * size * size * 4);
    let index = 0;

    for (let b = 0; b < size; b++) {
      for (let g = 0; g < size; g++) {
        for (let r = 0; r < size; r++) {
          let red = r / (size - 1);
          let green = g / (size - 1);
          let blue = b / (size - 1);

          // 应用不同的预设效果
          switch (preset) {
            case 'warm':
              red = Math.min(1.0, red * 1.1 + 0.05);
              green = Math.min(1.0, green * 1.05);
              blue = Math.max(0.0, blue * 0.9);
              break;

            case 'cool':
              red = Math.max(0.0, red * 0.9);
              green = Math.min(1.0, green * 1.05);
              blue = Math.min(1.0, blue * 1.1 + 0.05);
              break;

            case 'vintage':
              // 复古胶片效果
              red = Math.min(1.0, red * 1.2 + 0.1);
              green = Math.min(1.0, green * 1.1 + 0.05);
              blue = Math.max(0.0, blue * 0.8);
              // 添加轻微的褐色调
              const sepia = (red * 0.393 + green * 0.769 + blue * 0.189);
              red = Math.min(1.0, sepia);
              green = Math.min(1.0, sepia * 0.9);
              blue = Math.min(1.0, sepia * 0.7);
              break;

            case 'dramatic':
              // 戏剧性对比
              red = red < 0.5 ? red * 0.8 : Math.min(1.0, red * 1.3);
              green = green < 0.5 ? green * 0.8 : Math.min(1.0, green * 1.3);
              blue = blue < 0.5 ? blue * 0.8 : Math.min(1.0, blue * 1.3);
              break;

            case 'monochrome':
              // 黑白效果
              const gray = red * 0.299 + green * 0.587 + blue * 0.114;
              red = green = blue = gray;
              break;

            default:
              // 身份LUT
              break;
          }

          data[index++] = red;
          data[index++] = green;
          data[index++] = blue;
          data[index++] = 1.0;
        }
      }
    }

    return { size, data };
  }

  /**
   * 自动检测LUT文件格式并解析
   */
  static async parseLUT(file: File): Promise<LUTData> {
    const extension = file.name.toLowerCase().split('.').pop();

    switch (extension) {
      case 'cube':
        return this.parseCubeLUT(file);
      case '3dl':
        return this.parse3dlLUT(file);
      default:
        throw new Error(`Unsupported LUT format: ${extension}`);
    }
  }
}
