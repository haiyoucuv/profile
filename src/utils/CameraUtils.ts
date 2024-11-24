import { MathUtils } from "three";

/**
 * Converts horizontal FoV to vertical FoV.
 *
 * @param horizontalFoV - The horizontal field of view.
 * @param aspect - The aspect ration.
 * @return The vertical field of view.
 */

export function calculateVerticalFoV(horizontalFoV: number, aspect = 16 / 9) {

	return Math.atan(Math.tan(horizontalFoV * MathUtils.DEG2RAD * 0.5) / aspect) * MathUtils.RAD2DEG * 2.0;

}

/**
 * Converts vertical FoV to horizontal FoV.
 *
 * @param verticalFoV - The vertical field of view.
 * @param aspect - The aspect ration.
 * @return The horizontal field of view.
 */

export function calculateHorizontalFoV(verticalFoV: number, aspect = 16 / 9) {

	return Math.atan(Math.tan(verticalFoV * MathUtils.DEG2RAD * 0.5) * aspect) * MathUtils.RAD2DEG * 2.0;

}