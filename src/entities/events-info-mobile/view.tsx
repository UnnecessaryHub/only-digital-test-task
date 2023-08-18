import React from 'react'
import { nanoid } from 'nanoid'

import { EventsContext } from '@/app/providers/event-provider'

import styles from './styles.module.scss'

export const EventsInfoMobile = () => {
  const { data, currentEventsCount } = React.useContext(EventsContext)

  return (
    <div key={nanoid()} className={styles.eventsInfo}>
      {data[currentEventsCount].type}
    </div>
  )
}
