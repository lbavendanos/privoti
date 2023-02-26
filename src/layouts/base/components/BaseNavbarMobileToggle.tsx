'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { MenuIcon } from '@/common/components/Icons'

const BaseNavbarMobile = dynamic(() => import('./BaseNavbarMobile'), {
  ssr: false,
})

interface BaseNavbarMobileToggleProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export default function BaseNavbarMobileToggle(
  props: BaseNavbarMobileToggleProps
) {
  const [isFirstAttempt, setIsFirstAttempt] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setIsFirstAttempt(true)
    setShow(true)
  }

  return (
    <>
      <button {...props} type="button" onClick={handleShow}>
        <MenuIcon className="w-6 h-6" />
      </button>
      {(show || isFirstAttempt) && (
        <BaseNavbarMobile show={show} onHide={handleClose} />
      )}
    </>
  )
}
