import { useEffect, useRef, useState } from "react";

import { BatchedMesh, BufferGeometry, Mesh } from "three";

import {
	computeBoundsTree, disposeBoundsTree,
	computeBatchedBoundsTree, disposeBatchedBoundsTree, acceleratedRaycast,
} from 'three-mesh-bvh';

// Add the extension functions
BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
Mesh.prototype.raycast = acceleratedRaycast;

BatchedMesh.prototype.computeBoundsTree = computeBatchedBoundsTree;
BatchedMesh.prototype.disposeBoundsTree = disposeBatchedBoundsTree;
BatchedMesh.prototype.raycast = acceleratedRaycast;

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
