'use client'

import QuantityFormControl from '@/common/components/QuantityFormControl'

export default function ProductQuantityFormControlFallback() {
  return (
    <QuantityFormControl groupClassName="w-[120px]" value={1} min={1} max={1} />
  )
}
