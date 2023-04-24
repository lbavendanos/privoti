import Paragraph, { ParagraphProps } from './Paragraph'

export interface CartEmptyInfoProps extends ParagraphProps {}

export default function CartEmptyInfo(props: CartEmptyInfoProps) {
  return (
    <Paragraph {...props} uppercase>
      Su carrito está vacío.
    </Paragraph>
  )
}
