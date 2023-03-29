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
  const { handle, title, images, priceRange, availableForSale } = product

  if (!handle || !title) return null

  return (
    <Link
      {...props}
      href={handle}
      className={cn('flex flex-col gap-y-1', className)}
    >
      <div className="relative block">
        {images?.edges?.at(0)?.node && (
          <ProductImage
            src={images.edges.at(0)?.node?.url!}
            alt={images.edges.at(0)?.node?.altText || title}
            width={images.edges.at(0)?.node?.width}
            height={images.edges.at(0)?.node?.height}
          />
        )}
        {!availableForSale && (
          <div
            className={cn(
              'absolute bottom-2 left-0',
              'pl-4 pr-2',
              'text-white bg-zinc-800'
            )}
          >
            <span className="uppercase tracking-wider leading-none text-xs">
              Agotado
            </span>
          </div>
        )}
      </div>
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
