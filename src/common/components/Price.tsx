import { Price as PriceBase } from 'lib/types/price'
import Paragraph, { ParagraphProps } from './Paragraph'

export interface ProductPriceProps extends ParagraphProps, PriceBase {}

export default function Price({
  currencyCode,
  amount,
  ...props
}: ProductPriceProps) {
  if (!amount) return null

  return (
    <Paragraph {...props}>
      {new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: currencyCode,
      }).format(amount)}
    </Paragraph>
  )
}
