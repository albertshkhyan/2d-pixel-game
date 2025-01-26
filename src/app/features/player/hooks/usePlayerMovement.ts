import { useEffect, useCallback, useState } from 'react'
import { usePlayerState } from './usePlayerState'
import { useControls } from 'leva'
import {
  PlayerDirection,
  PlayerState,
} from '@/app/features/player/types/player.ts'
import {
  FRAME_DELAY,
  PLAYER_DIRECTIONS,
  PLAYER_STATES,
  VALID_KEYS,
} from '../constants'

interface UsePlayerMovementReturn {
  state: string
  direction: string
  handleKeyDown: (event: KeyboardEvent) => void
  handleKeyUp: (event: KeyboardEvent) => void
}

/**
 * Hook to manage player movement with Leva controls, utilizing usePlayerState.
 */
const usePlayerMovement = (): UsePlayerMovementReturn => {
  const { state, direction, changeState, changeDirection } = usePlayerState()
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set()) // Track currently pressed keys

  // Integrate Leva controls
  useControls({
    PlayerState: {
      value: state,
      options: PLAYER_STATES,
      onChange: (newState: PlayerState) => changeState(newState),
    },
    PlayerDirection: {
      value: direction,
      options: PLAYER_DIRECTIONS,
      onChange: (newDirection: PlayerDirection) =>
        changeDirection(newDirection),
    },
  })

  // Handle key press
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key

      setActiveKeys((prevKeys) => {
        const updatedKeys = new Set(prevKeys)
        updatedKeys.add(key)
        return updatedKeys
      })

      if (key === VALID_KEYS.up) {
        changeDirection('back')
        changeState('walking')
      } else if (key === VALID_KEYS.down) {
        changeDirection('front')
        changeState('walking')
      } else if (key === VALID_KEYS.left) {
        changeDirection('left')
        changeState('walking')
      } else if (key === VALID_KEYS.right) {
        changeDirection('right')
        changeState('walking')
      } else if (key === VALID_KEYS.attack) {
        changeState('attacking')
      }
    },
    [changeState, changeDirection]
  )

  // Utility function to check if only one key is active
  const isOnlyKeyActive = (activeKeys: Set<string>, key: string): boolean =>
    activeKeys.size === 1 && activeKeys.has(key)

  // Handle key release
  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key

      setActiveKeys((prevKeys) => {
        const updatedKeys = new Set(prevKeys)
        updatedKeys.delete(key)
        return updatedKeys
      })

      // If no keys are active, transition back to "idle"
      setTimeout(() => {
        if (isOnlyKeyActive(activeKeys, key)) {
          changeState('idle')
        }
      }, FRAME_DELAY)
    },
    [activeKeys, changeState]
  )

  // Bind and unbind key event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return { state, direction, handleKeyDown, handleKeyUp }
}

export default usePlayerMovement
