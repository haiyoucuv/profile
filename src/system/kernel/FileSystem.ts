class FileSystemImpl {
    private dbName = 'MyWebOS_FS';
    private storeName = 'files';
    private db: IDBDatabase | null = null;
    private initPromise: Promise<void> | null = null;

    constructor() {
        this.initPromise = this.initDB();
    }

    private async getDB(): Promise<IDBDatabase> {
        if (!this.db) {
            if (!this.initPromise) {
                this.initPromise = this.initDB();
            }
            await this.initPromise;
        }
        return this.db!;
    }

    private async initDB(): Promise<void> {
        if (this.db) this.db.close();
        this.db = null;

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onerror = () => {
                this.initPromise = null;
                reject(request.error);
            };
            request.onsuccess = () => {
                this.db = request.result;
                this.db.onversionchange = () => {
                    this.db?.close();
                    this.db = null;
                    this.initPromise = null;
                };
                resolve();
            };
            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    // path as the key, e.g. "/usr/local/bin"
                    db.createObjectStore(this.storeName, { keyPath: 'path' });
                }
            };
        });
    }

    private normalizePath(path: string): string {
        let p = path.replace(/\\/g, '/');
        const parts = p.split('/');
        const stack: string[] = [];
        for (const part of parts) {
            if (part === '' || part === '.') continue;
            if (part === '..') {
                if (stack.length > 0) stack.pop();
            } else {
                stack.push(part);
            }
        }
        return '/' + stack.join('/');
    }

    private getParentPath(path: string): string {
        const p = this.normalizePath(path);
        if (p === '/') return '/';
        const lastSlash = p.lastIndexOf('/');
        return lastSlash === 0 ? '/' : p.slice(0, lastSlash);
    }

    private getBaseName(path: string): string {
        const p = this.normalizePath(path);
        if (p === '/') return '';
        const lastSlash = p.lastIndexOf('/');
        return p.slice(lastSlash + 1);
    }

    async writeFile(path: string, content: string | Blob): Promise<void> {
        const p = this.normalizePath(path);
        if (p === '/') throw new Error('Cannot overwrite root directory');
        
        // Ensure parent exists
        const parent = this.getParentPath(p);
        const parentStat = await this.stat(parent);
        if (!parentStat && parent !== '/') {
            await this.mkdir(parent, { recursive: true });
        } else if (parentStat && parentStat.type !== 'dir') {
            throw new Error(`Parent ${parent} is not a directory`);
        }

        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            try {
                const tx = db.transaction(this.storeName, 'readwrite');
                const store = tx.objectStore(this.storeName);
                const size = typeof content === 'string' ? content.length : content.size;
                
                const fileData = {
                    path: p,
                    type: 'file',
                    content,
                    size,
                    ctime: Date.now(),
                    mtime: Date.now()
                };
                
                const req = store.put(fileData);
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            } catch (e: any) {
                if (e.name === 'InvalidStateError') {
                    this.db = null;
                    this.initPromise = null;
                    this.writeFile(path, content).then(resolve).catch(reject);
                } else {
                    reject(e);
                }
            }
        });
    }

    async readFile(path: string): Promise<string | Blob> {
        const p = this.normalizePath(path);
        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            try {
                const tx = db.transaction(this.storeName, 'readonly');
                const store = tx.objectStore(this.storeName);
                const req = store.get(p);
                
                req.onsuccess = () => {
                    if (req.result && req.result.type === 'file') {
                        resolve(req.result.content);
                    } else if (req.result && req.result.type === 'dir') {
                        reject(new Error(`Is a directory: ${p}`));
                    } else {
                        reject(new Error(`File not found: ${p}`));
                    }
                };
                req.onerror = () => reject(req.error);
            } catch (e: any) {
                if (e.name === 'InvalidStateError') {
                    this.db = null;
                    this.initPromise = null;
                    this.readFile(path).then(resolve).catch(reject);
                } else {
                    reject(e);
                }
            }
        });
    }

    async mkdir(path: string, options?: { recursive?: boolean }): Promise<void> {
        const p = this.normalizePath(path);
        if (p === '/') return; // Root always exists
        
        if (options?.recursive) {
            const parent = this.getParentPath(p);
            if (parent !== '/') {
                await this.mkdir(parent, { recursive: true });
            }
        } else {
            const parent = this.getParentPath(p);
            const stat = await this.stat(parent);
            if (!stat && parent !== '/') {
                throw new Error(`Parent directory ${parent} does not exist`);
            }
        }

        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const dirData = {
                path: p,
                type: 'dir',
                size: 0,
                ctime: Date.now(),
                mtime: Date.now()
            };
            const req = store.put(dirData);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    async stat(path: string): Promise<{ type: 'file' | 'dir'; size: number; ctime: number; mtime: number } | null> {
        const p = this.normalizePath(path);
        if (p === '/') return { type: 'dir', size: 0, ctime: 0, mtime: 0 };
        
        let db: IDBDatabase;
        try {
            db = await this.getDB();
        } catch (e) {
            return null; // Fatal DB error
        }

        return new Promise((resolve, reject) => {
            try {
                const tx = db.transaction(this.storeName, 'readonly');
                const store = tx.objectStore(this.storeName);
                const req = store.get(p);
                
                req.onsuccess = () => {
                    if (req.result) {
                        resolve({
                            type: req.result.type,
                            size: req.result.size,
                            ctime: req.result.ctime,
                            mtime: req.result.mtime
                        });
                    } else {
                        resolve(null);
                    }
                };
                req.onerror = () => reject(req.error);
            } catch (e: any) {
                if (e.name === 'InvalidStateError') {
                    // Connection closed, reset and retry once
                    this.db = null;
                    this.initPromise = null;
                    this.stat(path).then(resolve).catch(reject);
                } else {
                    reject(e);
                }
            }
        });
    }

    async exists(path: string): Promise<boolean> {
        const s = await this.stat(path);
        return s !== null;
    }

    async readdir(path: string): Promise<string[]> {
        const p = this.normalizePath(path);
        const stat = await this.stat(p);
        if (!stat && p !== '/') {
            throw new Error(`Directory not found: ${p}`);
        }
        if (stat && stat.type === 'file') {
            throw new Error(`Not a directory: ${p}`);
        }

        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            try {
                const tx = db.transaction(this.storeName, 'readonly');
                const store = tx.objectStore(this.storeName);
                const req = store.getAllKeys();
                
                req.onsuccess = () => {
                    const keys = req.result as string[];
                    const children = new Set<string>();
                    const prefix = p === '/' ? '/' : p + '/';
                    
                    for (const key of keys) {
                        if (key.startsWith(prefix) && key !== p) {
                            const relative = key.slice(prefix.length);
                            // Get only immediate children
                            const slashIndex = relative.indexOf('/');
                            if (slashIndex === -1) {
                                children.add(relative);
                            } else {
                                children.add(relative.slice(0, slashIndex));
                            }
                        }
                    }
                    resolve(Array.from(children));
                };
                req.onerror = () => reject(req.error);
            } catch (e: any) {
                if (e.name === 'InvalidStateError') {
                    this.db = null;
                    this.initPromise = null;
                    this.readdir(path).then(resolve).catch(reject);
                } else {
                    reject(e);
                }
            }
        });
    }

    async unlink(path: string): Promise<void> {
        const p = this.normalizePath(path);
        if (p === '/') throw new Error('Cannot unlink root');
        const stat = await this.stat(p);
        if (!stat) throw new Error(`File not found: ${p}`);
        if (stat.type === 'dir') throw new Error(`Is a directory: ${p}`);

        const db = await this.getDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const req = store.delete(p);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
        });
    }

    async rmdir(path: string, options?: { recursive?: boolean }): Promise<void> {
        const p = this.normalizePath(path);
        if (p === '/') throw new Error('Cannot rmdir root');
        const stat = await this.stat(p);
        if (!stat) throw new Error(`Directory not found: ${p}`);
        if (stat.type === 'file') throw new Error(`Not a directory: ${p}`);

        const children = await this.readdir(p);
        if (children.length > 0 && !options?.recursive) {
            throw new Error(`Directory not empty: ${p}`);
        }

        const db = await this.getDB();
        
        if (options?.recursive) {
            // Need to delete all children first
            const keysReq = await new Promise<string[]>((res, rej) => {
                const tx = db.transaction(this.storeName, 'readonly');
                const store = tx.objectStore(this.storeName);
                const r = store.getAllKeys();
                r.onsuccess = () => res(r.result as string[]);
                r.onerror = () => rej(r.error);
            });
            
            const prefix = p + '/';
            const toDelete = keysReq.filter(k => k.startsWith(prefix) || k === p);
            
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, 'readwrite');
                const store = tx.objectStore(this.storeName);
                for (const k of toDelete) {
                    store.delete(k);
                }
                tx.oncomplete = () => resolve();
                tx.onerror = () => reject(tx.error);
            });
        } else {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, 'readwrite');
                const store = tx.objectStore(this.storeName);
                const req = store.delete(p);
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            });
        }
    }
}

export const FileSystem = new FileSystemImpl();
