import React from 'react'
import PlayerSprite from './PlayerSprite'
import usePlayerMovement from '../hooks/usePlayerMovement'

const Player: React.FC = () => {
  const { state, direction } = usePlayerMovement()

  return <PlayerSprite state={state} direction={direction} />
}

export default Player
