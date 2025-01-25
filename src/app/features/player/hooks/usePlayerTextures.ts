import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { PlayerDirection, PlayerState } from '../types/player'
import { loadPlayerSprites } from '../utils/animationUtils'

const usePlayerTextures = () => {
  const directions: PlayerDirection[] = ['front', 'back', 'left', 'right']
  const states: PlayerState[] = ['idle', 'walking', 'attacking']

  // Generate all paths for all states and directions
  const spritePaths = states.flatMap((state) =>
    directions.flatMap((direction) => loadPlayerSprites(state, direction))
  )

  // Load all textures at once
  const allTextures = useLoader(THREE.TextureLoader, spritePaths)

  // Map textures back to their respective state and direction
  const textureMap: Record<string, THREE.Texture[]> = {}
  let index = 0

  states.forEach((state) => {
    directions.forEach((direction) => {
      const key = `${state}-${direction}`
      const paths = loadPlayerSprites(state, direction)
      textureMap[key] = allTextures.slice(index, index + paths.length)
      index += paths.length
    })
  })

  return textureMap
}

export default usePlayerTextures
