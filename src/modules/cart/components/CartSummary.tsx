import { cn } from 'lib/utils/helpers'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'

interface CartSummaryProps extends React.ComponentPropsWithoutRef<'aside'> {}

export default function CartSummary({ className, ...props }: CartSummaryProps) {
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
      <div className="flex flex-col space-y-0.5">
        <div className="flex justify-between">
          <p className="uppercase font-normal tracking-tight text-sm">
            Total items
          </p>
          <p className="uppercase font-normal tracking-tight text-sm">
            <strong>2</strong>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="uppercase font-normal tracking-tight text-sm">
            Subtotal
          </p>
          <p className="uppercase font-normal tracking-tight text-sm">
            <strong>S/. 179.80 PEN</strong>
          </p>
        </div>
      </div>
      <p className="text-xs uppercase font-light tracking-tight">
        Taxes and shipping costs are calculated on the checkout screen
      </p>
      <Button type="button">Checkout</Button>
    </aside>
  )
}
