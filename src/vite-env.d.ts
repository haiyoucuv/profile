/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import type { AttributifyAttributes } from '@unocss/preset-attributify'

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


declare module 'react' {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
}