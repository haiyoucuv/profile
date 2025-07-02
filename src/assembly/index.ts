import { orient2d } from './orient2d';
import { MaxI32 } from "./util";

const EPSILON: f64 = Mathf.pow(2.0, -52.0);
const EDGE_STACK: StaticArray<u32> = new StaticArray<u32>(512);
for (let i = 0; i < 512; i++) EDGE_STACK[i] = 0;

const EMPTY_STATIC_U32 = new StaticArray<u32>(0);
const EMPTY_STATIC_I32 = new StaticArray<i32>(0);
const EMPTY_STATIC_F64 = new StaticArray<f64>(0);

function defaultGetX(p: StaticArray<f64>): f64 { return p[0]; }
function defaultGetY(p: StaticArray<f64>): f64 { return p[1]; }

class Delaunator {
    coords: StaticArray<f64>;
    _triangles: StaticArray<u32>;
    _halfedges: StaticArray<i32>;
    _hashSize: i32;
    _hullPrev: StaticArray<u32>;
    _hullNext: StaticArray<u32>;
    _hullTri: StaticArray<u32>;
    _hullHash: StaticArray<i32> = EMPTY_STATIC_I32;
    _ids: StaticArray<u32> = EMPTY_STATIC_U32;
    _dists: StaticArray<f64> = EMPTY_STATIC_F64;
    hull: StaticArray<u32> = EMPTY_STATIC_U32;
    triangles: StaticArray<u32> = EMPTY_STATIC_U32;
    halfedges: StaticArray<i32> = EMPTY_STATIC_I32;
    trianglesLen: i32 = 0;
    _hullStart: u32 = 0;
    _cx: f64 = 0.0;
    _cy: f64 = 0.0;

    static from(points: StaticArray<StaticArray<f64>>, getX: (p: StaticArray<f64>) => f64, getY: (p: StaticArray<f64>) => f64): Delaunator {
        const n: i32 = points.length;
        const coords: StaticArray<f64> = new StaticArray<f64>(n * 2);
        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }
        return new Delaunator(coords);
    }

    constructor(coords: StaticArray<f64>) {
        const n: i32 = coords.length >> 1;
        this.coords = coords;
        const maxTriangles: i32 = MaxI32(n * 2 - 5, 0);
        this._triangles = new StaticArray<u32>(maxTriangles * 3);
        this._halfedges = new StaticArray<i32>(maxTriangles * 3);
        this._hashSize = <i32>Mathf.ceil(Mathf.sqrt(<f32>n));
        this._hullPrev = new StaticArray<u32>(n);
        this._hullNext = new StaticArray<u32>(n);
        this._hullTri = new StaticArray<u32>(n);
        this._hullHash = new StaticArray<i32>(this._hashSize);
        this._ids = new StaticArray<u32>(n);
        this._dists = new StaticArray<f64>(n);
        for (let i = 0; i < n; i++) {
            this._hullPrev[i] = 0;
            this._hullNext[i] = 0;
            this._hullTri[i] = 0;
            this._ids[i] = i as u32;
            this._dists[i] = 0.0;
        }
        for (let i = 0; i < this._hashSize; i++) this._hullHash[i] = -1;
        for (let i = 0; i < this._triangles.length; i++) this._triangles[i] = 0;
        for (let i = 0; i < this._halfedges.length; i++) this._halfedges[i] = -1;
        this.update();
    }

    update(): void {
        const coords = this.coords;
        const hullPrev = this._hullPrev;
        const hullNext = this._hullNext;
        const hullTri = this._hullTri;
        const hullHash = this._hullHash;
        const n: i32 = coords.length >> 1;
        let minX: f64 = coords[0];
        let minY: f64 = coords[1];
        let maxX: f64 = coords[0];
        let maxY: f64 = coords[1];
        for (let i = 0; i < n; ++i) {
            let x = coords[2 * i];
            let y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i as u32;
        }
        const cx: f64 = (minX + maxX) * 0.5;
        const cy: f64 = (minY + maxY) * 0.5;
        let i0: i32 = 0, i1: i32 = 0, i2: i32 = 0;
        let minDist: f64 = 1e100;
        for (let i = 0; i < n; ++i) {
            let x = coords[2 * i];
            let y = coords[2 * i + 1];
            let dx = x - cx;
            let dy = y - cy;
            let d = dx * dx + dy * dy;
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x: f64 = coords[2 * i0];
        const i0y: f64 = coords[2 * i0 + 1];
        minDist = 1e100;
        for (let i = 0; i < n; ++i) {
            if (i == i0) continue;
            let x = coords[2 * i];
            let y = coords[2 * i + 1];
            let dx = x - i0x;
            let dy = y - i0y;
            let d = dx * dx + dy * dy;
            if (d < minDist && d > 0.0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x: f64 = coords[2 * i1];
        let i1y: f64 = coords[2 * i1 + 1];
        let minRadius: f64 = 1e100;
        for (let i = 0; i < n; ++i) {
            if (i == i0 || i == i1) continue;
            let x = coords[2 * i];
            let y = coords[2 * i + 1];
            let r = circumradius(i0x, i0y, i1x, i1y, x, y);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x: f64 = coords[2 * i2];
        let i2y: f64 = coords[2 * i2 + 1];
        if (minRadius > 1e99) {
            for (let i = 0; i < n; ++i) {
                let x = coords[2 * i];
                let y = coords[2 * i + 1];
                this._dists[i] = (x - coords[0]) || (y - coords[1]);
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            let newHull = new StaticArray<u32>(n);
            let j = 0;
            let d0 = -1e100;
            for (let i = 0; i < n; ++i) {
                const id = this._ids[i];
                const d = this._dists[id];
                if (d > d0) {
                    newHull[j++] = id;
                    d0 = d;
                }
            }
            let hullRes = new StaticArray<u32>(j);
            for (let k = 0; k < j; ++k) hullRes[k] = newHull[k];
            this.hull = hullRes;
            this.triangles = EMPTY_STATIC_U32;
            this.halfedges = EMPTY_STATIC_I32;
            return;
        }
        if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0.0) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }
        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center[0];
        this._cy = center[1];
        for (let i = 0; i < n; ++i) {
            let x = coords[2 * i];
            let y = coords[2 * i + 1];
            let dx = x - center[0];
            let dy = y - center[1];
            this._dists[i] = dx * dx + dy * dy;
        }
        quicksort(this._ids, this._dists, 0, n - 1);
        this._hullStart = i0 as u32;
        let hullSize: i32 = 3;
        hullNext[i0] = hullPrev[i2] = i1 as u32;
        hullNext[i1] = hullPrev[i0] = i2 as u32;
        hullNext[i2] = hullPrev[i1] = i0 as u32;
        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;
        for (let i = 0; i < this._hashSize; ++i) hullHash[i] = -1;
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;
        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);
        let xp: f64 = 0.0, yp: f64 = 0.0;
        for (let k = 0; k < this._ids.length; ++k) {
            const i = this._ids[k];
            let x = coords[2 * i];
            let y = coords[2 * i + 1];
            if (k > 0) {
                let dx = x - xp;
                let dy = y - yp;
                if ((dx < 0.0 ? -dx : dx) <= EPSILON && (dy < 0.0 ? -dy : dy) <= EPSILON) continue;
            }
            xp = x;
            yp = y;
            if (i == i0 || i == i1 || i == i2) continue;
            let start = 0;
            for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; ++j) {
                start = hullHash[(key + j) % this._hashSize];
                if (start != -1 && start != hullNext[start]) break;
            }
            start = hullPrev[start];
            let e = start, q = 0;
            while (true) {
                q = hullNext[e];
                let ex = coords[2 * e];
                let ey = coords[2 * e + 1];
                let qx = coords[2 * q];
                let qy = coords[2 * q + 1];
                let det = (y - qy) * (ex - qx) - (x - qx) * (ey - qy);
                if (det < 0.0) break;
                e = q;
                if (e == start) {
                    e = -1;
                    break;
                }
            }
            if (e == -1) continue;
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t;
            hullSize++;
            let n = hullNext[e];
            while (true) {
                q = hullNext[n];
                let nx = coords[2 * n];
                let ny = coords[2 * n + 1];
                let qx = coords[2 * q];
                let qy = coords[2 * q + 1];
                let det = (y - qy) * (nx - qx) - (x - qx) * (ny - qy);
                if (det >= 0.0) break;
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n;
                hullSize--;
                n = q;
            }
            if (e == start) {
                while (true) {
                    q = hullPrev[e];
                    let qx = coords[2 * q];
                    let qy = coords[2 * q + 1];
                    let ex = coords[2 * e];
                    let ey = coords[2 * e + 1];
                    let det = (y - ey) * (qx - ex) - (x - ex) * (qy - ey);
                    if (det >= 0.0) break;
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e;
                    hullSize--;
                    e = q;
                }
            }
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }
        this.hull = new StaticArray<u32>(hullSize);
        let e = this._hullStart;
        for (let i = 0; i < hullSize; ++i) {
            this.hull[i] = e;
            e = hullNext[e];
        }
        let newTriangles = new StaticArray<u32>(this.trianglesLen);
        let newHalfedges = new StaticArray<i32>(this.trianglesLen);
        for (let i = 0; i < this.trianglesLen; ++i) {
            newTriangles[i] = this._triangles[i];
            newHalfedges[i] = this._halfedges[i];
        }
        this.triangles = newTriangles;
        this.halfedges = newHalfedges;
    }

    _hashKey(x: f64, y: f64): i32 {
        return <i32>Mathf.floor(<f32>(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize)) % this._hashSize;
    }

    _legalize(a: i32): i32 {
        const triangles = this._triangles;
        const halfedges = this._halfedges;
        const coords = this.coords;
        let i = 0;
        let ar = 0;
        while (true) {
            const b = halfedges[a];
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;
            if (b == -1) {
                if (i == 0) break;
                a = EDGE_STACK[--i];
                continue;
            }
            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;
            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];
            const illegal = inCircle(
                coords[2 * p0], coords[2 * p0 + 1],
                coords[2 * pr], coords[2 * pr + 1],
                coords[2 * pl], coords[2 * pl + 1],
                coords[2 * p1], coords[2 * p1 + 1]
            );
            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;
                const hbl = halfedges[bl];
                if (hbl == -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] == bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    } while (e != this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);
                const br = b0 + (b + 1) % 3;
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i == 0) break;
                a = EDGE_STACK[--i];
            }
        }
        return ar;
    }

    _link(a: i32, b: i32): void {
        this._halfedges[a] = b;
        if (b != -1) this._halfedges[b] = a;
    }

    _addTriangle(i0: i32, i1: i32, i2: i32, a: i32, b: i32, c: i32): i32 {
        const t = this.trianglesLen;
        this._triangles[t] = i0 as u32;
        this._triangles[t + 1] = i1 as u32;
        this._triangles[t + 2] = i2 as u32;
        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);
        this.trianglesLen += 3;
        return t;
    }
}

function absf(x: f64): f64 { return x < 0.0 ? -x : x; }

function pseudoAngle(dx: f64, dy: f64): f64 {
    const p = dx / (absf(dx) + absf(dy));
    return (dy > 0.0 ? 3.0 - p : 1.0 + p) / 4.0;
}

function dist(ax: f64, ay: f64, bx: f64, by: f64): f64 {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

function inCircle(ax: f64, ay: f64, bx: f64, by: f64, cx: f64, cy: f64, px: f64, py: f64): bool {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;
    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;
    return dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) < 0.0;
}

function circumradius(ax: f64, ay: f64, bx: f64, by: f64, cx: f64, cy: f64): f64 {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;
    return x * x + y * y;
}

function circumcenter(ax: f64, ay: f64, bx: f64, by: f64, cx: f64, cy: f64): StaticArray<f64> {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;
    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);
    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;
    return [x, y];
}

function quicksort(ids: StaticArray<u32>, dists: StaticArray<f64>, left: i32, right: i32): void {
    if (right - left <= 20) {
        for (let i = left + 1; i <= right; i++) {
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = (left + right) >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);
        const temp = ids[i];
        const tempDist = dists[temp];
        while (true) {
            do i++; while (dists[ids[i]] < tempDist);
            do j--; while (dists[ids[j]] > tempDist);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;
        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}

function swap(arr: StaticArray<u32>, i: i32, j: i32): void {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let delaunatorInstance: Delaunator | null = null;

export function createDelaunator(coords: StaticArray<f64>): void {
  delaunatorInstance = new Delaunator(coords);
}

export function getTriangles(): StaticArray<u32> {
  if (delaunatorInstance) return delaunatorInstance!.triangles;
  return new StaticArray<u32>(0);
}
