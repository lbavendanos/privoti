import Container from '@/common/components/Container'
import { config } from 'lib/utils/helpers'
import BaseFooterSocial from './BaseFooterSocial'
import BaseFooterSubscribe from './BaseFooterSubscribe'

export default function BaseFooter() {
  const appName = config<string>('app.name')

  return (
    <footer>
      <Container className="my-10">
        <div className="flex flex-col justify-center items-center space-y-6">
          <BaseFooterSubscribe />
          <BaseFooterSocial />
          <p className="font-light text-xs uppercase text-center">
            <span className="text-base">©</span> 2023 {appName} All Rights
            Reserved
          </p>
        </div>
      </Container>
    </footer>
  )
}
