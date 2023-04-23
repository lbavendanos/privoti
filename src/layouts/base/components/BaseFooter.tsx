import { config } from 'lib/utils/helpers'
import Container from '@/common/components/Container'
import Paragraph from '@/common/components/Paragraph'
import BaseFooterSocial from './BaseFooterSocial'
import BaseFooterSubscribe from './BaseFooterSubscribe'

export default function BaseFooter() {
  const appName = config<string>('app.name')
  const year = new Date().getFullYear()

  return (
    <footer>
      <Container className="my-10">
        <div className="flex flex-col justify-center items-center space-y-6">
          <BaseFooterSubscribe />
          <BaseFooterSocial />
          <Paragraph size="xs" weight="light" className="text-center" uppercase>
            <span className="text-base">©</span> {year} {appName} Todos los
            derechos reservados
          </Paragraph>
        </div>
      </Container>
    </footer>
  )
}
