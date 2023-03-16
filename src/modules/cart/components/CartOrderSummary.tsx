import { cn } from 'lib/utils/helpers'
import { Cart } from 'lib/types/cart'
import Heading from '@/common/components/Heading'
import CartSummary from '@/common/components/CartSummary'

interface CartOrderSummaryProps
  extends React.ComponentPropsWithoutRef<'aside'> {
  cart: Cart
}

export default function CartOrderSummary({
  cart,
  className,
  ...props
}: CartOrderSummaryProps) {
  return (
    <aside
      {...props}
      className={cn(
        'flex flex-col p-4 border border-zinc-800 space-y-4',
        className
      )}
    >
      <Heading as="h3" className="text-center">
        Order summary
      </Heading>
      <CartSummary cart={cart} />
    </aside>
  )
}
