'use client'

import BaseLogo from './BaseLogo'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'
import BaseNavbar from './BaseNavbar'

interface BaseNavbarMobileProps extends OffcanvasProps {}

export default function BaseNavbarMobile({
  onHide,
  ...props
}: BaseNavbarMobileProps) {
  return (
    <Offcanvas {...props} onHide={onHide}>
      <OffcanvasHeader closeButton>
        <BaseLogo onClick={onHide} />
      </OffcanvasHeader>
      <OffcanvasBody>
        <BaseNavbar
          menuClassName="flex flex-col space-y-2"
          linkClassName="font-normal uppercase tracking-tight text-base"
          onChange={onHide}
        />
      </OffcanvasBody>
    </Offcanvas>
  )
}
