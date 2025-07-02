/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * index/createDelaunator
 * @param coords `~lib/staticarray/StaticArray<f64>`
 */
export declare function createDelaunator(coords: ArrayLike<number>): void;
/**
 * index/getTriangles
 * @returns `~lib/staticarray/StaticArray<u32>`
 */
export declare function getTriangles(): ArrayLike<number>;
