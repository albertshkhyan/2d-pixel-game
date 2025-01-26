import React from 'react'
import PlayerSprite from './PlayerSprite'
import usePlayerMovement from '../hooks/usePlayerMovement'
import usePositionControl from '../hooks/usePositionControl'

const Player: React.FC = () => {
  const { state, direction } = usePlayerMovement()

  const { position } = usePositionControl({ x: 0, y: 0 })

  return (
    <PlayerSprite state={state} direction={direction} position={position} />
  )
}

export default Player
