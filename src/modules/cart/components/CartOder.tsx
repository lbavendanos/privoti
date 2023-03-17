'use client'

import { useMemo } from 'react'
import { useGetCart } from 'lib/graphql/hooks/cart'
import { useCartStore } from 'lib/store/cart'
import CartItemList from '@/common/components/CartItemList'
import CartEmptyInfo from '@/common/components/CartEmptyInfo'
import CartOrderSummary from './CartOrderSummary'

export default function CartOrder() {
  const cartId = useCartStore((state) => state.cart.id)
  const { data } = useGetCart(cartId)

  const lines = useMemo(() => data?.cart?.lines?.edges, [data])

  return (
    <div className="w-full">
      {lines && lines.length > 0 ? (
        <div className="flex flex-wrap gap-y-6">
          <div className="w-full lg:w-8/12 p-0 lg:pr-4">
            <CartItemList lines={lines} variant="normal" />
          </div>
          <div className="w-full lg:w-4/12 p-0 lg:pl-4">
            <CartOrderSummary
              className="relative lg:sticky lg:top-0"
              cart={data.cart}
            />
          </div>
        </div>
      ) : (
        <CartEmptyInfo className="text-center" />
      )}
    </div>
  )
}
