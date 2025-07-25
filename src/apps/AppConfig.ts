import { VirtualApp } from "./VirtualApp.ts";

export interface AppConfig {
  // 应用基本信息
  id: string;
  name: string;
  icon: string;
  
  // 是否注册到 Docker
  registerToDocker: boolean;
  
  // Docker 中的显示顺序
  dockerOrder: number;
  
  // 应用窗口默认配置
  defaultWindow: {
    width: number;
    height: number;
    x?: number;
    y?: number;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
  };
}

export interface AppManifest {
  config: AppConfig;
  lazyImport: () => Promise<{ [key: string]: typeof VirtualApp }>;
} 