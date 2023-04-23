'use client'

import { cn } from 'lib/utils/helpers'
import { useState } from 'react'
import { getDefaultVariant } from 'lib/shopify/core/variant'
import { Variants } from 'lib/shopify/types/variant'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductPrice from './ProductPrice'
import ProductBuyNowButton from './ProductBuyNowButton'
import ProductSoldOutButton from './ProductSoldOutButton'
import ProductSizeFormControl from './ProductSizeFormControl'
import ProductAddtoCartButton from './ProductAddToCartButton'

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
  const [variantId, setVariantId] = useState<string | undefined>()

  const variant = getDefaultVariant(variants, availableForSale)
  const isOnSale =
    variant?.compareAtPrice?.amount && variant.compareAtPrice.amount > 0

  return (
    <form {...props} className={cn('flex flex-col space-y-6', className)}>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row space-x-2">
          {variant?.price && (
            <ProductPrice
              className={cn(isOnSale && 'text-red-500')}
              {...variant.price}
            />
          )}
          {isOnSale && (
            <ProductPrice
              className="line-through"
              {...variant?.compareAtPrice}
            />
          )}
        </div>
        <ShippingInfo />
        <ProductSizeFormControl
          id="variantId"
          name="variantId"
          value={variantId}
          variants={variants}
          onChange={(e) => setVariantId(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-2">
        {variant?.availableForSale ? (
          <>
            <ProductAddtoCartButton disabled />
            <ProductBuyNowButton disabled />
          </>
        ) : (
          <ProductSoldOutButton disabled />
        )}
      </div>
    </form>
  )
}
