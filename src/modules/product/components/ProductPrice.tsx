import Price, { PriceProps } from '@/common/components/Price'

export interface ProductPriceProps extends PriceProps {}

export default function ProductPrice(props: ProductPriceProps) {
  return <Price size="lg" {...props} />
}
