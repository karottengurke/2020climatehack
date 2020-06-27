import Shake from '@zouloux/shake'
import React, { useEffect, useCallback } from 'react'
import { useToggle } from './useToggle'
import { Button } from 'baseui/button'

export default function useShaked(callback?: () => void) {
  const [wasShaked, modifyWasShaked] = useToggle(false)

  const handler = useCallback(() => {
    modifyWasShaked.setTrue()
    callback?.()
    setTimeout(() => {
      modifyWasShaked.setFalse()
    }, 2000)
  }, [callback, modifyWasShaked])

  useEffect(() => {
    const shaker = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000, // optional, determines the frequency of event generation
      handler,
    })
    shaker.start()
    return () => {
      shaker.stop()
    }
  })

  return [
    wasShaked,
    <Button onClick={handler}>Shange the World!</Button>,
  ] as const
}
