export type PlayerState = 'idle' | 'walking' | 'attacking'

export type PlayerDirection = 'front' | 'back' | 'left' | 'right'

export interface PlayerAnimation {
  frames: string[]
  duration: number // milliseconds per frame
}
