'use client'

import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasTitle from '@/common/components/OffcanvasTitle'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'

interface BaseNavbarMobileProps extends OffcanvasProps {}

export default function BaseNavbarMobile(props: BaseNavbarMobileProps) {
  return (
    <Offcanvas {...props}>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Offcanvas</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </OffcanvasBody>
    </Offcanvas>
  )
}
