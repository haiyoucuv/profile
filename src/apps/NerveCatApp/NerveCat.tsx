import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './NerveCat.module.less';

// 游戏状态枚举
enum GameState {
  READY = 'ready',
  PLAYING = 'playing',
  WIN = 'win',
  LOSE = 'lose'
}

// 方块类型枚举
enum CellType {
  EMPTY = 0,
  BLOCKED = 1,
  CAT = 2
}

// 六边形方向数组 (轴坐标, 平顶)
const DIRECTIONS = [
  [1, 0], [1, -1], [0, -1],
  [-1, 0], [-1, 1], [0, 1]
];

// 游戏配置
const GAME_CONFIG = {
  GRID_RADIUS: 5, // 网格半径（中心到边缘的距离）
  IDEAL_CELL_SIZE: 50, // 理想的方块大小（像素）
  PADDING: 20 // 容器padding
};

// 生成六边形网格坐标
export const generateHexGrid = (radius: number): [number, number][] => {
  const grid: [number, number][] = [];
  for (let q = -radius; q <= radius; q++) {
    for (let r = Math.max(-radius, -q - radius); r <= Math.min(radius, -q + radius); r++) {
      grid.push([q, r]);
    }
  }
  return grid;
};

export const NerveCat: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.READY);
  const [grid, setGrid] = useState<Map<string, CellType>>(new Map());
  const [catPosition, setCatPosition] = useState<[number, number]>([0, 0]);
  const [moves, setMoves] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gridCoords = generateHexGrid(GAME_CONFIG.GRID_RADIUS);

  // 初始化游戏网格
  const initializeGrid = useCallback(() => {
    const newGrid = new Map<string, CellType>();
    gridCoords.forEach(([q, r]) => {
      newGrid.set(`${q},${r}`, CellType.EMPTY);
    });
    // 设置猫的初始位置 (中心)
    newGrid.set('0,0', CellType.CAT);
    return newGrid;
  }, [gridCoords]);

  // 检查位置是否在边界
  const isOnBorder = useCallback((q: number, r: number): boolean => {
    const s = -q - r;
    return Math.abs(q) === GAME_CONFIG.GRID_RADIUS || Math.abs(r) === GAME_CONFIG.GRID_RADIUS || Math.abs(s) === GAME_CONFIG.GRID_RADIUS;
  }, []);

  // 获取邻居坐标
  const getNeighbors = useCallback((q: number, r: number): [number, number][] => {
    return DIRECTIONS.map(([dq, dr]) => [q + dq, r + dr]);
  }, []);

  // 计算到边界的最短路径 (BFS)
  const findShortestPath = useCallback((startQ: number, startR: number): [number, number] | null => {
    const visited = new Set<string>();
    const queue: Array<{ q: number; r: number; path: [number, number][] }> = [
      { q: startQ, r: startR, path: [[startQ, startR]] }
    ];

    while (queue.length > 0) {
      const current = queue.shift()!;
      const key = `${current.q},${current.r}`;

      if (visited.has(key)) continue;
      visited.add(key);

      // 如果到达边界，返回下一步位置
      if (isOnBorder(current.q, current.r)) {
        return current.path[1] || null;
      }

      // 检查所有邻居
      for (const [nq, nr] of getNeighbors(current.q, current.r)) {
        const nkey = `${nq},${nr}`;
        if (grid.has(nkey) && grid.get(nkey) === CellType.EMPTY && !visited.has(nkey)) {
          queue.push({
            q: nq,
            r: nr,
            path: [...current.path, [nq, nr]]
          });
        }
      }
    }

    return null; // 没有找到路径
  }, [grid, isOnBorder, getNeighbors]);

  // 猫的移动
  const moveCat = useCallback(() => {
    const nextMove = findShortestPath(catPosition[0], catPosition[1]);
    
    if (nextMove) {
      // 更新网格
      setGrid(prev => {
        const newGrid = new Map(prev);
        newGrid.set(`${catPosition[0]},${catPosition[1]}`, CellType.EMPTY);
        newGrid.set(`${nextMove[0]},${nextMove[1]}`, CellType.CAT);
        return newGrid;
      });
      
      setCatPosition(nextMove);
      
      // 检查是否到达边界
      if (isOnBorder(nextMove[0], nextMove[1])) {
        setGameState(GameState.LOSE);
      }
    } else {
      // 猫被围住了
      setGameState(GameState.WIN);
    }
  }, [catPosition, findShortestPath, isOnBorder]);

  // 处理方块点击
  const handleCellClick = useCallback((q: number, r: number) => {
    const key = `${q},${r}`;
    if (gameState !== GameState.PLAYING || grid.get(key) !== CellType.EMPTY) {
      return;
    }

    // 放置障碍物
    setGrid(prev => {
      const newGrid = new Map(prev);
      newGrid.set(key, CellType.BLOCKED);
      return newGrid;
    });

    setMoves(prev => prev + 1);

    // 延迟让猫移动，给玩家视觉反馈
    setTimeout(() => {
      moveCat();
    }, 300);
  }, [gameState, grid, moveCat]);

  // 开始游戏
  const startGame = useCallback(() => {
    setGrid(initializeGrid());
    setCatPosition([0, 0]);
    setMoves(0);
    setGameState(GameState.PLAYING);
  }, [initializeGrid]);

  // 重新开始游戏
  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  // 初始化游戏
  useEffect(() => {
    startGame();
  }, [startGame]);

  // 更新缩放比例
  const updateScale = useCallback(() => {
    if (containerRef.current && gameContainerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      
      // 计算理想大小（9x9网格，每个cell 50px，加上padding）
      const idealWidth = GAME_CONFIG.GRID_RADIUS * GAME_CONFIG.IDEAL_CELL_SIZE * 2 + GAME_CONFIG.PADDING * 2; // 六边形网格的宽度
      const idealHeight = idealWidth + 150; // 额外空间给header和controls
      
      // 计算缩放比例
      const scaleX = (containerWidth - 20) / idealWidth; // 减去padding
      const scaleY = (containerHeight - 20) / idealHeight;
      const newScale = Math.min(scaleX, scaleY, 1); // 不超过1
      
      setScale(newScale);
    }
  }, []);

  // 监听应用窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      const newConfig = GAME_CONFIG;
      setGrid(initializeGrid()); // Re-initialize grid to reset positions
      setCatPosition([0, 0]); // Reset cat position to center
      setMoves(0);
      setGameState(GameState.PLAYING);
    };

    // 使用 ResizeObserver 监听应用容器大小变化
    const appContainer = containerRef.current;
    if (appContainer) {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(appContainer);
      
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [initializeGrid]);

  // 渲染游戏状态
  const renderGameState = () => {
    switch (gameState) {
      case GameState.READY:
        return <div className={styles.gameState}>准备开始</div>;
      case GameState.PLAYING:
        return <div className={styles.gameState}>游戏中 - 移动次数: {moves}</div>;
      case GameState.WIN:
        return (
          <div className={styles.gameState}>
            <div className={styles.result}>🎉 胜利！</div>
            <div>你成功围住了神经猫！</div>
            <button onClick={restartGame} className={styles.restartBtn}>再玩一次</button>
          </div>
        );
      case GameState.LOSE:
        return (
          <div className={styles.gameState}>
            <div className={styles.result}>😿 失败！</div>
            <div>神经猫逃走了！</div>
            <button onClick={restartGame} className={styles.restartBtn}>再玩一次</button>
          </div>
        );
    }
  };

  // 渲染网格
  const renderGrid = () => {
    return (
      <div className={styles.grid}>
        {gridCoords.map(([q, r]) => {
          const key = `${q},${r}`;
          const cell = grid.get(key) || CellType.EMPTY;
          return (
            <div
              key={key}
              className={`${styles.cell} ${cell === CellType.BLOCKED ? styles.blocked : cell === CellType.CAT ? styles.cat : styles.empty}`}
              onClick={() => handleCellClick(q, r)}
              style={{
                position: 'absolute',
                left: `${(q * 1.5 + r * 0.75) * GAME_CONFIG.IDEAL_CELL_SIZE}px`,
                top: `${(r * Math.sqrt(3)/2) * GAME_CONFIG.IDEAL_CELL_SIZE}px`
              }}
            >
              {cell === CellType.CAT && <span className={styles.catIcon}>🐱</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.nerveCat} ref={containerRef}>
      <div className={styles.header}>
        <h2>围住神经猫</h2>
        <p>点击六边形围住神经猫，阻止它到达边界！</p>
      </div>
      
      {renderGameState()}
      
      <div className={styles.gameContainer} ref={gameContainerRef}>
        {renderGrid()}
      </div>
      
      {gameState === GameState.PLAYING && (
        <div className={styles.controls}>
          <button onClick={restartGame} className={styles.restartBtn}>重新开始</button>
        </div>
      )}
    </div>
  );
};
