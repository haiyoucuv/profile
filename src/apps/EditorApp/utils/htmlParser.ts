/**
 * htmlParser.ts — HTML 应用层解析工具
 *
 * 职责：
 * 1. 从 HTML 中提取 <script type="module"> 入口，转换为 VFS 绝对路径
 * 2. 将编译后的 dist/*.js 路径回写到 HTML 的 script src，供预览使用
 */

// ── 入口提取 ────────────────────────────────────

/**
 * 从 HTML 内容中提取所有 type="module" script 的 src，
 * 并转换为 VFS 绝对路径（供 Builder.build() 使用）。
 *
 * @param html     HTML 文本内容
 * @param htmlDir  HTML 文件所在的 VFS 目录（如 /EditorApp）
 * @param root     项目根路径（如 /EditorApp）
 * @returns        VFS 绝对路径列表，如 ['/EditorApp/main.ts', '/EditorApp/analytics.ts']
 */
export function extractScriptEntries(html: string, htmlDir: string, root: string): string[] {
    const regex = /<script\b([^>]*?)>/gi;
    const entries: string[] = [];
    let match: RegExpExecArray | null;

    while ((match = regex.exec(html)) !== null) {
        const attrs = match[1];
        if (!attrs.includes('type="module"')) continue;

        const srcMatch = /src="([^"]+)"/.exec(attrs);
        if (!srcMatch) continue;

        const src = srcMatch[1].replace(/\\/g, '/');
        // 绝对路径：/main.ts → {root}/main.ts
        if (src.startsWith('/')) {
            entries.push(`${root}${src}`.replace(/\/+/g, '/'));
        } else {
            // 相对路径：./main.ts → {htmlDir}/main.ts
            entries.push(`${htmlDir}/${src.replace(/^\.\//, '')}`);
        }
    }

    return entries;
}

// ── 输出路径映射 ─────────────────────────────────

/**
 * 根据 Builder 的编译结果，计算入口路径 → 输出文件路径的映射。
 *
 * esbuild 以 outbase 为基准计算输出路径：
 *   入口 /EditorApp/main.ts，outbase=/EditorApp，outdir=dist → 输出 dist/main.js
 *
 * @param entryPoints 原始入口路径列表
 * @param outputFiles Builder 返回的输出文件列表
 * @param root        项目根路径（= outbase）
 * @returns Map<原始入口路径, 输出文件名>，如 '/EditorApp/main.ts' → 'main.js'
 */
export function buildEntryOutputMap(
    entryPoints: string[],
    outputFiles: { path: string }[],
    root: string
): Map<string, string> {
    const map = new Map<string, string>();
    const normalRoot = root.endsWith('/') ? root : root + '/';

    for (const entry of entryPoints) {
        // 计算预期的输出文件名：去掉 root 前缀 + 换扩展名为 .js
        const relative = entry.startsWith(normalRoot)
            ? entry.slice(normalRoot.length)
            : entry.replace(/^\/+/, '');
        const expectedName = relative.replace(/\.(ts|tsx|js|jsx)$/, '.js');

        // 在输出文件列表中查找匹配的文件
        const match = outputFiles.find(f => {
            const outName = f.path.replace(/^dist\//, '');
            return outName === expectedName;
        });

        if (match) {
            const outName = match.path.replace(/^dist\//, ''); // "main.js"
            map.set(entry, outName);
        }
    }

    return map;
}

// ── HTML 改写 ────────────────────────────────────

/**
 * 将 HTML 中 <script type="module"> 的 src 从源文件路径改写为编译产物路径，
 * 并将绝对路径统一转换为相对路径（保证 SW 能正确拦截）。
 *
 * 例：src="./main.ts" → src="./dist/main.js"
 *     src="/main.ts"  → src="./dist/main.js"
 *
 * @param html         原始 HTML 内容
 * @param entryMap     入口路径 → 输出文件名（来自 buildEntryOutputMap）
 * @param htmlDir      HTML 所在 VFS 目录（用于解析相对路径）
 * @param root         项目根路径
 */
export function rewriteHtmlForPreview(
    html: string,
    entryMap: Map<string, string>,
    htmlDir: string,
    root: string
): string {
    // 1. 改写 script src
    let result = html.replace(
        /(<script\b[^>]*?)(src="([^"]+)")([^>]*?>)/gi,
        (fullMatch, before, srcAttr, src, after) => {
            // 不处理非 module script
            if (!before.includes('type="module"') && !after.includes('type="module"')) {
                return fullMatch;
            }

            const normalSrc = src.replace(/\\/g, '/');
            // 推算出 VFS 绝对路径
            let absEntry: string;
            if (normalSrc.startsWith('/')) {
                absEntry = `${root}${normalSrc}`.replace(/\/+/g, '/');
            } else {
                absEntry = `${htmlDir}/${normalSrc.replace(/^\.\//, '')}`;
            }

            const outputName = entryMap.get(absEntry);
            if (outputName) {
                return `${before}src="./dist/${outputName}"${after}`;
            }
            return fullMatch; // 未知入口，保持原样
        }
    );

    // 2. 将其余 src="/" href="/" 的绝对路径转为相对路径（避免请求逃出 /preview-vfs/）
    result = result.replace(/(src|href)="\/(?!\/)/g, '$1="./');

    return result;
}
