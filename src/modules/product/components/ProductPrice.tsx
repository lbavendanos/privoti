'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Variant, Variants } from 'lib/types/variant'
import Price from '@/common/components/Price'

export interface ProductPriceProps {
  variants: Variants
}

export default function ProductPrice({ variants }: ProductPriceProps) {
  const searchParams = useSearchParams()

  const [variant, setVariant] = useState<Variant | undefined>(variants.at(0))

  useEffect(() => {
    const variantId = searchParams.get('variant')
    const variant = variantId
      ? variants.find(({ id }) => id === variantId)
      : variants.at(0)

    setVariant(variant)
  }, [searchParams, variants])

  return <Price size="lg" weight="light" {...variant?.price} />
}
