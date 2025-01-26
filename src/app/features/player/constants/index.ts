export const FRAME_DELAY = 50

// This is the speed at which the player or object moves across the screen.
export const MOVEMENT_DELTA = 0.1 // Adjusts the movement speed

export const ATTACK_KEY = ' ' // Optional for clarity

export const VALID_KEYS = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
  attack: ATTACK_KEY,
}

export const PLAYER_STATES = ['idle', 'walking', 'attacking'] as const

export const PLAYER_DIRECTIONS = ['front', 'back', 'left', 'right'] as const

export const FRAME_DURATION = 100 // Milliseconds per frame
export const MAX_FRAMES = 10 // Max number of frames per animation
