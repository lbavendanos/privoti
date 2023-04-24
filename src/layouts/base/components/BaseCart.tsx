'use client'

import { useGetCart } from 'lib/shopify/core/cart/hooks'
import { useCartStore } from 'lib/store/cart'
import React, { useMemo } from 'react'
import Offcanvas, { OffcanvasProps } from '@/common/components/Offcanvas'
import Link from 'next/link'
import Separator from '@/common/components/Separator'
import CloseButton from '@/common/components/CloseButton'
import CartSummary from '@/common/components/CartSummary'
import CartItemList from '@/common/components/CartItemList'
import OffcanvasBody from '@/common/components/OffcanvasBody'
import CartEmptyInfo from '@/common/components/CartEmptyInfo'
import OffcanvasHeader from '@/common/components/OffcanvasHeader'
import CartShoppingInfo from '@/common/components/CartShoppingInfo'

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
      <OffcanvasHeader className="bg-primary-100 border-b border-zinc-800">
        <Link href="/cart" onClick={onHide}>
          <CartShoppingInfo
            quantityClassName="text-xs mt-[4px]"
            iconClassName="w-8 h-8"
          />
        </Link>
        <Link
          href="/cart"
          className="text-base uppercase font-semibold tracking-tight hover:underline"
          onClick={onHide}
        >
          Carrito de compras
        </Link>
        <CloseButton onClick={onHide} />
      </OffcanvasHeader>
      <OffcanvasBody className="pb-0">
        {lines && lines.length > 0 ? (
          <div className="flex flex-col space-y-4">
            <CartItemList lines={lines} variant="minimal" onClick={onHide} />
            <div className="flex flex-col space-y-4 pb-4 bg-white sticky bottom-0 z-10">
              <Separator className="!px-0 opacity-30" />
              {data?.cart && <CartSummary cart={data.cart} />}
            </div>
          </div>
        ) : (
          <CartEmptyInfo className="text-center" />
        )}
      </OffcanvasBody>
    </Offcanvas>
  )
}
