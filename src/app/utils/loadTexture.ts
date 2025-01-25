import * as THREE from 'three'

const textureCache: Record<string, THREE.Texture> = {}

export const loadTexture = (path: string): THREE.Texture => {
  if (!textureCache[path]) {
    textureCache[path] = new THREE.TextureLoader().load(path)
  }
  return textureCache[path]
}
