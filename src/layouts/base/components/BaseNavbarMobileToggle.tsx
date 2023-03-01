'use client'

import dynamic from 'next/dynamic'
import { useBreakpoint } from 'lib/hooks'
import { useEffect, useState } from 'react'
import { MenuIcon } from '@/common/components/Icons'

const BaseNavbarMobile = dynamic(() => import('./BaseNavbarMobile'), {
  ssr: false,
})

interface BaseNavbarMobileToggleProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export default function BaseNavbarMobileToggle(
  props: BaseNavbarMobileToggleProps
) {
  const isMobile = useBreakpoint('sm', 'down')
  const [isMounted, setIsMounted] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <button {...props} type="button" onClick={handleShow}>
        <MenuIcon className="w-6 h-6" />
      </button>
      {isMounted && isMobile && (
        <BaseNavbarMobile show={show} onHide={handleClose} />
      )}
    </>
  )
}
