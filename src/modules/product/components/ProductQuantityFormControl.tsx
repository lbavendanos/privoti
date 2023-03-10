'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Variant, Variants } from 'lib/types/variant'
import QuantityFormControl from '@/common/components/QuantityFormControl'

interface ProductQuantityFormControlProps {
  variants: Variants
}

export default function ProductQuantityFormControl({
  variants,
  ...props
}: ProductQuantityFormControlProps) {
  const searchParams = useSearchParams()

  const [variant, setVariant] = useState<Variant>()
  const [value, setValue] = useState(1)

  useEffect(() => {
    const variantId = searchParams.get('variant')
    const variant = variantId
      ? variants.find(({ id }) => id === variantId)
      : variants.at(0)

    setVariant(variant)
    setValue(1)
  }, [searchParams, variants])

  return (
    <QuantityFormControl
      {...props}
      groupClassName="w-[120px]"
      value={value}
      min={1}
      max={variant?.quantity}
      onChange={(e) => setValue(e.target.valueAsNumber)}
    />
  )
}
