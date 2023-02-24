import Container from '@/common/components/Container'
import HomeBanner from './components/HomeBanner'

export default function HomeModule() {
  return (
    <div className="flex flex-col">
      <HomeBanner />
      <Container className="my-10"></Container>
    </div>
  )
}
