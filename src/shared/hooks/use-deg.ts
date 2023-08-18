import { useEffect, useState } from 'react'

import { events } from '@/shared/static'

export const useDeg = (eventCount: number) => {
  const [deg, setDeg] = useState(-60)

  useEffect(() => {
    const gap = 360 / events.length
    const targetAngle = -1 * gap * eventCount - 60
    setDeg(targetAngle)
  }, [eventCount])

  return [deg]
}
