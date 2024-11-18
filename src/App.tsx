import { useEffect, useRef } from "react";

import "./App.less";
import { Game } from "./Game/Game.ts";

function App() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game>(null);

  useEffect(() => {
    gameRef.current = new Game(canvasRef.current);

    return () => {
      gameRef.current.destroy();
    };
  }, []);

  return <div className="app">
    <canvas className="gameCanvas" onContextMenu={(e) => e.preventDefault()} ref={canvasRef} />
  </div>;

}

export default App;
