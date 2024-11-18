import { useEffect, useRef, useState } from "react";

import "./App.less";
import { Game } from "./Game/Game.ts";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game>(null);

  useEffect(() => {
    const initGame = async () => {
      gameRef.current = new Game(canvasRef.current);
      await gameRef.current.start();

      setIsLoading(false);
    };

    initGame();

    return () => {
      gameRef.current?.destroy();
    };
  }, []);

  return (
    <div className="app">
      <canvas 
        className="gameCanvas" 
        onContextMenu={(e) => e.preventDefault()} 
        ref={canvasRef} 
      />
      {isLoading && (
        <div className="loading">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      )}
    </div>
  );
}

export default App;
