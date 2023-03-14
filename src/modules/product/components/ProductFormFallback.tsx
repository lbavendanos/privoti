import { cn } from 'lib/utils/helpers'
import { Product } from 'lib/types/product'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductPrice from './ProductPrice'
import ProductSizeFormControlFallback from './ProductSizeFormControlFallback'

interface ProductFormFallbackProps
  extends React.ComponentPropsWithoutRef<'form'> {
  product: Product
}

export default function ProductFormFallback({
  product,
  className,
  ...props
}: ProductFormFallbackProps) {
  const { variants } = product
  const variant = product.variants?.at(0)

  const options = variants?.map(({ shortId, shortName }) => ({
    value: shortId,
    name: shortName,
  }))

  return (
    <form {...props} className={cn('flex flex-col space-y-6', className)}>
      <div className="flex flex-col gap-y-2">
        <ProductPrice {...variant?.price} />
        <ShippingInfo />
        <Paragraph size="xs" weight="medium">
          <strong>Size:</strong>
        </Paragraph>
        {options && options.length > 0 && (
          <div className="flex flex-nowrap gap-2">
            {options.map((option) => (
              <div
                key={option.value}
                className="btn btn-md w-20 pointer-events-none"
              >
                {option.name}
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
