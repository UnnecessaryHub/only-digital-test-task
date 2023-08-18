import { useEffect, useState } from 'react'

import { events } from '@/shared/static'

interface IEventsData {
  year: number
  event: string
}

export const getAllYears = (arr: IEventsData[]): number[] => {
  return [...arr.map((event) => event.year)]
}

export const useEvents = (currentEventsCount: number): number[] => {
  const [minYear, setMinYear] = useState(
    Math.min(...getAllYears(events[0].list))
  )
  const [maxYear, setMaxYear] = useState(
    Math.max(...getAllYears(events[0].list))
  )
  const [prevMin, setPrevMin] = useState(minYear)
  const [prevMax, setPrevMax] = useState(maxYear)

  useEffect(() => {
    if (currentEventsCount !== 0) {
      setPrevMin(minYear)
      setPrevMax(maxYear)
    }
    setMinYear(Math.min(...getAllYears(events[currentEventsCount].list)))
    setMaxYear(Math.max(...getAllYears(events[currentEventsCount].list)))
  }, [currentEventsCount])

  return [minYear, maxYear, prevMax, prevMin]
}
