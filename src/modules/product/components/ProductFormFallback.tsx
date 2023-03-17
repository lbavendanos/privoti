import { cn } from 'lib/utils/helpers'
import { Variants } from 'lib/shopify/types/variant'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductPrice from './ProductPrice'

interface ProductFormFallbackProps
  extends React.ComponentPropsWithoutRef<'form'> {
  variants: Variants
}

export default function ProductFormFallback({
  variants,
  className,
  ...props
}: ProductFormFallbackProps) {
  const variant = variants.edges?.at(0)?.node

  return (
    <form {...props} className={cn('flex flex-col space-y-6', className)}>
      <div className="flex flex-col gap-y-2">
        {variant?.price && <ProductPrice {...variant.price} />}
        <ShippingInfo />
        <Paragraph size="xs" weight="medium">
          <strong>Size:</strong>
        </Paragraph>
        {variants.edges && variants.edges.length > 0 && (
          <div className="flex flex-nowrap gap-2">
            {variants.edges.map(({ node }) => (
              <div
                key={node?.id}
                className="btn btn-md w-20 pointer-events-none"
              >
                {node?.title === 'Extra small' && 'xs'}
                {node?.title === 'Small' && 's'}
                {node?.title === 'Medium' && 'm'}
                {node?.title === 'Large' && 'l'}
                {node?.title === 'Extra large' && 'xl'}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <Button type="submit" variant="dark" size="lg">
          Add to my cart
        </Button>
        <Button type="button" variant="primary" size="lg">
          Buy now
        </Button>
      </div>
    </form>
  )
}
