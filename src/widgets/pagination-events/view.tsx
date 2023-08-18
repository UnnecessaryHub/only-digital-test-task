import React, { useContext } from 'react'
import classNames from 'classnames'

import { EventsContext } from '@/app/providers/event-provider'
import { PaginationIcon } from '@/shared/ui/icons'

import styles from './styles.module.scss'

export const PaginationEvents = () => {
  const {
    onSelectEvents,
    currentEventsCount: activeEvents,
    data
  } = useContext(EventsContext)
  const length = data.length

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.counter}>
        0{activeEvents + 1}/0{length}
      </div>
      <div className={styles.buttonsControl}>
        <button
          onClick={() => onSelectEvents(activeEvents - 1)}
          className={classNames(styles.control, styles.btnPrew)}
          disabled={activeEvents === 0}>
          <PaginationIcon />
        </button>
        <button
          onClick={() => onSelectEvents(activeEvents + 1)}
          className={classNames(styles.control, styles.btnNext)}
          disabled={activeEvents === 5}>
          <PaginationIcon />
        </button>
      </div>
    </div>
  )
}
