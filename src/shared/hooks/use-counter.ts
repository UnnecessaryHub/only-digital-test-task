import { useEffect, useState } from 'react'

export const useCounter = (value: number, prewValue: number): number => {
  const [counter, setCounter] = useState(prewValue)
  const duration = 15

  useEffect(() => {
    if (value === counter) {
      return
    }

    if (value > counter) {
      setTimeout(() => {
        setCounter((prev) => prev + 1)
      }, duration)
    }

    if (value < counter) {
      setTimeout(() => {
        setCounter((prev) => prev - 1)
      }, duration)
    }
  }, [counter, value])

  return counter
}
