import { createContext, ReactNode, useEffect, useState } from 'react'

import { useDeg, useEvents } from '@/shared/hooks'
import { events } from '@/shared/static'

interface EventProviderProps {
  children: ReactNode
}

interface EventProviderPayload {
  type: string
  isActive: boolean
  list: {
    year: number
    event: string
  }[]
}

interface EventContextPayload {
  deg: number
  minYear: number
  maxYear: number
  pastMin: number
  pastMax: number
  currentEventsCount: number
  onSelectEvents: (t: number) => void
  data: EventProviderPayload[]
  setData: React.Dispatch<React.SetStateAction<EventProviderPayload[]>>
}

export const EventsContext = createContext<EventContextPayload>({
  deg: 0,
  minYear: 0,
  maxYear: 0,
  pastMin: 0,
  pastMax: 0,
  currentEventsCount: 0,
  data: events,
  onSelectEvents: () => {},
  setData: () => {}
})

export const EventsContextProvider = ({ children }: EventProviderProps) => {
  const [currentEventsCount, setCurrentEventsCount] = useState(0)
  const [minYear, maxYear, pastMin, pastMax] = useEvents(currentEventsCount)
  const [data, setData] = useState(events)
  const [deg] = useDeg(currentEventsCount)

  const onSelectEvents = (index: number) => {
    setCurrentEventsCount(index)

    setData(
      data.map((event, i) => {
        if (event.isActive) {
          event.isActive = false
        }
        if (i === index) {
          event.isActive = true
        }
        return event
      })
    )
  }

  useEffect(() => {
    setData(
      events.map((item, i) => {
        if (i === 0) {
          item.isActive = true
        }
        return item
      })
    )
  }, [])

  const contextData = {
    deg,
    minYear,
    maxYear,
    pastMax,
    pastMin,
    currentEventsCount,
    data,
    setData,
    onSelectEvents
  }

  return (
    <EventsContext.Provider value={contextData}>
      {children}
    </EventsContext.Provider>
  )
}
