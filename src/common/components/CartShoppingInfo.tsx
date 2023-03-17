'use client'

import { cn } from 'lib/utils/helpers'
import { useMemo } from 'react'
import { useGetCart } from 'lib/graphql/hooks/cart'
import { useCartStore } from 'lib/store/cart'
import { ShoppingIcon } from './Icons'

export interface CartShoppingInfoProps {
  quantityClassName?: string
  iconClassName?: string
}

export default function CartShoppingInfo({
  quantityClassName,
  iconClassName,
}: CartShoppingInfoProps) {
  const cartId = useCartStore((state) => state.cart.id)
  const { data } = useGetCart(cartId)

  const quantity = useMemo(() => data?.cart?.totalQuantity || 0, [data])

  return (
    <div className="relative">
      {quantity > 0 && (
        <span
          className={cn(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            'tracking-tight font-bold',
            quantityClassName
          )}
        >
          {quantity}
        </span>
      )}
      <ShoppingIcon
        className={cn(quantity > 0 && 'fill-primary-200', iconClassName)}
      />
    </div>
  )
}
