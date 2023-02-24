import { config } from 'lib/utils/helpers'
import Container from '@/common/components/Container'

export default function BaseFooter() {
  const appName = config<string>('app.name')

  return (
    <footer className="flex justify-center items-center h-10 border-t">
      <Container>
        <div className="flex text-sm">
          <div className="flex-1 text-left">{appName.toUpperCase()}</div>
          <div className="flex-1 text-right">2023</div>
        </div>
      </Container>
    </footer>
  )
}
