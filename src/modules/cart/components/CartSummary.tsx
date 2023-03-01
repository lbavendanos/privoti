import { cn } from 'lib/utils/helpers'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import Paragraph from '@/common/components/Paragraph'

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
          <Paragraph size="sm">Total items</Paragraph>
          <Paragraph size="sm">
            <strong>2</strong>
          </Paragraph>
        </div>
        <div className="flex justify-between">
          <Paragraph size="sm">Subtotal</Paragraph>
          <Paragraph size="sm">
            <strong>S/. 179.80 PEN</strong>
          </Paragraph>
        </div>
      </div>
      <Paragraph size="xs" weight="light">
        Taxes and shipping costs are calculated on the checkout screen
      </Paragraph>
      <Button type="button">Checkout</Button>
    </aside>
  )
}
