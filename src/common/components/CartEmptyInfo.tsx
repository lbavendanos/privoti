import Paragraph, { ParagraphProps } from './Paragraph'

export interface CartEmptyInfoProps extends ParagraphProps {}

export default function CartEmptyInfo(props: CartEmptyInfoProps) {
  return (
    <Paragraph {...props} uppercase>
      your cart is currently empty! <br /> let&apos;s fix that
    </Paragraph>
  )
}
