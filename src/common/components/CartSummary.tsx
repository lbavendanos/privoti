import { cn } from 'lib/utils/helpers'
import { useRouter } from 'next/navigation'
import { Cart } from 'lib/types/cart'
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

  return (
    <div {...props} className={cn('flex flex-col space-y-4', className)}>
      <div className="flex flex-col space-y-0.5">
        <div className="flex justify-between">
          <Paragraph size="sm">Total items</Paragraph>
          <Paragraph size="sm" weight="semibold">
            {cart.totalQuantity}
          </Paragraph>
        </div>
        <div className="flex justify-between">
          <Paragraph size="sm">Subtotal</Paragraph>
          <Price size="sm" weight="semibold" {...cart.cost?.subtotalAmount} />
        </div>
      </div>
      <ShippingInfo />
      <Button
        type="button"
        size="lg"
        onClick={(e) => {
          e.preventDefault

          if (cart.checkoutUrl) {
            router.push(cart?.checkoutUrl)
          }
        }}
      >
        Checkout
      </Button>
    </div>
  )
}
