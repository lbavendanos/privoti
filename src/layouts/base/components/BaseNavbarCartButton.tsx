'use client'

import { useState } from 'react'
import BaseCart from './BaseCart'
import CartShoppingInfo from '@/common/components/CartShoppingInfo'

export default function BaseNavbarCartButton() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button
        id="btn-cart"
        type="button"
        className="text-zinc-800"
        onClick={handleShow}
      >
        <CartShoppingInfo
          quantityClassName="text-[9px] mt-[3px]"
          iconClassName="w-6 h-6"
        />
      </button>
      <BaseCart show={show} onHide={handleClose} />
    </>
  )
}
