import { useState, useEffect, useCallback } from 'react'
import { Position } from '../types/position'
import { MOVEMENT_DELTA, VALID_KEYS } from '../constants'
import { useControls } from 'leva'
import { clamp } from '@/app/utils/clamp' // Utility function for clamping values
import { GAME_WIDTH, GAME_HEIGHT } from '@/app/features/canvas/constants'

interface UsePositionControlReturn {
  position: Position
  handleKeyDown: (event: KeyboardEvent) => void
}

/**
 * Custom hook to control the position of a player or object with Leva integration.
 * @param initialPosition - The starting position (default: { x: 0, y: 0 }).
 * @returns The position state and a keydown handler.
 */
const usePositionControl = (
  initialPosition: Position = { x: 0, y: 0 }
): UsePositionControlReturn => {
  const [position, setPosition] = useState<Position>(initialPosition)

  // Integrate Leva controls for live tweaking
  const { movementDelta, positionX, positionY } = useControls(
    'Position Control',
    {
      movementDelta: { value: MOVEMENT_DELTA, min: 0.01, max: 1, step: 0.01 },
      positionX: {
        value: initialPosition.x,
        min: -GAME_WIDTH / 2,
        max: GAME_WIDTH / 2,
        step: 0.1,
      },
      positionY: {
        value: initialPosition.y,
        min: -GAME_HEIGHT / 2,
        max: GAME_HEIGHT / 2,
        step: 0.1,
      },
    }
  )

  // Sync Leva position sliders with actual position
  useEffect(() => {
    setPosition({
      x: clamp(positionX, -GAME_WIDTH / 2, GAME_WIDTH / 2),
      y: clamp(positionY, -GAME_HEIGHT / 2, GAME_HEIGHT / 2),
    })
  }, [positionX, positionY])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      setPosition((prev) => {
        const newPosition = { ...prev }
        switch (event.key) {
          case VALID_KEYS.right:
            newPosition.x = clamp(
              prev.x + movementDelta,
              -GAME_WIDTH / 2,
              GAME_WIDTH / 2
            )
            break
          case VALID_KEYS.left:
            newPosition.x = clamp(
              prev.x - movementDelta,
              -GAME_WIDTH / 2,
              GAME_WIDTH / 2
            )
            break
          case VALID_KEYS.up:
            newPosition.y = clamp(
              prev.y + movementDelta,
              -GAME_HEIGHT / 2,
              GAME_HEIGHT / 2
            )
            break
          case VALID_KEYS.down:
            newPosition.y = clamp(
              prev.y - movementDelta,
              -GAME_HEIGHT / 2,
              GAME_HEIGHT / 2
            )
            break
          default:
            break
        }
        return newPosition
      })
    },
    [movementDelta]
  )

  // Attach and detach keydown event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return { position, handleKeyDown }
}

export default usePositionControl
