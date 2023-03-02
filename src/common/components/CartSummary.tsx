import { cn } from 'lib/utils/helpers'
import Button from './Button'
import Paragraph from './Paragraph'
import ShippingInfo from './ShippingInfo'

export interface CartSummaryProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export default function CartSummary({ className, ...props }: CartSummaryProps) {
  return (
    <div {...props} className={cn('flex flex-col space-y-4', className)}>
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
      <ShippingInfo />
      <Button type="button" size="lg">
        Checkout
      </Button>
    </div>
  )
}
