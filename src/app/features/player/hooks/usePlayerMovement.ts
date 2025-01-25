import { useState, useEffect, useCallback } from 'react'
import { PlayerState, PlayerDirection } from '../types/player'

interface UsePlayerMovementReturn {
  state: PlayerState
  direction: PlayerDirection
  handleKeyDown: (event: KeyboardEvent) => void
  handleKeyUp: (event: KeyboardEvent) => void
}

/**
 * Hook to manage player movement.
 */
const usePlayerMovement = (): UsePlayerMovementReturn => {
  const [state, setState] = useState<PlayerState>('idle') // 'idle', 'walking', 'attacking'
  const [direction, setDirection] = useState<PlayerDirection>('front') // 'front', 'back', 'left', 'right'
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set()) // Track currently pressed keys

  // Handle key press
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key

    setActiveKeys((prevKeys) => {
      const updatedKeys = new Set(prevKeys)
      updatedKeys.add(key)
      return updatedKeys
    })

    if (key === 'ArrowUp') {
      setDirection('back')
      setState('walking')
    }
    if (key === 'ArrowDown') {
      setDirection('front')
      setState('walking')
    }
    if (key === 'ArrowLeft') {
      setDirection('left')
      setState('walking')
    }
    if (key === 'ArrowRight') {
      setDirection('right')
      setState('walking')
    }
    if (key === ' ') {
      setState('attacking') // Space triggers attacking
    }
  }, [])

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
        if (activeKeys.size === 1 && activeKeys.has(key)) {
          setState('idle')
        }
      }, 50)
    },
    [activeKeys]
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
