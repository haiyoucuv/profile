export const createHMRSocket = () => {
    const ws = new WebSocket('wss://your-hmr-server')

    ws.addEventListener('message', ({ data }) => {
        const payload = JSON.parse(data)

        switch(payload.type) {
            case 'update':
                payload.updates.forEach(update => {
                    const el = document.querySelector(`[data-vite-module-id="${update.id}"]`)
                    if(el) {
                        const newLink = update.timestamp
                            ? `${update.id}?t=${update.timestamp}`
                            : update.id
                        el.href = newLink
                    }
                })
                break

            case 'reload':
                window.location.reload()
                break
        }
    })
}

export const sendFileChange = (path) => {
    navigator.serviceWorker.controller.postMessage({
        type: 'file-change',
        path
    })
}
