import React, { useEffect, useState } from 'react'
import usePlayerTextures from '../hooks/usePlayerTextures'

interface PlayerSpriteProps {
  state: string
  direction: string
}

const PlayerSprite: React.FC<PlayerSpriteProps> = ({ state, direction }) => {
  const textures = usePlayerTextures() // Preloaded textures
  const [currentFrame, setCurrentFrame] = useState(0)

  const key = `${state}-${direction}`
  const currentTextures = textures[key] || []

  // Frame cycling logic
  useEffect(() => {
    const frameDuration = 100 // milliseconds
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % 10) // Example: assuming 10 frames
    }, frameDuration)

    return () => clearInterval(interval)
  }, [])

  if (currentTextures.length === 0) {
    return null // Prevent rendering if no textures available
  }

  return (
    <sprite>
      <spriteMaterial attach="material" map={currentTextures[currentFrame]} />
    </sprite>
  )
}

export default PlayerSprite
