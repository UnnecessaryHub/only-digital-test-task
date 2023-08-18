import React, { useContext } from 'react'
import classNames from 'classnames'

import { EventsContext } from '@/app/providers/event-provider'
import { calculateCoordinates } from '@/shared/lib'

import styles from './item.module.scss'

interface ICarouselItemProps {
  index: number
}

export const CarouselItem = ({ index }: ICarouselItemProps) => {
  const { onSelectEvents, deg, data, currentEventsCount } =
    useContext(EventsContext)
  const invertDeg = deg < 0 ? Math.abs(deg) : `-${deg}`
  const position = { ...calculateCoordinates(index, data.length) }

  return (
    <div
      className={classNames(styles.item, {
        [styles.isActive]: data[index].isActive
      })}
      style={position}>
      <button
        className={styles.carouselBtn}
        style={{ transform: `rotate(${invertDeg}deg)` }}
        onClick={() => {
          onSelectEvents(index)
        }}>
        {currentEventsCount === index ? (
          <div className={styles.selected}>{data[currentEventsCount].type}</div>
        ) : (
          ''
        )}
        {index + 1}
      </button>
    </div>
  )
}
