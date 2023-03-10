'use client'

import BaseLogo from './BaseLogo'
import Separator from '@/common/components/Separator'
import BaseNavbar from './BaseNavbar'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'

interface BaseNavbarMobileProps extends OffcanvasProps {}

export default function BaseNavbarMobile({
  onHide,
  ...props
}: BaseNavbarMobileProps) {
  return (
    <Offcanvas {...props} onHide={onHide} className="w-[85%] max-w-[480px]">
      <OffcanvasHeader closeButton>
        <BaseLogo onClick={onHide} />
      </OffcanvasHeader>
      <Separator />
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
