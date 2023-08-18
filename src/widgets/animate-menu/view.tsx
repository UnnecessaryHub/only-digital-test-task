import { CarouselMenu } from '@/entities/carousel-menu'
import { EventsInfoMobile } from '@/entities/events-info-mobile'
import { TimePeriod } from '@/entities/time-period'

import styles from './styles.module.scss'

export const AnimateMenu = () => {
  return (
    <div className={styles.animateMenu}>
      <CarouselMenu />
      <TimePeriod />
      <EventsInfoMobile />
    </div>
  )
}
