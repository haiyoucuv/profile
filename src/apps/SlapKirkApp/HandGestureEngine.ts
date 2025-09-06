// AI手势识别引擎 - 完整实现版本
// 使用TensorFlow.js MediaPipe Hands模型进行实时手势检测

export interface HandLandmark {
  x: number;
  y: number;
  z?: number;
}

export interface GestureResult {
  type: GestureType;
  confidence: number;
  landmarks?: HandLandmark[];
  velocity?: { x: number; y: number; magnitude: number };
}

export enum GestureType {
  NONE = 'none',
  READY = 'ready',      // 准备姿态（手掌张开）
  SLAP = 'slap',        // 扇击动作
  FIST = 'fist',        // 拳头（重置）
  PEACE = 'peace'       // V字手势（特殊技能）
}

export interface CameraSettings {
  width: number;
  height: number;
  facingMode: 'user' | 'environment';
}

export class HandGestureEngine {
  private model: any = null;
  private videoElement: HTMLVideoElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private isInitialized = false;
  private isDetecting = false;

  // 手势历史记录，用于计算速度和平滑处理
  private gestureHistory: GestureResult[] = [];
  private readonly HISTORY_SIZE = 5;

  // 存储最后的检测结果用于调试显示
  private lastDetectionResult: any[] = [];

  // 调试模式控制
  private debugModeEnabled = false;
  private lastDebugUpdate = 0;
  private advancedDebugMode = false; // 高级调试模式（显示关键点）

  // 阈值配置
  private readonly SLAP_VELOCITY_THRESHOLD = 0.15;
  private readonly CONFIDENCE_THRESHOLD = 0.7;

  async initialize(cameraSettings: CameraSettings = { width: 640, height: 480, facingMode: 'user' }): Promise<boolean> {
    try {
      console.log('初始化AI手势识别引擎...');

      // 检查浏览器支持
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('浏览器不支持摄像头访问');
      }

      // 创建视频元素
      this.videoElement = document.createElement('video');
      this.videoElement.width = cameraSettings.width;
      this.videoElement.height = cameraSettings.height;
      this.videoElement.autoplay = true;
      this.videoElement.muted = true;
      this.videoElement.playsInline = true;

      // 创建画布用于调试显示
      this.canvas = document.createElement('canvas');
      this.canvas.width = cameraSettings.width;
      this.canvas.height = cameraSettings.height;
      this.ctx = this.canvas.getContext('2d');

      // 请求摄像头权限
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: cameraSettings.width,
          height: cameraSettings.height,
          facingMode: cameraSettings.facingMode
        }
      });

      this.videoElement.srcObject = stream;
      await this.videoElement.play();

      // TODO: 加载TensorFlow.js模型
      // 现在先模拟加载成功
      await this.loadModel();

      this.isInitialized = true;
      console.log('AI手势识别引擎初始化成功');
      return true;

    } catch (error) {
      console.error('初始化AI引擎失败:', error);
      return false;
    }
  }

  private async loadModel(): Promise<void> {
    try {
      console.log('开始加载MediaPipe Hands模型...');

      // 动态导入TensorFlow.js模块
      const [tf, handPoseDetection] = await Promise.all([
        import('@tensorflow/tfjs'),
        import('@tensorflow-models/hand-pose-detection')
      ]);

      // 确保WebGL后端已加载
      await tf.ready();
      console.log('TensorFlow.js后端就绪:', tf.getBackend());

      // 创建MediaPipe Hands检测器
      this.model = await handPoseDetection.createDetector(
        handPoseDetection.SupportedModels.MediaPipeHands,
        {
          runtime: 'tfjs',
          modelType: 'lite', // 使用轻量级模型以提高性能
          maxHands: 2        // 最多检测2只手
        }
      );

      console.log('MediaPipe Hands模型加载成功');

    } catch (error) {
      console.error('模型加载失败，使用模拟模式:', error);
      // 如果TensorFlow.js加载失败，继续使用模拟模式
      this.model = null;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  async startDetection(): Promise<void> {
    if (!this.isInitialized || this.isDetecting) {
      return;
    }

    this.isDetecting = true;
    this.detectionLoop();
  }

  stopDetection(): void {
    this.isDetecting = false;
  }

  private async detectionLoop(): Promise<void> {
    if (!this.isDetecting || !this.videoElement) {
      return;
    }

    try {
      const gestureResult = await this.detectGesture();
      this.addToHistory(gestureResult);

      // 触发手势事件
      if (gestureResult.type !== GestureType.NONE) {
        this.onGestureDetected?.(gestureResult);
      }

      // 如果启用了调试模式，更新调试画布（降低频率避免卡顿）
      if (this.debugModeEnabled && Date.now() - this.lastDebugUpdate > 100) {
        this.updateDebugCanvas();
        this.lastDebugUpdate = Date.now();
      }

    } catch (error) {
      console.error('手势检测错误:', error);
    }

    // 继续下一帧检测（约30fps）
    setTimeout(() => this.detectionLoop(), 33);
  }

  private async detectGesture(): Promise<GestureResult> {
    if (!this.videoElement) {
      return { type: GestureType.NONE, confidence: 0 };
    }

    try {
      if (this.model) {
        // 使用真实的TensorFlow.js模型进行检测
        const hands = await this.model.estimateHands(this.videoElement, {
          flipHorizontal: true // 镜像翻转以匹配用户视角
        });

        // 存储原始检测数据供调试使用
        this.lastDetectionResult = hands;

        if (hands && hands.length > 0) {
          return this.classifyGesture(hands);
        } else {
          return { type: GestureType.NONE, confidence: 0 };
        }
      } else {
        // 模型未加载，使用模拟数据
        return this.simulateGestureDetection();
      }

    } catch (error) {
      console.error('手势检测失败:', error);
      return { type: GestureType.NONE, confidence: 0 };
    }
  }

  private simulateGestureDetection(): GestureResult {
    // 始终生成模拟的手部关键点数据，确保调试模式能看到效果
    const simulatedHand = this.generateSimulatedHandData();
    this.lastDetectionResult = [simulatedHand];

    // 模拟随机手势检测（用于测试）
    const random = Math.random();

    if (random < 0.05) { // 5%概率检测到扇击
      return {
        type: GestureType.SLAP,
        confidence: 0.8 + Math.random() * 0.2,
        landmarks: simulatedHand.landmarks,
        velocity: {
          x: (Math.random() - 0.5) * 0.4,
          y: (Math.random() - 0.5) * 0.2,
          magnitude: 0.15 + Math.random() * 0.1
        }
      };
    } else if (random < 0.6) { // 55%概率检测到准备状态（增加频率）
      return {
        type: GestureType.READY,
        confidence: 0.7 + Math.random() * 0.3,
        landmarks: simulatedHand.landmarks
      };
    }

    // 即使没有特定手势，也返回手部数据，确保关键点显示
    return {
      type: GestureType.NONE,
      confidence: 0.6 + Math.random() * 0.2,
      landmarks: simulatedHand.landmarks
    };
  }

  // 生成模拟的手部关键点数据
  private generateSimulatedHandData(): any {
    console.log('开始生成模拟手部数据...');

    const landmarks: HandLandmark[] = [];
    const time = Date.now() / 1000; // 时间用于动画

    // 手腕位置（索引0）- 中心点
    const wristX = 0.5 + Math.sin(time * 0.5) * 0.1;
    const wristY = 0.5 + Math.cos(time * 0.3) * 0.1;
    landmarks[0] = { x: wristX, y: wristY, z: 0 };

    console.log(`手腕位置: (${wristX.toFixed(3)}, ${wristY.toFixed(3)})`);

    // 生成真实的手部结构
    const fingerStructure = [
      // 拇指 (1-4)
      { base: [0.45, 0.45], joints: 4, spread: 0.08 },
      // 食指 (5-8)
      { base: [0.48, 0.35], joints: 4, spread: 0.12 },
      // 中指 (9-12)
      { base: [0.5, 0.3], joints: 4, spread: 0.15 },
      // 无名指 (13-16)
      { base: [0.52, 0.35], joints: 4, spread: 0.12 },
      // 小指 (17-20)
      { base: [0.55, 0.4], joints: 4, spread: 0.1 }
    ];

    let landmarkIndex = 1;
    fingerStructure.forEach((finger, fingerIndex) => {
      const baseX = wristX + (finger.base[0] - 0.5);
      const baseY = wristY + (finger.base[1] - 0.5);

      // 为每个手指生成关节点
      for (let joint = 0; joint < finger.joints; joint++) {
        const progress = (joint + 1) / finger.joints;
        const angle = fingerIndex * 0.3 + Math.sin(time + fingerIndex) * 0.2;

        const x = baseX + Math.cos(angle) * finger.spread * progress;
        const y = baseY + Math.sin(angle) * finger.spread * progress;
        const z = Math.sin(time * 2 + fingerIndex + joint) * 0.02;

        landmarks[landmarkIndex] = { x, y, z };
        landmarkIndex++;
      }
    });

    // 确保有21个关键点
    while (landmarks.length < 21) {
      landmarks.push({ x: wristX, y: wristY, z: 0 });
    }

    console.log(`模拟手部数据生成完成，关键点数量: ${landmarks.length}`);

    const handData = {
      landmarks,
      keypoints: landmarks,
      score: 0.85 + Math.sin(time) * 0.1,
      handedness: {
        categoryName: 'Left',
        displayName: '左手 (模拟)',
        score: 0.9 + Math.cos(time * 0.5) * 0.05
      }
    };

    console.log('模拟手部数据:', handData);
    return handData;
  }

  private classifyGesture(hands: any[]): GestureResult {
    if (!hands || hands.length === 0) {
      return { type: GestureType.NONE, confidence: 0 };
    }

    const hand = hands[0]; // 只处理第一只检测到的手
    const landmarks = hand.keypoints || hand.landmarks;
    const confidence = hand.score || hand.handedness?.score || 0.8;

    // 转换landmark格式
    const normalizedLandmarks = landmarks.map((point: any) => ({
      x: point.x,
      y: point.y,
      z: point.z || 0
    }));

    // 计算手势速度
    const velocity = this.calculateVelocity(normalizedLandmarks);

    // 检查各种手势
    if (this.isPeaceSign(normalizedLandmarks)) {
      return {
        type: GestureType.PEACE,
        confidence,
        landmarks: normalizedLandmarks,
        velocity
      };
    } else if (this.isFist(normalizedLandmarks)) {
      return {
        type: GestureType.FIST,
        confidence,
        landmarks: normalizedLandmarks,
        velocity
      };
    } else if (this.isPalmOpen(normalizedLandmarks)) {
      if (velocity.magnitude > this.SLAP_VELOCITY_THRESHOLD &&
          Math.abs(velocity.x) > Math.abs(velocity.y)) {
        // 检测到水平扇击动作
        return {
          type: GestureType.SLAP,
          confidence,
          landmarks: normalizedLandmarks,
          velocity
        };
      } else {
        // 手掌张开但没有快速移动，处于准备状态
        return {
          type: GestureType.READY,
          confidence,
          landmarks: normalizedLandmarks,
          velocity
        };
      }
    }

    return { type: GestureType.NONE, confidence: 0 };
  }

  private isPalmOpen(landmarks: HandLandmark[]): boolean {
    if (!landmarks || landmarks.length < 21) return false;

    // MediaPipe手部关键点索引
    // 4: 拇指尖, 8: 食指尖, 12: 中指尖, 16: 无名指尖, 20: 小指尖
    // 3: 拇指关节, 6: 食指关节, 10: 中指关节, 14: 无名指关节, 18: 小指关节

    const fingerTips = [4, 8, 12, 16, 20];
    const fingerJoints = [3, 6, 10, 14, 18];
    const wrist = landmarks[0];

    let extendedFingers = 0;

    // 检查每个手指是否伸展
    for (let i = 0; i < fingerTips.length; i++) {
      const tipIndex = fingerTips[i];
      const jointIndex = fingerJoints[i];

      if (tipIndex < landmarks.length && jointIndex < landmarks.length) {
        const tip = landmarks[tipIndex];
        const joint = landmarks[jointIndex];

        // 计算手指长度（从关节到指尖的距离）
        const fingerLength = Math.sqrt(
          Math.pow(tip.x - joint.x, 2) + Math.pow(tip.y - joint.y, 2)
        );

        // 计算从手腕到指尖的距离
        const wristToTip = Math.sqrt(
          Math.pow(tip.x - wrist.x, 2) + Math.pow(tip.y - wrist.y, 2)
        );

        // 如果指尖距离手腕较远，认为手指伸展
        if (wristToTip > fingerLength * 1.2) {
          extendedFingers++;
        }
      }
    }

    // 至少3个手指伸展才认为是手掌张开
    return extendedFingers >= 3;
  }

  private isFist(landmarks: HandLandmark[]): boolean {
    if (!landmarks || landmarks.length < 21) return false;

    const fingerTips = [4, 8, 12, 16, 20];
    const palm = landmarks[9]; // 手掌中心点

    let closedFingers = 0;

    // 检查每个手指是否收缩
    for (const tipIndex of fingerTips) {
      if (tipIndex < landmarks.length) {
        const tip = landmarks[tipIndex];

        // 计算指尖到手掌中心的距离
        const distanceToPalm = Math.sqrt(
          Math.pow(tip.x - palm.x, 2) + Math.pow(tip.y - palm.y, 2)
        );

        // 如果距离很小，认为手指收缩
        if (distanceToPalm < 0.1) { // 调整阈值
          closedFingers++;
        }
      }
    }

    // 至少4个手指收缩才认为是拳头
    return closedFingers >= 4;
  }

  private isPeaceSign(landmarks: HandLandmark[]): boolean {
    if (!landmarks || landmarks.length < 21) return false;

    // 检查食指(8)和中指(12)是否伸展，其他手指是否收缩
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];
    const thumbTip = landmarks[4];

    const palm = landmarks[9];

    // 计算各指尖到手掌的距离
    const indexDist = Math.sqrt(Math.pow(indexTip.x - palm.x, 2) + Math.pow(indexTip.y - palm.y, 2));
    const middleDist = Math.sqrt(Math.pow(middleTip.x - palm.x, 2) + Math.pow(middleTip.y - palm.y, 2));
    const ringDist = Math.sqrt(Math.pow(ringTip.x - palm.x, 2) + Math.pow(ringTip.y - palm.y, 2));
    const pinkyDist = Math.sqrt(Math.pow(pinkyTip.x - palm.x, 2) + Math.pow(pinkyTip.y - palm.y, 2));
    const thumbDist = Math.sqrt(Math.pow(thumbTip.x - palm.x, 2) + Math.pow(thumbTip.y - palm.y, 2));

    // 食指和中指伸展，其他手指收缩
    const indexExtended = indexDist > 0.15;
    const middleExtended = middleDist > 0.15;
    const ringClosed = ringDist < 0.12;
    const pinkyClosed = pinkyDist < 0.12;
    const thumbClosed = thumbDist < 0.12;

    return indexExtended && middleExtended && ringClosed && pinkyClosed && thumbClosed;
  }

  private calculateVelocity(landmarks: HandLandmark[]): { x: number; y: number; magnitude: number } {
    if (this.gestureHistory.length < 2 || !landmarks || landmarks.length === 0) {
      return { x: 0, y: 0, magnitude: 0 };
    }

    // 使用手掌中心点(索引9)计算速度，比手腕更稳定
    const palmIndex = 9;
    const current = landmarks[palmIndex] || landmarks[0];

    // 获取历史记录中最近的手掌位置
    let previousPalm = null;
    for (let i = this.gestureHistory.length - 1; i >= 0; i--) {
      const historyLandmarks = this.gestureHistory[i].landmarks;
      if (historyLandmarks && historyLandmarks.length > palmIndex) {
        previousPalm = historyLandmarks[palmIndex] || historyLandmarks[0];
        break;
      }
    }

    if (!previousPalm) {
      return { x: 0, y: 0, magnitude: 0 };
    }

    // 计算位移
    const dx = current.x - previousPalm.x;
    const dy = current.y - previousPalm.y;
    const magnitude = Math.sqrt(dx * dx + dy * dy);

    // 应用平滑滤波，减少抖动
    const smoothingFactor = 0.7;
    const lastVelocity = this.gestureHistory[this.gestureHistory.length - 1].velocity;

    if (lastVelocity) {
      return {
        x: smoothingFactor * dx + (1 - smoothingFactor) * lastVelocity.x,
        y: smoothingFactor * dy + (1 - smoothingFactor) * lastVelocity.y,
        magnitude: smoothingFactor * magnitude + (1 - smoothingFactor) * lastVelocity.magnitude
      };
    }

    return { x: dx, y: dy, magnitude };
  }

  private addToHistory(result: GestureResult): void {
    this.gestureHistory.push(result);
    if (this.gestureHistory.length > this.HISTORY_SIZE) {
      this.gestureHistory.shift();
    }
  }

  // 获取摄像头视频元素（用于显示）
  getVideoElement(): HTMLVideoElement | null {
    return this.videoElement;
  }

  // 获取调试画布
  getDebugCanvas(): HTMLCanvasElement | null {
    return this.canvas;
  }

  // 实时更新调试画布（调试模式开启时自动调用）
  updateDebugCanvas(): void {
    if (!this.ctx || !this.canvas || !this.debugModeEnabled) {
      console.log('调试更新跳过:', { ctx: !!this.ctx, canvas: !!this.canvas, debugMode: this.debugModeEnabled });
      return;
    }

    try {
      console.log('开始更新调试画布...');
      // 先测试基础绘制功能
      this.testCanvasDrawing();
      // 现在恢复手部关键点绘制
      this.drawFullHandLandmarks();
    } catch (error) {
      console.error('调试画布更新失败:', error);
    }
  }

  // 测试Canvas绘制功能
  private testCanvasDrawing(): void {
    if (!this.ctx || !this.canvas) {
      console.log('Canvas测试失败: 没有ctx或canvas');
      return;
    }

    console.log(`Canvas尺寸: ${this.canvas.width} x ${this.canvas.height}`);

    // 绘制一个大红色方块
    this.ctx.fillStyle = '#FF0000';
    this.ctx.fillRect(50, 50, 100, 100);
    console.log('红色方块已绘制在 (50,50) 尺寸 100x100');

    // 绘制一个绿色圆圈
    this.ctx.fillStyle = '#00FF00';
    this.ctx.beginPath();
    this.ctx.arc(200, 100, 30, 0, 2 * Math.PI);
    this.ctx.fill();
    console.log('绿色圆圈已绘制在 (200,100) 半径 30');

    // 绘制一些文字
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.fillText('Canvas测试', 50, 200);
    console.log('文字已绘制');
  }

  // 绘制完整的手部关键点（覆盖层模式）
  private drawFullHandLandmarks(): void {
    if (!this.ctx || !this.canvas) {
      console.log('调试绘制失败: Canvas或Context不可用');
      return;
    }

    try {
      // 清空画布（透明背景，作为覆盖层）
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      console.log(`调试绘制: 检测到${this.lastDetectionResult.length}只手`);

      // 绘制所有检测到的手部关键点
      if (this.lastDetectionResult && this.lastDetectionResult.length > 0) {
        this.lastDetectionResult.forEach((hand, handIndex) => {
          console.log(`绘制第${handIndex + 1}只手，关键点数量:`, hand.landmarks?.length || hand.keypoints?.length || 0);
          this.drawHandWithAllLandmarks(hand, handIndex);
        });
      } else {
        console.log('调试绘制: 没有手部数据');
      }

      // 绘制调试信息面板
      this.drawDebugInfoPanel();

    } catch (error) {
      console.error('完整手部关键点绘制失败:', error);
    }
  }

  // 绘制单只手的所有关键点和连接线
  private drawHandWithAllLandmarks(hand: any, handIndex: number): void {
    if (!this.ctx || !this.canvas) {
      console.log('绘制手部失败: 没有ctx或canvas');
      return;
    }

    try {
      const landmarks = hand.keypoints || hand.landmarks;
      console.log(`手部数据检查 - Hand ${handIndex}:`, {
        hasKeypoints: !!hand.keypoints,
        hasLandmarks: !!hand.landmarks,
        landmarksLength: landmarks?.length || 0,
        firstPoint: landmarks?.[0]
      });

      if (!landmarks || landmarks.length === 0) {
        console.log(`手部 ${handIndex} 没有关键点数据`);
        return;
      }

      console.log(`开始绘制手部 ${handIndex}，关键点数量: ${landmarks.length}`);

      // 先绘制一个简单的测试点确保基础绘制正常
      this.ctx.fillStyle = '#FFFF00';
      this.ctx.fillRect(300, 50 + handIndex * 50, 50, 30);
      this.ctx.fillStyle = '#000000';
      this.ctx.font = '12px Arial';
      this.ctx.fillText(`Hand ${handIndex}`, 305, 70 + handIndex * 50);

      // 手部连接线定义（MediaPipe标准）
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], // 拇指
        [0, 5], [5, 6], [6, 7], [7, 8], // 食指
        [5, 9], [9, 10], [10, 11], [11, 12], // 中指
        [9, 13], [13, 14], [14, 15], [15, 16], // 无名指
        [13, 17], [17, 18], [18, 19], [19, 20], // 小指
        [0, 17] // 手腕到小指根部
      ];

      // 不同手使用不同颜色
      const handColors = ['#00FF44', '#FF4400', '#4400FF', '#FFAA00'];
      const color = handColors[handIndex % handColors.length];

      // 绘制连接线
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = 4;
      this.ctx.globalAlpha = 0.9;
      this.ctx.lineCap = 'round';

      connections.forEach(([start, end]) => {
        if (start < landmarks.length && end < landmarks.length) {
          const startPoint = landmarks[start];
          const endPoint = landmarks[end];

          // 直接使用像素坐标
          const x1 = this.canvas.width - startPoint.x;
          const y1 = startPoint.y;
          const x2 = this.canvas.width - endPoint.x;
          const y2 = endPoint.y;

          this.ctx!.beginPath();
          this.ctx!.moveTo(x1, y1);
          this.ctx!.lineTo(x2, y2);
          this.ctx!.stroke();
        }
      });

      // 绘制关键点
      this.ctx.fillStyle = color;
      this.ctx.globalAlpha = 1.0;

      // 绘制所有21个关键点
      landmarks.forEach((point: any, index: number) => {
        const x = this.canvas.width - point.x;
        const y = point.y;

        // 根据关键点类型设置不同大小
        let radius = 4;
        if (index === 0) {
          radius = 12; // 手腕最大
        } else if ([4, 8, 12, 16, 20].includes(index)) {
          radius = 8; // 指尖中等
        } else if ([2, 3, 6, 7, 10, 11, 14, 15, 18, 19].includes(index)) {
          radius = 6; // 关节
        }

        // 绘制关键点
        this.ctx!.fillStyle = color;
        this.ctx!.beginPath();
        this.ctx!.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx!.fill();

        // 绘制白色边框
        this.ctx!.strokeStyle = '#FFFFFF';
        this.ctx!.lineWidth = 2;
        this.ctx!.beginPath();
        this.ctx!.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx!.stroke();

        // 为重要点位绘制索引编号
        if ([0, 4, 8, 12, 16, 20].includes(index)) {
          this.ctx!.fillStyle = '#000000';
          this.ctx!.font = 'bold 10px Arial';
          this.ctx!.textAlign = 'center';
          this.ctx!.fillText(index.toString(), x, y + 3);
          this.ctx!.textAlign = 'left';
        }
      });

      console.log(`手部 ${handIndex} 所有关键点绘制完成`);

      // 绘制简单的手部标签（左上角）
      const confidence = hand.score || hand.handedness?.score || 0;
      const handedness = hand.handedness?.categoryName || hand.handedness?.displayName || `Hand ${handIndex + 1}`;

      this.ctx.fillStyle = color;
      this.ctx.font = 'bold 14px Arial';
      this.ctx.strokeStyle = '#000000';
      this.ctx.lineWidth = 2;

      const labelText = `${handedness} ${(confidence * 100).toFixed(0)}%`;
      const labelY = 30 + handIndex * 20;

      this.ctx.strokeText(labelText, 15, labelY);
      this.ctx.fillText(labelText, 15, labelY);

    } catch (error) {
      console.error(`绘制第${handIndex + 1}只手失败:`, error);
    }
  }

  // 绘制简单的调试信息面板
  private drawDebugInfoPanel(): void {
    if (!this.ctx || !this.canvas) return;

    try {
      // 只显示基础状态信息（右上角小面板）
      const basicInfo = [
        `检测到手数: ${this.lastDetectionResult.length}`,
        `模型: ${this.model ? 'TensorFlow.js' : '模拟模式'}`
      ];

      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(this.canvas.width - 200, 10, 190, 50);

      this.ctx.fillStyle = '#00D4FF';
      this.ctx.font = 'bold 11px Arial';

      basicInfo.forEach((info, index) => {
        this.ctx!.fillText(info, this.canvas!.width - 190, 28 + index * 16);
      });

    } catch (error) {
      console.error('调试信息面板绘制失败:', error);
    }
  }



  // 绘制基础调试信息（性能优化版）
  private drawBasicDebugInfo(): void {
    if (!this.ctx || !this.canvas) return;

    try {
      const debugInfo = [
        `调试模式: 基础模式`,
        `检测到手数: ${this.lastDetectionResult.length}`,
        `模型状态: ${this.model ? 'TensorFlow.js' : '模拟模式'}`,
        `画布尺寸: ${this.canvas.width}x${this.canvas.height}`,
        `提示: 双击开启关键点显示`
      ];

      // 绘制半透明背景
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      this.ctx.fillRect(10, 10, 320, 130);

      // 绘制调试文本
      this.ctx.fillStyle = '#00D4FF';
      this.ctx.font = 'bold 14px Arial';

      debugInfo.forEach((info, index) => {
        this.ctx!.fillText(info, 15, 35 + index * 20);
      });

      // 如果有手部数据，显示简单指示
      if (this.lastDetectionResult && this.lastDetectionResult.length > 0) {
        this.ctx.fillStyle = '#00FF44';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('✋ 检测到手部', 15, 155);

        // 显示每只手的基本信息
        this.lastDetectionResult.forEach((hand, index) => {
          const confidence = hand.score || hand.handedness?.score || 0;
          const handedness = hand.handedness?.displayName || `Hand ${index + 1}`;
          this.ctx!.fillStyle = index === 0 ? '#00FF44' : '#FF4400';
          this.ctx!.font = '12px Arial';
          this.ctx!.fillText(`${handedness}: ${(confidence * 100).toFixed(1)}%`, 150, 155 + index * 15);
        });

        // 如果启用高级调试模式，绘制简化的关键点
        if (this.advancedDebugMode) {
          this.drawSimplifiedLandmarks();
        }
      } else {
        this.ctx.fillStyle = '#FFAA00';
        this.ctx.font = '14px Arial';
        this.ctx.fillText('👋 请将手放在摄像头前', 15, 155);
      }

    } catch (error) {
      console.error('基础调试信息绘制失败:', error);
    }
  }

  // 绘制简化的关键点（只显示重要点位）
  private drawSimplifiedLandmarks(): void {
    if (!this.ctx || !this.canvas || !this.lastDetectionResult) return;

    try {
      this.lastDetectionResult.forEach((hand, handIndex) => {
        const landmarks = hand.keypoints || hand.landmarks;
        if (!landmarks || landmarks.length === 0) return;

        // 只绘制重要关键点：手腕(0) 和 指尖(4,8,12,16,20)
        const importantPoints = [0, 4, 8, 12, 16, 20];
        const colors = ['#00FF44', '#FF4400', '#4400FF', '#FFFF00'];
        const color = colors[handIndex % colors.length];

        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;

        importantPoints.forEach((pointIndex, i) => {
          if (pointIndex < landmarks.length) {
            const point = landmarks[pointIndex];
            const x = point.x * this.canvas!.width;
            const y = point.y * this.canvas!.height;

            // 绘制关键点
            this.ctx!.beginPath();
            this.ctx!.arc(x, y, pointIndex === 0 ? 8 : 5, 0, 2 * Math.PI);
            this.ctx!.fill();

            // 标注重要点位
            if (pointIndex === 0) {
              this.ctx!.fillStyle = '#FFFFFF';
              this.ctx!.font = 'bold 10px Arial';
              this.ctx!.fillText('手腕', x + 10, y - 10);
              this.ctx!.fillStyle = color;
            }
          }
        });
      });
    } catch (error) {
      console.error('简化关键点绘制失败:', error);
    }
  }

  // 绘制单只手的关键点和连接线
  private drawSingleHand(hand: any, handIndex: number): void {
    if (!this.ctx || !this.canvas) return;

    try {
      const landmarks = hand.keypoints || hand.landmarks;
      if (!landmarks || landmarks.length === 0) return;

    // 手部连接线定义（MediaPipe格式）
    const connections = [
      [0, 1], [1, 2], [2, 3], [3, 4], // 拇指
      [0, 5], [5, 6], [6, 7], [7, 8], // 食指
      [5, 9], [9, 10], [10, 11], [11, 12], // 中指
      [9, 13], [13, 14], [14, 15], [15, 16], // 无名指
      [13, 17], [17, 18], [18, 19], [19, 20], // 小指
      [0, 17] // 手腕到小指根部
    ];

    // 不同手使用不同颜色
    const handColors = ['#00FF44', '#FF4400', '#4400FF', '#FFFF00'];
    const color = handColors[handIndex % handColors.length];

    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = 3;

    // 绘制连接线
    this.ctx.beginPath();
    connections.forEach(([start, end]) => {
      if (start < landmarks.length && end < landmarks.length) {
        const startPoint = landmarks[start];
        const endPoint = landmarks[end];

        const x1 = startPoint.x * this.canvas.width;
        const y1 = startPoint.y * this.canvas.height;
        const x2 = endPoint.x * this.canvas.width;
        const y2 = endPoint.y * this.canvas.height;

        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
      }
    });
    this.ctx.stroke();

    // 绘制关键点
    landmarks.forEach((point: any, index: number) => {
      const x = point.x * this.canvas.width;
      const y = point.y * this.canvas.height;

      // 根据关键点类型设置不同大小
      let radius = 4;
      if (index === 0) radius = 8; // 手腕
      else if ([4, 8, 12, 16, 20].includes(index)) radius = 6; // 指尖

      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      this.ctx.fill();

      // 绘制关键点索引（重要点位）
      if ([0, 4, 8, 12, 16, 20].includes(index)) {
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.strokeText(index.toString(), x + 8, y - 8);
        this.ctx.fillText(index.toString(), x + 8, y - 8);
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 3;
      }
    });

    // 绘制手部信息
    const confidence = hand.score || hand.handedness?.score || 0;
    const handedness = hand.handedness?.categoryName || hand.handedness?.displayName || `Hand ${handIndex + 1}`;

    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 14px Arial';
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 3;

    const infoText = `${handedness} (${(confidence * 100).toFixed(1)}%)`;
    const textY = 30 + handIndex * 25;

    this.ctx.strokeText(infoText, 10, textY);
    this.ctx.fillText(infoText, 10, textY);

    } catch (error) {
      console.error(`绘制第${handIndex + 1}只手失败:`, error);
    }
  }

  // 绘制调试信息面板
  private drawDebugInfo(): void {
    if (!this.ctx || !this.canvas) return;

    const debugInfo = [
      `检测到手数: ${this.lastDetectionResult.length}`,
      `检测频率: ~30fps`,
      `模型状态: ${this.model ? 'TensorFlow.js' : '模拟模式'}`,
      `分辨率: ${this.canvas.width}x${this.canvas.height}`
    ];

    // 绘制半透明背景
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(10, this.canvas.height - 120, 300, 110);

    // 绘制调试文本
    this.ctx.fillStyle = '#00D4FF';
    this.ctx.font = 'bold 12px Arial';

    debugInfo.forEach((info, index) => {
      this.ctx.fillText(info, 15, this.canvas.height - 95 + index * 18);
    });

    // 绘制关键点说明
    const legend = [
      '● 0: 手腕  ● 4,8,12,16,20: 指尖',
      '● 绿色: 第一只手  ● 红色: 第二只手'
    ];

    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '10px Arial';

    legend.forEach((text, index) => {
      this.ctx.fillText(text, 15, this.canvas.height - 25 + index * 12);
    });
  }

  // 兼容旧接口的方法
  drawHandLandmarks(landmarks: HandLandmark[], gestureType: GestureType): void {
    // 这个方法现在主要用于向后兼容，实际调试绘制使用 updateDebugCanvas
    this.updateDebugCanvas();
  }

  // 调试模式控制方法
  setDebugMode(enabled: boolean, advanced: boolean = false): void {
    console.log(`设置调试模式: ${enabled}, 高级模式: ${advanced}`);
    this.debugModeEnabled = enabled;
    this.advancedDebugMode = advanced;

    if (enabled) {
      console.log('调试模式已启用，准备绘制手部关键点...');
      // 立即生成一些测试数据确保有内容显示
      if (this.lastDetectionResult.length === 0) {
        const testHand = this.generateSimulatedHandData();
        this.lastDetectionResult = [testHand];
        console.log('生成测试手部数据');
      }

      // 延迟更新调试画布，避免阻塞
      setTimeout(() => {
        this.lastDebugUpdate = 0; // 重置时间戳，确保立即更新
        this.updateDebugCanvas();
      }, 100);
    } else if (this.ctx && this.canvas) {
      // 关闭调试模式时清空覆盖层画布，让底层视频显示
      requestAnimationFrame(() => {
        if (this.ctx && this.canvas) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      });
    }
  }

  // 切换到高级调试模式（显示关键点）
  enableAdvancedDebug(): void {
    if (this.debugModeEnabled) {
      this.advancedDebugMode = true;
      console.log('启用高级调试模式（关键点显示）');
      this.updateDebugCanvas();
    }
  }

  // 关闭高级调试模式
  disableAdvancedDebug(): void {
    this.advancedDebugMode = false;
    console.log('关闭高级调试模式');
    if (this.debugModeEnabled) {
      this.updateDebugCanvas();
    }
  }

  getDebugMode(): boolean {
    return this.debugModeEnabled;
  }

  getAdvancedDebugMode(): boolean {
    return this.advancedDebugMode;
  }

  // 手势检测回调
  onGestureDetected?: (gesture: GestureResult) => void;

  // 清理资源
  dispose(): void {
    this.stopDetection();

    if (this.videoElement?.srcObject) {
      const stream = this.videoElement.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }

    this.videoElement = null;
    this.canvas = null;
    this.ctx = null;
    this.model = null;
    this.isInitialized = false;
  }
}
