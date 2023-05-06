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
        type="button"
        id="btn-cart"
        className="text-zinc-800"
        aria-label="Cart"
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
