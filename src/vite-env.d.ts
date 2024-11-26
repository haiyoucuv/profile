/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svga" {
  const src: string;
  export default src;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.fbx" {
  const src: string;
  export default src;
}

declare module "*.svg?react" {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
}