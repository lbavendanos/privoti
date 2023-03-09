'use client'

import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Variants } from 'lib/types/variant'
import SizeFormControl from '@/common/components/SizeFromControl'

interface ProductSizeFormControlProps {
  url: string
  variants: Variants
}

export default function ProductSizeFormControl({
  url,
  variants,
  ...props
}: ProductSizeFormControlProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const options = variants.map(({ id, short }) => ({
    value: id!,
    name: short!,
  }))
  const value = searchParams.get('variant') || options?.at(0)?.value

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      router.replace(`${url}?variant=${value}`)
    },
    [url, router]
  )

  return (
    <SizeFormControl
      {...props}
      className="flex flex-nowrap gap-2"
      optionClassName="btn btn-md w-20 hover:bg-tertiary-200"
      activeClassName="bg-tertiary-200"
      options={options}
      value={value}
      onChange={handleChange}
    />
  )
}
