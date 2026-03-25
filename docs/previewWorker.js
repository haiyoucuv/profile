/**
 * StackBlitz/Vite-like Service Worker
 *
 * 工作原理：
 * 1. 主线程将所有工作区文件（raw）推送到 SW
 * 2. 主线程将编译好的 bundle 以原始入口路径为 key 推送到 SW
 *    例如：/main.ts → 编译后的 JS 内容（Content-Type: application/javascript）
 * 3. SW 拦截 /preview-vfs/ 下的所有请求，直接从缓存返回，不修改 HTML
 */

const fileCache = new Map();

self.addEventListener('message', (event) => {
    const data = event.data;
    if (!data) return;

    const { type, files, requestId } = data;

    if (type === 'UPDATE_FILES' && Array.isArray(files)) {
        console.log('[SW] Received UPDATE_FILES, count:', files.length);
        files.forEach(f => {
            fileCache.set(f.path, { content: f.content, type: f.contentType || 'text/plain' });
        });
        console.log('[SW] Cache keys:', Array.from(fileCache.keys()));
    } else if (type === 'CLEAR') {
        fileCache.clear();
    }

    if (requestId && event.source) {
        event.source.postMessage({ type: 'ACK', requestId });
    }
});

self.addEventListener('install', () => {
    console.log('[SW] Installing...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(
        self.clients.claim().then(() => {
            return self.clients.matchAll({ type: 'window' }).then(clients => {
                console.log('[SW] Notifying', clients.length, 'clients to re-sync...');
                clients.forEach(client => client.postMessage({ type: 'SW_READY' }));
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const vfsPrefix = '/preview-vfs';

    if (!url.pathname.startsWith(vfsPrefix)) return;

    // 把请求路径映射到 VFS 路径：/preview-vfs/main.ts → /main.ts
    let vfsPath = url.pathname.slice(vfsPrefix.length) || '/';
    if (!vfsPath.startsWith('/')) vfsPath = '/' + vfsPath;
    if (vfsPath === '/' || vfsPath.endsWith('/')) vfsPath = vfsPath.replace(/\/$/, '') + '/index.html';

    event.respondWith((async () => {
        const cached = fileCache.get(vfsPath);

        if (cached) {
            console.log('[SW] Serving:', vfsPath, '→', cached.type);
            return new Response(cached.content, {
                status: 200,
                headers: {
                    'Content-Type': cached.type,
                    'Access-Control-Allow-Origin': '*',
                }
            });
        }

        console.warn('[SW] 404:', vfsPath, '\nAvailable:', Array.from(fileCache.keys()));
        return new Response(
            `<pre>404: ${vfsPath} not found in VFS\n\nAvailable:\n${Array.from(fileCache.keys()).join('\n')}</pre>`,
            { status: 404, headers: { 'Content-Type': 'text/html' } }
        );
    })());
});
