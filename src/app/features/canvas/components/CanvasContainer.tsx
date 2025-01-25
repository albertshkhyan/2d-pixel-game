import React from 'react'
import { Canvas } from '@react-three/fiber'
import Player from '../../player/components/Player.tsx'

const CanvasContainer: React.FC = () => (
  <Canvas
    shadows
    camera={{ position: [0, 5, 10], fov: 50 }}
    style={{ height: '100vh', width: '100vw', backgroundColor: '#222' }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
    <Player />
  </Canvas>
)

export default CanvasContainer
