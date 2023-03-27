import { cn } from 'lib/utils/helpers'
import { Product } from 'lib/shopify/types/product'
import Link from 'next/link'
import Image from 'next/image'
import Price from './Price'
import Paragraph from './Paragraph'

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
    <Link {...props} href={handle} className={cn('flex flex-col', className)}>
      {images?.edges?.at(0)?.node && (
        <figure className="relative block">
          <Image
            className={cn(
              'aspect-[2/3]',
              'w-full h-full max-w-full',
              'object-cover object-center'
            )}
            src={images.edges.at(0)?.node?.url!}
            alt={images.edges.at(0)?.node?.altText || title}
            width={images.edges.at(0)?.node?.width}
            height={images.edges.at(0)?.node?.height}
            quality={100}
          />
        </figure>
      )}
      <div className={cn('flex flex-col my-2', 'tracking-tight text-xs')}>
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
