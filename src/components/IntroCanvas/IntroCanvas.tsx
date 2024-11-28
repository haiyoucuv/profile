import { useEffect, useRef } from "react";

import { IntroWorld } from "./IntroWorld.ts";

export const IntroCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);


    useEffect(() => {

        const world = new IntroWorld();
        world.init(canvasRef.current);

        return () => {
            world.destroy();
        };

    }, []);


    return <canvas
        className="w-full h-full pointer-events-auto"
        ref={canvasRef}
    />;

};