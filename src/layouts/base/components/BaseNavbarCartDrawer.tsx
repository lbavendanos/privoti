import CloseButton from '@/common/components/CloseButton'
import { ShoppingIcon } from '@/common/components/Icons'
import Link from 'next/link'
import Separator from '@/common/components/Separator'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'

interface BaseNavbarCartDrawerProps extends OffcanvasProps {}

export default function BaseNavbarCartDrawer({
  onHide,
  ...props
}: BaseNavbarCartDrawerProps) {
  return (
    <Offcanvas
      {...props}
      onHide={onHide}
      placement="end"
      className="w-[85%] md:w-[480px]"
    >
      <OffcanvasHeader>
        <ShoppingIcon className="w-6 h-6 md:w-8 md:h-8" />
        <Link
          href="/cart"
          className="text-xl md:text-2xl uppercase font-semibold tracking-tight hover:underline"
          onClick={onHide}
        >
          Cart
        </Link>
        <CloseButton onClick={onHide} />
      </OffcanvasHeader>
      <Separator />
      <OffcanvasBody>
        <p className="uppercase font-normal tracking-tight text-center">
          your cart is currently empty! <br /> let&apos;s fix that
        </p>
      </OffcanvasBody>
    </Offcanvas>
  )
}
