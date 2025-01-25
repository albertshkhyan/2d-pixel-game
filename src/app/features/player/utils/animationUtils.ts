import { PlayerDirection, PlayerState } from '../types/player'

const spriteCache: Record<string, string[]> = {}

// Dynamically import all sprite assets
const allSprites = import.meta.glob<{ default: string }>(
  '/src/assets/sprites/player/**/**/*.png',
  { eager: true }
)

/**
 * Loads player sprites for a given state and direction.
 * @param state - Player state (e.g., 'idle', 'walking', 'attacking').
 * @param direction - Player direction (e.g., 'front', 'back', 'left', 'right').
 * @returns Array of sprite URLs for the specified state and direction.
 */
export const loadPlayerSprites = (
  state: PlayerState,
  direction: PlayerDirection
): string[] => {
  const cacheKey = `${state}-${direction}`

  // Return cached sprites if available
  if (spriteCache[cacheKey]) {
    return spriteCache[cacheKey]
  }

  // Build the path prefix for the state and direction
  const spritePath = `/src/assets/sprites/player/${state}/${direction}`

  // debugger
  // Extract matching sprites from the glob-imported sprites
  const frames = Array.from({ length: 10 }, (_, index) => {
    const framePath = `${spritePath}/sprite_0_${index}_${direction}-${state}-state-${index + 1}.png`
    return allSprites[framePath]?.default || ''
  }).filter(Boolean) // Remove any empty values if a file is missing

  // Cache the result for future use
  spriteCache[cacheKey] = frames

  console.log('Generated Sprite Paths:', frames)

  return frames
}
