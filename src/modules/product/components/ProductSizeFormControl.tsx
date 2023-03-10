'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
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
  const searchParams = useSearchParams()
  const router = useRouter()

  const [value, setValue] = useState<string>()

  const options = variants.map(({ id, short }) => ({
    value: id!,
    name: short!,
  }))

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      setValue(value)

      router.replace(`${url}?variant=${value}`)
    },
    [url, router]
  )

  useEffect(() => {
    const variantId = searchParams.get('variant')
    const variant = variantId
      ? variants.find(({ id }) => id === variantId)
      : variants.at(0)

    setValue(variant?.id)
  }, [searchParams, variants])

  return (
    <SizeFormControl
      {...props}
      groupClassName="flex flex-nowrap gap-2"
      optionClassName="btn btn-md w-20 hover:bg-tertiary-200"
      activeClassName="bg-tertiary-200"
      options={options}
      value={value}
      onChange={handleChange}
    />
  )
}
