'use client'

import { useGetCart } from 'lib/graphql/hooks/cart'
import { useCartStore } from 'lib/store/cart'
import React, { useMemo } from 'react'
import { ShoppingIcon } from '@/common/components/Icons'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import Link from 'next/link'
import Separator from '@/common/components/Separator'
import CloseButton from '@/common/components/CloseButton'
import CartSummary from '@/common/components/CartSummary'
import CartItemList from '@/common/components/CartItemList'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'

interface BaseCartProps extends OffcanvasProps {}

export default function BaseCart({ onHide, ...props }: BaseCartProps) {
  const cartId = useCartStore((state) => state.cart.id)
  const { data } = useGetCart(cartId)

  const lines = useMemo(() => data?.cart?.lines?.edges, [data])

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
        {lines && lines.length > 0 ? (
          <div className="flex flex-col space-y-4">
            <CartItemList lines={lines} variant="minimal" onClick={onHide} />
            <div className="flex flex-col space-y-4 pb-4 bg-white sticky bottom-0 z-10">
              <Separator className="!px-0 opacity-30" />
              <CartSummary cart={data.cart} />
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
