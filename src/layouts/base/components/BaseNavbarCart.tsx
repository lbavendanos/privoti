'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ShoppingIcon } from '@/common/components/Icons'

const BaseNavbarCartDrawer = dynamic(() => import('./BaseNavbarCartDrawer'), {
  ssr: false,
})

export default function BaseNavbarCart() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button type="button" className="text-zinc-800" onClick={handleShow}>
        <ShoppingIcon className="w-6 h-6" />
      </button>
      <BaseNavbarCartDrawer show={show} onHide={handleClose} />
    </>
  )
}
