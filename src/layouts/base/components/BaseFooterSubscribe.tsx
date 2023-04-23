import { KeyboardArrowRightIcon } from '@/common/components/Icons'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import FormControl from '@/common/components/FormControl'

export default function BaseFooterSubscribe() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 text-center">
      <Paragraph weight="medium" uppercase>
        Suscribete a nuestro boletín
      </Paragraph>
      <div className="flex justify-center w-full">
        <FormControl
          id="email"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="shrink py-2 max-w-[350px] border-r-0"
        />
        <Button type="button">
          <KeyboardArrowRightIcon />
        </Button>
      </div>
      <Paragraph size="xs" weight="light" uppercase>
        Manténgase informado de todos los lanzamientos de nuestros productos.
      </Paragraph>
    </div>
  )
}
