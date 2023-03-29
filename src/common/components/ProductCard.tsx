import { cn } from 'lib/utils/helpers'
import { Product } from 'lib/shopify/types/product'
import Link from 'next/link'
import Price from './Price'
import Paragraph from './Paragraph'
import ProductImage from './ProductImage'

interface ProductCardProps extends React.ComponentPropsWithoutRef<'a'> {
  product: Product
}

export default function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  const { handle, title, images, priceRange } = product

  if (!handle || !title) return null

  return (
    <Link
      {...props}
      href={handle}
      className={cn('flex flex-col gap-y-1', className)}
    >
      {images?.edges?.at(0)?.node && (
        <ProductImage
          src={images.edges.at(0)?.node?.url!}
          alt={images.edges.at(0)?.node?.altText || title}
          width={images.edges.at(0)?.node?.width}
          height={images.edges.at(0)?.node?.height}
        />
      )}
      <div className={cn('flex flex-col space-y-1')}>
        {title && (
          <Paragraph size="xs" weight="semibold">
            {title}
          </Paragraph>
        )}
        {priceRange?.minVariantPrice && (
          <Price size="xs" {...priceRange?.minVariantPrice} />
        )}
      </div>
    </Link>
  )
}
