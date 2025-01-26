import React from 'react'
import { Canvas } from '@react-three/fiber'
import Player from '../../player/components/Player.tsx'
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  BACKGROUND_COLOR,
  CAMERA_POSITION,
  CAMERA_FOV,
} from '../constants/index'

const CanvasContainer: React.FC = () => {
  const canvasStyle: React.CSSProperties = {
    width: `${GAME_WIDTH}px`,
    height: `${GAME_HEIGHT}px`,
    margin: '0 auto', // Center the canvas horizontally
    border: '2px solid white', // Optional: Add a border to the canvas
    backgroundColor: BACKGROUND_COLOR, // Use background color from constants
    position: 'relative',
  }

  return (
    <div style={canvasStyle}>
      <Canvas
        shadows
        camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}
        style={{ height: '100%', width: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <Player />
      </Canvas>
    </div>
  )
}

export default CanvasContainer
