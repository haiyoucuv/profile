export class SafeArray<T> implements Iterable<T> {

    private array: T[];
    private addQueue: T[];
    private removeQueue: Set<T>;

    constructor() {
        this.array = [];
        this.addQueue = [];
        this.removeQueue = new Set();
    }

    get isEmpty() {
        return this.length === 0;
        // return this.addQueue.length + this.array.length > 0;
    }

    get length(): number {
        return this.array.length + this.addQueue.length - this.removeQueue.size;
    }

    // set length(){

    // }

    private iterating: boolean = false;
    // 实现迭代器接口
    *[Symbol.iterator](): Iterator<T> {
        this._addQueued();
        this._removeQueued();
        this.iterating = true;

        for (const element of this.array) {
            if (!this.removeQueue.has(element)) {
                yield element;
            }
        }

        this.iterating = false;
        this._removeQueued();
    }

    add(element: T) {
        this.addQueue.push(element);
    }

    remove(element: T) {
        if (this.addQueue.includes(element)) {
            const index = this.addQueue.indexOf(element);
            this.addQueue.splice(index, 1);
        } else {
            this.removeQueue.add(element);
        }
    }

    clear() {
        this.array = [];
        this.addQueue = [];
        this.removeQueue.clear();
    }

    find(predicate: (element: T) => boolean): T | undefined {
        // 先检查主数组
        this._addQueued();
        this._removeQueued();
        for (const element of this.array) {
            if (!this.removeQueue.has(element) && predicate(element)) {
                return element;
            }
        }
        return undefined;
    }

    filter(predicate: (element: T) => boolean): T[] {
        this._addQueued();
        this._removeQueued();
        return this.array.filter(element => 
            !this.removeQueue.has(element) && predicate(element)
        );
    }

    map<U>(callback: (element: T) => U): U[] {
        this._addQueued();
        this._removeQueued();
        return this.array
            .filter(element => !this.removeQueue.has(element))
            .map(callback);
    }

    forEach(fn: (element: T) => void) {
        this._addQueued();
        this._removeQueued();
        this.iterating = true;
        
        for (const element of this.array) {
            if (!this.removeQueue.has(element)) {
                fn(element);
            }
        }
        
        this.iterating = false;
        this._removeQueued();
    }

    toArray(): T[] {
        this._addQueued();
        this._removeQueued();
        return [...this.array].filter(element => !this.removeQueue.has(element));
    }


    private _addQueued() {
        if (this.addQueue.length) {
            this.array.push(...this.addQueue);
            this.addQueue = [];
        }
    }

     private _removeQueued() {
        if (!this.iterating && this.removeQueue.size) {
            this.array = this.array.filter(element => !this.removeQueue.has(element));
            this.removeQueue.clear();
        }
    }
}