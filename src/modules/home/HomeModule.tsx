import { cn } from 'lib/utils/helpers'
import Container from '@/common/components/Container'
import HomeBanner from './components/HomeBanner'
import HomeProduct from './components/HomeProduct'

export default function HomeModule() {
  return (
    <div className="flex flex-col">
      <HomeBanner />
      <Container className="my-10">
        <div
          className={cn(
            'grid grid-cols-2 gap-4',
            'md:grid-cols-3',
            'lg:grid-cols-4',
            'xl:grid-cols-5',
            '2xl:grid-cols-6'
          )}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <HomeProduct key={i} />
          ))}
        </div>
      </Container>
    </div>
  )
}