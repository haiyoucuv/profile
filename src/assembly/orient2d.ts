import { epsilon, splitter, resulterrbound, estimate, vec, sum } from './util';

const ccwerrboundA: f64 = (3.0 + 16.0 * epsilon) * epsilon;
const ccwerrboundB: f64 = (2.0 + 12.0 * epsilon) * epsilon;
const ccwerrboundC: f64 = (9.0 + 64.0 * epsilon) * epsilon * epsilon;

const B: Array<f64> = vec(4);
const C1: Array<f64> = vec(8);
const C2: Array<f64> = vec(12);
const D: Array<f64> = vec(16);
const u: Array<f64> = vec(4);

function orient2dadapt(
  ax: f64, ay: f64, bx: f64, by: f64, cx: f64, cy: f64, detsum: f64
): f64 {
  let acxtail: f64, acytail: f64, bcxtail: f64, bcytail: f64;
  let bvirt: f64, c: f64, ahi: f64, alo: f64, bhi: f64, blo: f64, _i: f64, _j: f64, _0: f64, s1: f64, s0: f64, t1: f64, t0: f64, u3: f64;

  const acx: f64 = ax - cx;
  const bcx: f64 = bx - cx;
  const acy: f64 = ay - cy;
  const bcy: f64 = by - cy;

  s1 = acx * bcy;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  B[2] = _j - (u3 - bvirt) + (_i - bvirt);
  B[3] = u3;

  let det: f64 = estimate(4, B);
  let errbound: f64 = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }

  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);

  if (acxtail == 0.0 && acytail == 0.0 && bcxtail == 0.0 && bcytail == 0.0) {
    return det;
  }

  errbound = ccwerrboundC * detsum + resulterrbound * abs(det);
  det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound) return det;

  s1 = acxtail * bcy;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u[3] = u3;
  const C1len: i32 = sum(4, B, 4, u, C1);

  s1 = acx * bcytail;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u[3] = u3;
  const C2len: i32 = sum(C1len, C1, 4, u, C2);

  s1 = acxtail * bcytail;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u3 = _j + _i;
  bvirt = u3 - _j;
  u[2] = _j - (u3 - bvirt) + (_i - bvirt);
  u[3] = u3;
  const Dlen: i32 = sum(C2len, C2, 4, u, D);

  return D[Dlen - 1];
}

export function orient2d(ax: f64, ay: f64, bx: f64, by: f64, cx: f64, cy: f64): f64 {
  const detleft: f64 = (ay - cy) * (bx - cx);
  const detright: f64 = (ax - cx) * (by - cy);
  const det: f64 = detleft - detright;

  const detsum: f64 = abs(detleft + detright);
  if (abs(det) >= ccwerrboundA * detsum) return det;

  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

export function orient2dfast(ax: f64, ay: f64, bx: f64, by: f64, cx: f64, cy: f64): f64 {
  return (ay - cy) * (bx - cx) - (ax - cx) * (by - cy);
} 