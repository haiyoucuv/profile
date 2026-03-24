import { IFileSystem } from "@system";

export let fs: IFileSystem;
export let projectRoot: string = '';

async function resolveInternalPath(p: string, importerDir: string): Promise<string> {
    let resolved = p;
    if (p.startsWith('/')) {
        // 如果是绝对路径，且不以 projectRoot 开头，则补上 projectRoot
        if (projectRoot && !p.startsWith(projectRoot)) {
            resolved = (projectRoot + '/' + p);
        }
    } else if (p.startsWith('./') || p.startsWith('../')) {
        resolved = (importerDir + '/' + p);
    }
    return resolved.replace(/\/+/g, '/');
}

export const resolvePlugin = () => ({
    name: 'browser-resolver',
    setup(build) {
        // 处理文件路径解析
        build.onResolve({ filter: /.*/ }, async (args) => {
            if (args.kind === 'entry-point') {
                const p = await resolveInternalPath(args.path, projectRoot);
                return { path: String(p), namespace: 'vfs' };
            }

            if (args.kind === 'import-statement') {
                const isLocal = args.path.startsWith('./') || args.path.startsWith('../') || args.path.startsWith('/');
                
                if (isLocal) {
                    const importerDir = args.importer ? args.importer.split('/').slice(0, -1).join('/') : projectRoot;
                    const resolvedPath = await resolveInternalPath(args.path, importerDir);

                    // 先尝试解析后的路径
                    if (await fs.exists(resolvedPath)) {
                        return { path: String(resolvedPath), namespace: 'vfs' };
                    }
                    
                    // 尝试常见后缀
                    for (const ext of ['.ts', '.tsx', '.js', '.jsx', '.css', '.less']) {
                        if (await fs.exists(resolvedPath + ext)) {
                            return { path: String(resolvedPath + ext), namespace: 'vfs' };
                        }
                    }
                }

                // 如果不是局部路径，或者是找不到的局部路径，则标记为 external
                // 由浏览器通过 index.html 中的 importmap 处理
                return { external: true, path: String(args.path) };
            }

            const p = await resolveInternalPath(args.path, projectRoot);
            return { path: p };
        });
    }
})

export function initResolver(virtualFS: IFileSystem, root: string = '') {
    fs = virtualFS;
    projectRoot = root;
}
