import { Variants } from 'lib/types/variant'
import Price from '@/common/components/Price'

export interface ProductPriceFallbackProps {
  variants: Variants
}

export default function ProductPriceFallback({
  variants,
}: ProductPriceFallbackProps) {
  const variant = variants.at(0)

  return <Price size="lg" weight="light" {...variant?.price} />
}
