import { ShoppingIcon } from '@/common/components/Icons'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import CartItemList, { Items } from '@/common/components/CartItemList'
import React from 'react'
import Link from 'next/link'
import Separator from '@/common/components/Separator'
import CloseButton from '@/common/components/CloseButton'
import CartSummary from '@/common/components/CartSummary'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'

const items: Items = [
  {
    name: 'Marida top pink',
    size: 'Extra small',
    color: 'Black',
    amount: 1,
    price: 'S/. 179.80 PEN',
  },
  {
    name: 'Marida top pink',
    size: 'Extra small',
    color: 'Black',
    amount: 2,
    price: 'S/. 179.80 PEN',
  },
  {
    name: 'Marida top pink',
    size: 'Extra small',
    color: 'Black',
    amount: 3,
    price: 'S/. 179.80 PEN',
  },
]

interface BaseCartProps extends OffcanvasProps {}

export default function BaseCart({ onHide, ...props }: BaseCartProps) {
  const hasProducts = true

  return (
    <Offcanvas
      {...props}
      onHide={onHide}
      placement="end"
      className="w-[85%] md:w-[480px]"
    >
      <OffcanvasHeader>
        <ShoppingIcon className="w-6 h-6 md:w-8 md:h-8" />
        <Link
          href="/cart"
          className="text-sm md:text-base uppercase font-semibold tracking-tight hover:underline"
          onClick={onHide}
        >
          Cart
        </Link>
        <CloseButton onClick={onHide} />
      </OffcanvasHeader>
      <Separator />
      <OffcanvasBody className="pb-0">
        {hasProducts ? (
          <div className="flex flex-col space-y-4">
            <CartItemList items={items} />
            <div className="flex flex-col space-y-4 pb-4 bg-white sticky bottom-0 z-10">
              <Separator className="!px-0 opacity-30" />
              <CartSummary />
            </div>
          </div>
        ) : (
          <p className="uppercase font-normal tracking-tight text-center">
            your cart is currently empty! <br /> let&apos;s fix that
          </p>
        )}
      </OffcanvasBody>
    </Offcanvas>
  )
}
