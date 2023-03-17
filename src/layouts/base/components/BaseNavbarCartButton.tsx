'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import CartShoppingInfo from '@/common/components/CartShoppingInfo'

const BaseCart = dynamic(() => import('./BaseCart'), {
  ssr: false,
})

export default function BaseNavbarCartButton() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button type="button" className="text-zinc-800" onClick={handleShow}>
        <CartShoppingInfo
          quantityClassName="text-[9px] mt-[3px]"
          iconClassName="w-6 h-6"
        />
      </button>
      <BaseCart show={show} onHide={handleClose} />
    </>
  )
}
