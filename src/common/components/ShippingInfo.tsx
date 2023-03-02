import Paragraph, { ParagraphProps } from './Paragraph'

export interface ShippingInfoProps extends ParagraphProps {}

export default function ShippingInfo(props: ShippingInfoProps) {
  return (
    <Paragraph {...props} size="xs" weight="light">
      Taxes and shipping costs are calculated on the checkout screen
    </Paragraph>
  )
}
