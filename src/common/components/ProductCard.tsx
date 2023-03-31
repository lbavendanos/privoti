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
  const {
    handle,
    title,
    images,
    priceRange,
    compareAtPriceRange,
    availableForSale,
  } = product

  const isOnSale =
    compareAtPriceRange?.minVariantPrice?.amount &&
    compareAtPriceRange.minVariantPrice.amount > 0

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
        {(!availableForSale || isOnSale) && (
          <div
            className={cn(
              'absolute bottom-2 left-0',
              'pl-4 pr-2 py-1.5',
              'flex items-center',
              !availableForSale && 'text-white bg-zinc-800',
              availableForSale && isOnSale && 'text-zinc-800 bg-primary-100'
            )}
          >
            <span className="uppercase tracking-wider leading-none text-xs">
              {!availableForSale && 'Agotado'}
              {availableForSale && isOnSale && 'Oferta'}
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
        <div className="flex flex-row space-x-2">
          {priceRange?.minVariantPrice && (
            <Price
              size="xs"
              className={cn(isOnSale && 'text-red-500')}
              {...priceRange?.minVariantPrice}
            />
          )}
          {isOnSale && (
            <Price
              size="xs"
              className="line-through"
              {...compareAtPriceRange?.minVariantPrice}
            />
          )}
        </div>
      </div>
    </Link>
  )
}
