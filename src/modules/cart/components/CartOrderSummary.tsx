import { cn } from 'lib/utils/helpers'
import Heading from '@/common/components/Heading'
import CartSummary from '@/common/components/CartSummary'

interface CartOrderSummaryProps
  extends React.ComponentPropsWithoutRef<'aside'> {}

export default function CartOrderSummary({
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
      <CartSummary />
    </aside>
  )
}
