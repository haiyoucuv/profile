export const epsilon: f64 = 1.1102230246251565e-16;
export const splitter: f64 = 134217729.0;
export const resulterrbound: f64 = (3.0 + 8.0 * epsilon) * epsilon;

// fast_expansion_sum_zeroelim routine from original code
export function sum(elen: i32, e: Array<f64>, flen: i32, f: Array<f64>, h: Array<f64>): i32 {
    let Q: f64, Qnew: f64, hh: f64, bvirt: f64;
    let enow: f64 = e[0];
    let fnow: f64 = f[0];
    let eindex: i32 = 0;
    let findex: i32 = 0;
    if ((fnow > enow) == (fnow > -enow)) {
        Q = enow;
        eindex++;
        enow = e[eindex];
    } else {
        Q = fnow;
        findex++;
        fnow = f[findex];
    }
    let hindex: i32 = 0;
    if (eindex < elen && findex < flen) {
        if ((fnow > enow) == (fnow > -enow)) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            eindex++;
            enow = e[eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            findex++;
            fnow = f[findex];
        }
        Q = Qnew;
        if (hh != 0.0) {
            h[hindex++] = hh;
        }
        while (eindex < elen && findex < flen) {
            if ((fnow > enow) == (fnow > -enow)) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                eindex++;
                enow = e[eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                findex++;
                fnow = f[findex];
            }
            Q = Qnew;
            if (hh != 0.0) {
                h[hindex++] = hh;
            }
        }
    }
    while (eindex < elen) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        eindex++;
        enow = e[eindex];
        Q = Qnew;
        if (hh != 0.0) {
            h[hindex++] = hh;
        }
    }
    while (findex < flen) {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        findex++;
        fnow = f[findex];
        Q = Qnew;
        if (hh != 0.0) {
            h[hindex++] = hh;
        }
    }
    if (Q != 0.0 || hindex == 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

export function sum_three(alen: i32, a: Array<f64>, blen: i32, b: Array<f64>, clen: i32, c: Array<f64>, tmp: Array<f64>, out: Array<f64>): i32 {
    return sum(sum(alen, a, blen, b, tmp), tmp, clen, c, out);
}

// scale_expansion_zeroelim routine from original code
export function scale(elen: i32, e: Array<f64>, b: f64, h: Array<f64>): i32 {
    let Q: f64, sum_: f64, hh: f64, product1: f64, product0: f64;
    let bvirt: f64, c: f64, ahi: f64, alo: f64;

    c = splitter * b;
    const bhi: f64 = c - (c - b);
    const blo: f64 = b - bhi;
    let enow: f64 = e[0];
    Q = enow * b;
    c = splitter * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
    let hindex: i32 = 0;
    if (hh != 0.0) {
        h[hindex++] = hh;
    }
    for (let i: i32 = 1; i < elen; i++) {
        enow = e[i];
        product1 = enow * b;
        c = splitter * enow;
        ahi = c - (c - enow);
        alo = enow - ahi;
        product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
        sum_ = Q + product0;
        bvirt = sum_ - Q;
        hh = Q - (sum_ - bvirt) + (product0 - bvirt);
        if (hh != 0.0) {
            h[hindex++] = hh;
        }
        Q = product1 + sum_;
        hh = sum_ - (Q - product1);
        if (hh != 0.0) {
            h[hindex++] = hh;
        }
    }
    if (Q != 0.0 || hindex == 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

export function negate(elen: i32, e: Array<f64>): i32 {
    for (let i: i32 = 0; i < elen; i++) e[i] = -e[i];
    return elen;
}

export function estimate(elen: i32, e: Array<f64>): f64 {
    let Q: f64 = e[0];
    for (let i: i32 = 1; i < elen; i++) Q += e[i];
    return Q;
}

export function vec(n: i32): Array<f64> {
    const arr = new Array<f64>(n);
    for (let i = 0; i < n; i++) arr[i] = 0.0;
    return arr;
}

export function MaxI32(a: i32, b: i32): i32 {
    return a > b ? a : b;
}
