'use client'

import { useSearchParams } from 'next/navigation'
import { Sizes } from 'lib/types/size'
import SizeFormControl from '@/common/components/SizeFromControl'

interface ProductSizeFormControlProps {
  sizes: Sizes
}

export default function ProductSizeFormControl({
  sizes,
  ...props
}: ProductSizeFormControlProps) {
  const searchParams = useSearchParams()
  const options = sizes.map(({ id, short }) => ({ value: id!, name: short! }))
  const value = searchParams.get('variant') || options?.at(0)?.value

  return (
    <SizeFormControl
      {...props}
      className="flex flex-nowrap gap-2"
      optionClassName="btn btn-md w-20 hover:bg-tertiary-200"
      activeClassName="bg-tertiary-200"
      options={options}
      value={value}
      onChange={(e) => console.log(e.target.value)}
    />
  )
}
