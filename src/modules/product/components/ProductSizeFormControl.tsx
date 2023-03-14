'use client'

import React, { useMemo } from 'react'
import { Variants } from 'lib/types/variant'
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
      variants.map(({ shortId, shortName }) => ({
        value: shortId!,
        name: shortName!,
      })),
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
