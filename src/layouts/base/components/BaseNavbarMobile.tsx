'use client'

import BaseLogo from './BaseLogo'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'
import BaseNavbar from './BaseNavbar'

interface BaseNavbarMobileProps extends OffcanvasProps {}

export default function BaseNavbarMobile(props: BaseNavbarMobileProps) {
  return (
    <Offcanvas {...props}>
      <OffcanvasHeader closeButton>
        <BaseLogo />
      </OffcanvasHeader>
      <OffcanvasBody>
        <BaseNavbar
          menuClassName="flex flex-col space-y-2"
          linkClassName="text-lg font-medium"
        />
      </OffcanvasBody>
    </Offcanvas>
  )
}
