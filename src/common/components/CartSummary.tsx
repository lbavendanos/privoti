'use client'

import { cn } from 'lib/utils/helpers'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Cart } from 'lib/shopify/types/cart'
import Price from './Price'
import Button from './Button'
import Paragraph from './Paragraph'
import ShippingInfo from './ShippingInfo'

export interface CartSummaryProps
  extends React.ComponentPropsWithoutRef<'div'> {
  cart: Cart
}

export default function CartSummary({
  cart,
  className,
  ...props
}: CartSummaryProps) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      setIsLoading(true)

      if (cart.checkoutUrl) {
        router.push(cart?.checkoutUrl)
      }
    },
    [cart.checkoutUrl, router]
  )

  return (
    <div {...props} className={cn('flex flex-col space-y-4', className)}>
      <div className="flex flex-col space-y-0.5">
        <div className="flex justify-between">
          <Paragraph size="sm" weight="light" uppercase>
            Total items
          </Paragraph>
          <Paragraph size="sm" weight="semibold">
            {cart.totalQuantity}
          </Paragraph>
        </div>
        <div className="flex justify-between">
          <Paragraph size="lg" weight="semibold" uppercase>
            Subtotal
          </Paragraph>
          <Price size="lg" weight="semibold" {...cart.cost?.subtotalAmount} />
        </div>
      </div>
      <ShippingInfo />
      <Button
        type="button"
        size="lg"
        disabled={isLoading}
        onClick={handleClick}
      >
        Checkout
      </Button>
    </div>
  )
}
