import Paragraph from '@/common/components/Paragraph'
import BaseFooterSubscribeForm from './BaseFooterSubscribeForm'

export default function BaseFooterSubscribe() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 text-center">
      <Paragraph weight="medium" uppercase>
        Suscribete a nuestro boletín
      </Paragraph>
      <BaseFooterSubscribeForm />
      <Paragraph size="xs" weight="light" uppercase>
        Manténgase informado de todos los lanzamientos de nuestros productos.
      </Paragraph>
    </div>
  )
}
