import { cn } from 'lib/utils/helpers'
import { Product } from 'lib/types/product'
import Link from 'next/link'
import Image from 'next/image'
import Price from './Price'
import Paragraph from './Paragraph'

interface ProductCardProps
  extends React.ComponentPropsWithoutRef<'a'>,
    Product {}

export default function ProductCard({
  name,
  url,
  priceRange,
  images,
  className,
  ...props
}: ProductCardProps) {
  if (!url) return null

  return (
    <Link {...props} href={url} className={cn('flex flex-col', className)}>
      {images?.at(0) && (
        <figure className="bg-gray-300 w-full h-full">
          <Image
            className="object-cover w-full h-full"
            src={images.at(0)?.src!}
            alt={images.at(0)?.alt! || name!}
            blurDataURL={images.at(0)?.blurDataURL!}
            placeholder="blur"
            width={510}
            height={600}
          />
        </figure>
      )}
      <div className={cn('flex flex-col my-2', 'tracking-tight text-xs')}>
        {name && (
          <Paragraph size="xs" weight="semibold">
            {name}
          </Paragraph>
        )}
        {priceRange?.minVariantPrice && (
          <Price size="xs" {...priceRange?.minVariantPrice} />
        )}
      </div>
    </Link>
  )
}
