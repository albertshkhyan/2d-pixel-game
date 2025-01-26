/**
 * Clamps a value between a minimum and maximum range.
 * @param value - The number to clamp.
 * @param min - The minimum allowable value.
 * @param max - The maximum allowable value.
 * @returns The clamped value.
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value))
