import { Layout } from '@/app/layout'
import { EventsContextProvider } from '@/app/providers'
import { Substrate } from '@/shared/ui/substrate'
import { Title } from '@/shared/ui/title'
import { AnimateMenu } from '@/widgets/animate-menu'
import { PaginationEvents } from '@/widgets/pagination-events'
import { Slider } from '@/widgets/slider'

export const App = () => {
  return (
    <EventsContextProvider>
      <Layout>
        <Substrate />
        <Title />
        <AnimateMenu />
        <PaginationEvents />
        <Slider />
      </Layout>
    </EventsContextProvider>
  )
}
