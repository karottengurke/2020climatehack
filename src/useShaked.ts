import Shake from '@zouloux/shake'
import { useEffect, useState } from 'react'

export default function useShaked(callback?: () => void) {
  const [wasShaked, setWasShaked] = useState(false)
  useEffect(() => {
    debugger
    const shaker = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000, // optional, determines the frequency of event generation
      handler() {
        setWasShaked(true)
        callback?.()
        setTimeout(() => {
          setWasShaked(false)
        }, 2000)
      },
    })
    shaker.start()
    return () => {
      shaker.stop()
    }
  })
  return [wasShaked]
}
