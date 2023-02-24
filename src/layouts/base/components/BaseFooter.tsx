import Container from '@/common/components/Container'
import BaseFooterSubscribe from './BaseFooterSubscribe'

export default function BaseFooter() {
  return (
    <footer className="flex justify-center items-center border-t border-zinc-800">
      <Container className="my-10">
        <BaseFooterSubscribe />
      </Container>
    </footer>
  )
}
