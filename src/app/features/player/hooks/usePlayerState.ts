import { useState } from 'react'
import { PlayerState, PlayerDirection } from '../types/player'

export const usePlayerState = () => {
  const [state, setState] = useState<PlayerState>('idle') //idle, walk, attacking
  const [direction, setDirection] = useState<PlayerDirection>('front') //back, front, left, right

  console.log('sdafsd3 usePlayerState', { direction, state })
  const changeState = (newState: PlayerState) => setState(newState)
  const changeDirection = (newDirection: PlayerDirection) =>
    setDirection(newDirection)

  return { state, direction, changeState, changeDirection }
}
