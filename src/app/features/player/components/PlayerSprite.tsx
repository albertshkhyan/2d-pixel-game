import React, { useEffect, useState } from 'react'
import usePlayerTextures from '../hooks/usePlayerTextures'
import { FRAME_DURATION } from '@/app/features/player/constants'

interface PlayerSpriteProps {
  state: string
  direction: string
  position: { x: number; y: number }
}

const PlayerSprite: React.FC<PlayerSpriteProps> = ({
  state,
  direction,
  position,
}) => {
  const textures = usePlayerTextures() // Preloaded textures
  const [currentFrame, setCurrentFrame] = useState(0)

  const key = `${state}-${direction}`
  const currentTextures = textures[key] || []

  // Frame cycling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % 10) // Example: assuming 10 frames
    }, FRAME_DURATION)

    return () => clearInterval(interval)
  }, [])

  if (currentTextures.length === 0) {
    return null // Prevent rendering if no textures available
  }

  return (
    <sprite position={[position.x, position.y, 0]}>
      <spriteMaterial attach="material" map={currentTextures[currentFrame]} />
    </sprite>
  )
}

export default PlayerSprite
