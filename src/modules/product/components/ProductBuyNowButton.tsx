import Button, { ButtonProps } from '@/common/components/Button'

interface ProductBuyNowButtonProps extends ButtonProps {}

export default function ProductBuyNowButton(props: ProductBuyNowButtonProps) {
  return (
    <Button {...props} type="button" variant="primary" size="lg">
      Comprar ahora
    </Button>
  )
}
