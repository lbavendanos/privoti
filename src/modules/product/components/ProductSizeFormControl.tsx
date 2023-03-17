'use client'

import React, { useMemo } from 'react'
import SizeFormControl from '@/common/components/SizeFromControl'
import { Variants } from 'lib/shopify/types/variant'

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
        let name = ''

        if (node?.title === 'Extra small') name = 'xs'
        if (node?.title === 'Small') name = 's'
        if (node?.title === 'Medium') name = 'm'
        if (node?.title === 'Large') name = 'l'
        if (node?.title === 'Extra large') name = 'xl'

        return {
          value: node?.id?.replace('gid://shopify/ProductVariant/', '')!,
          name,
        }
      }),
    [variants]
  )

  return (
    <SizeFormControl
      {...props}
      ref={ref}
      groupClassName="flex flex-nowrap gap-2"
      optionClassName="btn btn-md w-20 hover:bg-tertiary-200"
      activeClassName="bg-tertiary-200"
      options={options}
    />
  )
})

ProductSizeFormControl.displayName = 'ProductSizeFormControl'

export default ProductSizeFormControl
