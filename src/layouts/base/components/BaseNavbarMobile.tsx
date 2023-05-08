'use client'

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
      <OffcanvasHeader
        className="bg-primary-100 border-b border-zinc-800"
        closeButton
      >
        <h2 className="text-base uppercase font-semibold">Menú</h2>
      </OffcanvasHeader>
      <OffcanvasBody>
        <BaseNavbar
          menuClassName="flex flex-col space-y-2"
          linkClassName="font-medium uppercase text-sm"
          onChange={onHide}
        />
      </OffcanvasBody>
    </Offcanvas>
  )
}
