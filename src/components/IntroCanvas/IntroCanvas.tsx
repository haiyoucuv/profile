import { useEffect, useRef } from "react";

import { IntroWorld } from "./IntroWorld.ts";

export const IntroCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;

        const world = new IntroWorld();
        world.init(canvas);

        return () => {
            world.destroy();
        };

    }, [canvasRef]);


    return <canvas
        className="w-full h-full pointer-events-auto"
        ref={canvasRef}
    />;

};