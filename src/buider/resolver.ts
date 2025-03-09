import { VirtualFS } from './VirtualFS';

let fs: VirtualFS;

export const resolvePlugin = () => ({
    name: 'browser-resolver',
    setup(build) {
        // 处理文件路径解析
        build.onResolve({ filter: /.*/ }, async (args) => {
            if (args.kind === 'entry-point') {
                return { path: args.path, namespace: 'browser-module' };
            }

            if (args.kind === 'import-statement') {
                // 如果是相对路径或绝对路径
                if (args.path.startsWith('./') || args.path.startsWith('../') || args.path.startsWith('/')) {
                    const importerDir = args.importer ? args.importer.split('/').slice(0, -1).join('/') : '';
                    const resolvedPath = importerDir ? `${importerDir}/${args.path}` : args.path;
                    
                    // 先尝试原始路径
                    if (await fs.exists(resolvedPath)) {
                        return {
                            path: resolvedPath,
                            namespace: 'browser-module'
                        };
                    }
                    
                    // 如果找不到，尝试添加.ts后缀
                    const resolvedPathWithTs = resolvedPath + '.ts';
                    if (await fs.exists(resolvedPathWithTs)) {
                        return {
                            path: resolvedPathWithTs,
                            namespace: 'browser-module'
                        };
                    }
                }

                // 如果是外部模块，直接返回原始路径，让浏览器通过importMap解析
                return { external: true, path: args.path };
            }

            // 如果无法解析，返回原始路径
            return { path: args.path };
        });
    }
})

export function initResolver(virtualFS: VirtualFS) {
    fs = virtualFS;
}
