import React, { useContext } from 'react'

import { EventsContext } from '@/app/providers/event-provider'
import { CarouselItem } from '@/entities/carousel-item/view'

import styles from './menu.module.scss'

export const CarouselMenu = () => {
  const { deg, data } = useContext(EventsContext)

  return (
    <div className={styles.carouselMenuWrapper}>
      <div
        className={styles.carouselMenu}
        style={{ transform: `rotate(${deg}deg)` }}>
        {data.map((_, index) => (
          <CarouselItem key={index} index={index} />
        ))}
      </div>
    </div>
  )
}
