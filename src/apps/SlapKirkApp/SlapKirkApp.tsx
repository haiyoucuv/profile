import { VirtualApp } from "../VirtualApp.ts";
import { Window, WindowManager } from "../../components/WindowWrapper";
import { createRoot, Root } from "react-dom/client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AppManager } from "../AppManager.ts";
import { config } from "./config.ts";
import { HandGestureEngine, GestureResult, GestureType } from './HandGestureEngine';
import { GameLogic, GameStats, GameState } from './GameLogic';
import { AnimationSystem, AssetPathGenerator } from './AnimationSystem';
import { soundSystem } from './SoundSystem';
import styles from './SlapKirkApp.module.less';

// Kirk头像组件
const KirkAvatar: React.FC<{
  isBeingSlapped: boolean;
  slapIntensity: number;
}> = ({ isBeingSlapped, slapIntensity }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationSystemRef = useRef<AnimationSystem>(new AnimationSystem());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isBeingSlapped && !isAnimating && containerRef.current) {
      setIsAnimating(true);

      // 播放柯克被扇击动画
      const videoPath = AssetPathGenerator.getRandomKirkSlapVideo();

      animationSystemRef.current.playVideoAnimation(
        containerRef.current,
        {
          type: 'video',
          videoPath,
          loop: false,
          autoplay: true
        },
        () => {
          setIsAnimating(false);
          // 动画结束后显示默认状态
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div class="${styles.kirkFace}">
                <div class="${styles.kirkDefault}">🖖</div>
              </div>
            `;
          }
        }
      );

      // 播放柯克呻吟声音
      soundSystem.playRandomKirkGrunt();
    }
  }, [isBeingSlapped, slapIntensity, isAnimating]);

  // 组件销毁时清理动画系统
  useEffect(() => {
    return () => {
      animationSystemRef.current.destroy();
    };
  }, []);

  return (
    <div className={`${styles.kirkAvatar} ${isBeingSlapped ? styles.slapped : ''}`}>
      <div
        ref={containerRef}
        className={styles.kirkContainer}
      >
        {/* 默认状态 */}
        {!isAnimating && (
          <div className={styles.kirkFace}>
            <div className={styles.kirkDefault}>🖖</div>
          </div>
        )}
      </div>

      {/* 扇击特效 */}
      {isBeingSlapped && (
        <div className={styles.slapEffect}>
          💥
        </div>
      )}
    </div>
  );
};

// 史波克扇击动画组件
const SpockSlapAnimation: React.FC<{
  isVisible: boolean;
  onComplete?: () => void;
}> = ({ isVisible, onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationSystemRef = useRef<AnimationSystem>(new AnimationSystem());

  useEffect(() => {
    if (isVisible && containerRef.current) {
      // 播放史波克扇击帧动画
      const framePaths = AssetPathGenerator.getSpockSlapFrames();

      animationSystemRef.current.playFrameAnimation(
        containerRef.current,
        {
          type: 'frames',
          framePaths,
          frameRate: 24,
          loop: false
        },
        () => {
          onComplete?.();
        }
      );
    } else if (!isVisible) {
      animationSystemRef.current.stop();
    }
  }, [isVisible, onComplete]);

  // 组件销毁时清理动画系统
  useEffect(() => {
    return () => {
      animationSystemRef.current.destroy();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.spockSlapAnimation}>
      <div ref={containerRef} className={styles.spockContainer} />
    </div>
  );
};

// 统计面板组件
const StatsPanel: React.FC<{ stats: GameStats; gameLogic: GameLogic }> = ({ stats, gameLogic }) => (
  <div className={styles.statsPanel}>
    <div className={styles.statItem}>
      <span className={styles.statLabel}>扇击次数</span>
      <span className={styles.statValue}>{stats.totalSlaps}</span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.statLabel}>连击</span>
      <span className={`${styles.statValue} ${stats.currentCombo > 0 ? styles.combo : ''}`}>
        {stats.currentCombo > 0 && '🔥'} {stats.currentCombo}
      </span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.statLabel}>最高连击</span>
      <span className={styles.statValue}>{stats.maxCombo}</span>
    </div>
    <div className={styles.statItem}>
      <span className={styles.statLabel}>游戏时长</span>
      <span className={styles.statValue}>{gameLogic.formatTime(stats.sessionTime)}</span>
    </div>
  </div>
);

// 手势状态指示器
const GestureIndicator: React.FC<{
  currentGesture: GestureType;
  confidence: number;
  isAIReady: boolean;
}> = ({ currentGesture, confidence, isAIReady }) => {
  const getGestureDisplay = () => {
    if (!isAIReady) return { emoji: '🤖', text: 'AI加载中...', color: '#666' };

    switch (currentGesture) {
      case GestureType.READY:
        return { emoji: '✋', text: '准备中', color: '#4CAF50' };
      case GestureType.SLAP:
        return { emoji: '👋', text: '扇击!', color: '#FF5722' };
      case GestureType.FIST:
        return { emoji: '✊', text: '拳头', color: '#FF9800' };
      case GestureType.PEACE:
        return { emoji: '✌️', text: '特殊技能', color: '#9C27B0' };
      default:
        return { emoji: '👁️', text: '等待手势...', color: '#2196F3' };
    }
  };

  const display = getGestureDisplay();

  return (
    <div className={styles.gestureIndicator}>
      <div className={styles.gestureEmoji}>{display.emoji}</div>
      <div className={styles.gestureText} style={{ color: display.color }}>
        {display.text}
      </div>
      {isAIReady && (
        <div className={styles.confidenceBar}>
          <div
            className={styles.confidenceFill}
            style={{
              width: `${confidence * 100}%`,
              backgroundColor: display.color
            }}
          />
        </div>
      )}
    </div>
  );
};

// 动画视图组件 (替换原来的摄像头视图)
const AnimationView: React.FC<{
  debugCanvas: HTMLCanvasElement | null;
  debugMode: boolean;
  gestureEngine: HandGestureEngine;
  showSpockSlap: boolean;
  onSpockSlapComplete: () => void;
}> = ({ debugCanvas, debugMode, gestureEngine, showSpockSlap, onSpockSlapComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationSystemRef = useRef<AnimationSystem>(new AnimationSystem());

  // 播放史波克扇击动画
  useEffect(() => {
    if (showSpockSlap && containerRef.current) {
      const framePaths = AssetPathGenerator.getSpockSlapFrames();

      animationSystemRef.current.playFrameAnimation(
        containerRef.current,
        {
          type: 'frames',
          framePaths,
          frameRate: 24,
          loop: true // 循环播放
        },
        onSpockSlapComplete
      );
    } else if (!showSpockSlap && containerRef.current) {
      // 不显示扇击动画时，显示默认的史波克静态图像
      animationSystemRef.current.stop();
      containerRef.current.innerHTML = `
        <div class="${styles.spockDefault}">
          <img src="/src/assets/SlapKirkApp/spockslap/spockslap1.webp" alt="Spock" />
        </div>
      `;
    }
  }, [showSpockSlap, onSpockSlapComplete]);

  // 常驻显示调试canvas
  useEffect(() => {
    if (containerRef.current && debugCanvas) {
      // 确保调试canvas始终在容器中
      const existingCanvas = containerRef.current.querySelector('canvas');
      if (!existingCanvas) {
        containerRef.current.appendChild(debugCanvas);
      }

      // 设置调试canvas样式
      debugCanvas.style.position = 'absolute';
      debugCanvas.style.top = '0';
      debugCanvas.style.left = '0';
      debugCanvas.style.width = '100%';
      debugCanvas.style.height = '100%';
      debugCanvas.style.zIndex = '10'; // 确保在动画之上
      debugCanvas.style.pointerEvents = 'none';
      debugCanvas.style.backgroundColor = 'transparent';
      debugCanvas.style.borderRadius = '12px';
    }
  }, [debugCanvas]);

  // 组件销毁时清理
  useEffect(() => {
    return () => {
      animationSystemRef.current.destroy();
    };
  }, []);

  // 双击切换高级调试模式
  const handleDoubleClick = useCallback(() => {
    if (debugMode) {
      const currentAdvanced = gestureEngine.getAdvancedDebugMode();
      if (currentAdvanced) {
        gestureEngine.disableAdvancedDebug();
        console.log('关闭高级调试模式');
      } else {
        gestureEngine.enableAdvancedDebug();
        console.log('开启高级调试模式 - 显示手部关键点');
      }
    }
  }, [debugMode, gestureEngine]);

  return (
    <div className={styles.animationView} onDoubleClick={handleDoubleClick}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative' // 支持子元素绝对定位
        }}
      />
      {debugMode && (
        <div className={styles.debugLabel}>
          🔍 调试模式 - 显示手部关键点
        </div>
      )}
    </div>
  );
};

// 主游戏组件
const SlapKirkGame: React.FC = () => {
  const [gameLogic] = useState(() => new GameLogic());
  const [gestureEngine] = useState(() => new HandGestureEngine());

  const [gameState, setGameState] = useState<GameState>(GameState.LOADING);
  const [stats, setStats] = useState<GameStats>(gameLogic.getStats());
  const [currentGesture, setCurrentGesture] = useState<GestureType>(GestureType.NONE);
  const [gestureConfidence, setGestureConfidence] = useState(0);
  const [isBeingSlapped, setIsBeingSlapped] = useState(false);
  const [slapIntensity, setSlapIntensity] = useState(0);
  const [showSpockSlap, setShowSpockSlap] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  // 初始化AI引擎
  useEffect(() => {
    const initializeAI = async () => {
      console.log('开始初始化AI手势识别...');

      try {
        const success = await gestureEngine.initialize();
        if (success) {
          setGameState(GameState.READY);

          // 设置手势检测回调
          gestureEngine.onGestureDetected = (gesture: GestureResult) => {
            setCurrentGesture(gesture.type);
            setGestureConfidence(gesture.confidence);

            // 处理游戏逻辑
            gameLogic.handleGesture(gesture);
          };

          // 开始手势检测
          await gestureEngine.startDetection();

        } else {
          console.error('AI引擎初始化失败');
          setGameState(GameState.READY); // 降级到手动模式
        }
      } catch (error) {
        console.error('初始化错误:', error);
        setGameState(GameState.READY);
      }
    };

    initializeAI();

    // 设置游戏逻辑回调
    gameLogic.onStatsUpdate = (newStats) => {
      setStats({ ...newStats });
    };

    gameLogic.onSlapEffect = (intensity) => {
      // 显示史波克扇击动画
      setShowSpockSlap(true);

      // 延迟显示柯克被击中效果，让史波克动画先播放
      setTimeout(() => {
        setIsBeingSlapped(true);
        setSlapIntensity(intensity);
        setTimeout(() => setIsBeingSlapped(false), 100);
      }, 300); // 史波克动画播放300ms后显示柯克被击中
    };


    gameLogic.onGameStateChange = (state) => {
      setGameState(state);
    };

    return () => {
      gestureEngine.dispose();
    };
  }, [gameLogic, gestureEngine]);

  // 开始游戏
  const startGame = useCallback(() => {
    gameLogic.startSession();
  }, [gameLogic]);

  // 暂停/恢复游戏
  const togglePause = useCallback(() => {
    if (gameState === GameState.PLAYING) {
      gameLogic.pauseGame();
    } else if (gameState === GameState.PAUSED) {
      gameLogic.resumeGame();
    }
  }, [gameState, gameLogic]);

  // 重置游戏数据
  const resetGame = useCallback(() => {
    gameLogic.resetAllData();
  }, [gameLogic]);


  // 切换调试模式（添加防抖）
  const toggleDebugMode = useCallback(() => {
    const newDebugMode = !debugMode;

    console.log(`准备${newDebugMode ? '开启' : '关闭'}调试模式...`);

    // 先更新UI状态
    setDebugMode(newDebugMode);

    // 延迟设置引擎状态，避免阻塞UI
    setTimeout(() => {
      try {
        gestureEngine.setDebugMode(newDebugMode);
        console.log(`调试模式已${newDebugMode ? '开启' : '关闭'}`);
      } catch (error) {
        console.error('切换调试模式失败:', error);
        // 如果失败，回滚UI状态
        setDebugMode(!newDebugMode);
      }
    }, 50);
  }, [debugMode, gestureEngine]);

  // 手动扇击（用于测试或无摄像头模式）
  const manualSlap = useCallback(() => {
    const mockGesture: GestureResult = {
      type: GestureType.SLAP,
      confidence: 1.0,
      velocity: { x: 0.2, y: 0.1, magnitude: 0.22 }
    };
    gameLogic.handleGesture(mockGesture);
  }, [gameLogic]);

  return (
    <div className={styles.gameContainer}>
      {/* 头部状态栏 */}
      <div className={styles.header}>
        <div className={styles.title}>🖖 AI Slap Kirk</div>
        <div className={styles.headerControls}>
          <button
            className={styles.controlButton}
            onClick={toggleDebugMode}
            title={debugMode ? "关闭调试模式" : "开启调试模式"}
          >
            {debugMode ? '🔍' : '👁️'}
          </button>
          <button
            className={styles.controlButton}
            onClick={togglePause}
            disabled={gameState === GameState.LOADING}
          >
            {gameState === GameState.PLAYING ? '⏸️' : '▶️'}
          </button>
          <button
            className={styles.controlButton}
            onClick={resetGame}
            title="重置数据"
          >
            🔄
          </button>
        </div>
      </div>

      {/* 主游戏区域 */}
      <div className={styles.gameArea}>
        {/* 左侧动画区域 */}
        <div className={styles.leftPanel}>
          <AnimationView
            debugCanvas={gestureEngine.getDebugCanvas()}
            debugMode={debugMode}
            gestureEngine={gestureEngine}
            showSpockSlap={showSpockSlap}
            onSpockSlapComplete={() => setShowSpockSlap(false)}
          />
          <GestureIndicator
            currentGesture={currentGesture}
            confidence={gestureConfidence}
            isAIReady={gameState !== GameState.LOADING}
          />
        </div>

        {/* 右侧游戏区域 */}
        <div className={styles.rightPanel}>
          <KirkAvatar
            isBeingSlapped={isBeingSlapped}
            slapIntensity={slapIntensity}
          />

          {/* 游戏状态 */}
          <div className={styles.gameStatus}>
            {gameState === GameState.LOADING && (
              <div className={styles.loadingText}>🤖 AI加载中...</div>
            )}
            {gameState === GameState.READY && (
              <button className={styles.startButton} onClick={startGame}>
                🚀 开始游戏
              </button>
            )}
            {gameState === GameState.PAUSED && (
              <div className={styles.pausedText}>⏸️ 游戏已暂停</div>
            )}
          </div>

          {/* 测试按钮（开发用） */}
          {gameState === GameState.PLAYING && (
            <button
              className={styles.manualSlapButton}
              onClick={manualSlap}
              title="手动扇击（测试用）"
            >
              👋 手动扇击
            </button>
          )}
        </div>
      </div>

      {/* 统计面板 */}
      <StatsPanel stats={stats} gameLogic={gameLogic} />

    </div>
  );
};

// 主App类
export class SlapKirkApp extends VirtualApp {
  static icon: string = config.icon;
  static name: string = config.name;
  static id = config.id;

  root: Root | null = null;

  launch() {
    this.openWindow();
  }

  openWindow() {
    const window = WindowManager.ins.showWindow("", {
      title: config.name,
      icon: config.icon,
      x: config.defaultWindow.x || 200,
      y: config.defaultWindow.y || 100,
      width: config.defaultWindow.width,
      height: config.defaultWindow.height,
    });

    this.root = createRoot(window.content);
    this.root.render(React.createElement(SlapKirkGame));

    this.windows.set(window.id, window);
    window.on(Window.EventType.ON_CLOSE, this.onClickClose);
  }

  onClickClose = () => {
    AppManager.ins.exitApp(SlapKirkApp);
  }

  onExit() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}
