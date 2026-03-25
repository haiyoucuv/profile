/**
 * Service Worker - 纯代理模式（无缓存）
 *
 * 工作原理：
 * 1. SW 拦截 /preview-vfs/ 的请求
 * 2. 通过 MessageChannel 向主线程实时请求文件内容
 * 3. 主线程返回内容后，SW 将其作为响应返回给 iframe
 * 4. SW 完全无状态，不缓存任何内容
 */

self.addEventListener('install', () => {
    console.log('[SW] Installing...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const vfsPrefix = '/preview-vfs';

    if (!url.pathname.startsWith(vfsPrefix)) return;

    // 把请求路径映射到 VFS 相对路径：/preview-vfs/main.ts → ./main.ts
    let vfsPath = url.pathname.slice(vfsPrefix.length) || '/';
    if (!vfsPath.startsWith('/')) vfsPath = '/' + vfsPath;
    if (vfsPath === '/' || vfsPath.endsWith('/')) {
        vfsPath = vfsPath.replace(/\/$/, '') + '/index.html';
    }

    event.respondWith(fetchFromClient(vfsPath));
});

/**
 * 向主线程（控制页面的 client）请求文件内容
 * 使用 MessageChannel 实现请求-响应模式
 */
async function fetchFromClient(vfsPath) {
    // 找到发起请求的 iframe 对应的父页面 client
    const clients = await self.clients.matchAll({ type: 'window' });

    if (clients.length === 0) {
        return new Response(`<pre>No client available to serve: ${vfsPath}</pre>`, {
            status: 503,
            headers: { 'Content-Type': 'text/html' }
        });
    }

    // 取第一个可用的 window client（即主页面）
    const client = clients[0];

    return new Promise((resolve) => {
        const channel = new MessageChannel();

        // 设置超时
        const timeout = setTimeout(() => {
            resolve(new Response(`<pre>Timeout waiting for: ${vfsPath}</pre>`, {
                status: 504,
                headers: { 'Content-Type': 'text/html' }
            }));
        }, 5000);

        // 监听主线程的响应
        channel.port1.onmessage = (event) => {
            clearTimeout(timeout);
            const { content, contentType, error } = event.data;

            if (error) {
                console.warn(`[SW] Client reported error for ${vfsPath}:`, error);
                resolve(new Response(`<pre>Error: ${error}\n\nPath: ${vfsPath}</pre>`, {
                    status: 404,
                    headers: { 'Content-Type': 'text/html' }
                }));
            } else {
                console.log(`[SW] Serving (proxy): ${vfsPath} (${contentType})`);
                resolve(new Response(content, {
                    status: 200,
                    headers: {
                        'Content-Type': contentType || 'text/plain',
                        'Access-Control-Allow-Origin': '*',
                    }
                }));
            }
        };

        // 向主线程发起文件请求
        client.postMessage({ type: 'FETCH_FILE', path: vfsPath }, [channel.port2]);
    });
}
