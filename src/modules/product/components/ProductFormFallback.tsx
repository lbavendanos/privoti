import { cn } from 'lib/utils/helpers'
import {
  getDefaultVariant,
  getShortVariantTitle,
} from 'lib/shopify/core/variant'
import { Variants } from 'lib/shopify/types/variant'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductPrice from './ProductPrice'

interface ProductFormFallbackProps
  extends React.ComponentPropsWithoutRef<'form'> {
  variants: Variants
  availableForSale?: boolean
}

export default function ProductFormFallback({
  variants,
  availableForSale,
  className,
  ...props
}: ProductFormFallbackProps) {
  const variant = getDefaultVariant(variants, availableForSale)

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
                {getShortVariantTitle(node?.title!)}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        {variant?.availableForSale ? (
          <>
            <Button type="submit" variant="dark" size="lg" disabled>
              Add to my cart
            </Button>
            <Button type="button" variant="primary" size="lg" disabled>
              Buy now
            </Button>
          </>
        ) : (
          <span className="btn btn-dark btn-lg disabled">Agotado</span>
        )}
      </div>
    </form>
  )
}
