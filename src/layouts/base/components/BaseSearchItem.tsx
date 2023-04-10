'use client'

import { cn } from 'lib/utils/helpers'
import { useMemo } from 'react'
import { Product } from 'lib/shopify/types/product'
import Link from 'next/link'
import Price from '@/common/components/Price'
import Paragraph from '@/common/components/Paragraph'
import ProductImage from '@/common/components/ProductImage'

export interface BaseSearchItemProps
  extends React.ComponentPropsWithoutRef<'li'> {
  product: Product
}

export default function BaseSearchItem({
  product,
  className,
  ...props
}: BaseSearchItemProps) {
  const isOnSale = useMemo(
    () =>
      product?.compareAtPriceRange?.minVariantPrice?.amount &&
      product.compareAtPriceRange.minVariantPrice.amount > 0,
    [product]
  )

  return (
    <li
      {...props}
      className={cn('flex px-4 py-2 hover:bg-secondary-50', className)}
    >
      {product.handle && (
        <Link
          href={product.handle}
          className="flex gap-x-4 items-center w-full"
        >
          {product.images?.edges?.at(0) && (
            <div className="w-[15%] md:w-[10%] grow-0 shrink-0">
              <ProductImage
                src={product.images?.edges?.at(0)?.node?.url!}
                alt={
                  product.images?.edges?.at(0)?.node?.altText! || product.title!
                }
                width={product.images?.edges?.at(0)?.node?.width}
                height={product.images?.edges?.at(0)?.node?.height}
              />
            </div>
          )}
          <div className="flex flex-col space-y-1">
            {product.title && (
              <Paragraph size="xs" weight="semibold" uppercase>
                {product.title}
              </Paragraph>
            )}
            <div className="flex flex-row space-x-2">
              {product.priceRange?.minVariantPrice && (
                <Price
                  size="xs"
                  className={cn(isOnSale && 'text-red-500')}
                  {...product.priceRange.minVariantPrice}
                />
              )}
              {isOnSale && (
                <Price
                  size="xs"
                  className="line-through"
                  {...product.compareAtPriceRange?.minVariantPrice}
                />
              )}
            </div>
          </div>
        </Link>
      )}
    </li>
  )
}
