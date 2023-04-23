import Paragraph, { ParagraphProps } from './Paragraph'

export interface ShippingInfoProps extends ParagraphProps {}

export default function ShippingInfo(props: ShippingInfoProps) {
  return (
    <Paragraph {...props} size="xs" weight="light">
      Los impuestos y los gastos de envío se calculan en la pantalla de pago
    </Paragraph>
  )
}
