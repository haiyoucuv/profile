export interface FileNode {
    id: string; // 使用 path 作为 ID
    name: string;
    isDir: boolean;
    children?: FileNode[];
}

export type ContextMenuData = {
    x: number;
    y: number;
    path: string;
    isDir: boolean;
} | null;
