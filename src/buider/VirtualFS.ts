// 虚拟文件系统实现
export class VirtualFS {
    private files: Map<any, any>;
    private locks: Set<any>;

    constructor() {
        this.files = new Map()
        this.locks = new Set()
    }

    async readFile(path) {
        await this.waitLock(path)
        return this.files.get(path) ?? null
    }

    async writeFile(path, content) {
        this.lock(path)
        this.files.set(path, content)
        this.unlock(path)
    }

    lock(path) {
        this.locks.add(path)
    }

    unlock(path) {
        this.locks.delete(path)
    }

    async waitLock(path) {
        while (this.locks.has(path)) {
            await new Promise(r => setTimeout(r, 10))
        }
    }
}
