import { useState, useCallback } from 'react'

export function useToggle(initial = true) {
  const [state, setState] = useState(initial)
  const toggle = useCallback(() => {
    setState((last) => !last)
  }, [])
  const setTrue = useCallback(() => setState(true), [])
  const setFalse = useCallback(() => setState(false), [])
  return [state, { toggle, setTrue, setFalse }] as const
}
