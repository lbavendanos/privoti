'use client'

import { getShortVariantTitle } from 'lib/shopify/core/variant'
import React, { useMemo } from 'react'
import { Variants } from 'lib/shopify/types/variant'
import SizeFormControl from '@/common/components/SizeFromControl'

interface ProductSizeFormControlProps
  extends React.ComponentPropsWithRef<'input'> {
  variants: Variants
}

const ProductSizeFormControl = React.forwardRef<
  HTMLInputElement,
  ProductSizeFormControlProps
>(({ variants, ...props }, ref) => {
  const options = useMemo(
    () =>
      variants.edges?.map(({ node }) => {
        return {
          value: node?.id?.replace('gid://shopify/ProductVariant/', '')!,
          name: getShortVariantTitle(node?.title!)!,
          available: node?.availableForSale!,
        }
      }),
    [variants]
  )

  return (
    <SizeFormControl
      {...props}
      ref={ref}
      groupClassName="flex flex-nowrap gap-2"
      availableClassName="btn btn-md w-20 hover:bg-tertiary-200"
      activeAvailableClassName="bg-tertiary-200"
      unavailableClassName="btn btn-md w-20 bg-zinc-50 hover:bg-zinc-200 opacity-40"
      activeUnavailableClassName="!bg-tertiary-200"
      options={options}
    />
  )
})

ProductSizeFormControl.displayName = 'ProductSizeFormControl'

export default ProductSizeFormControl
