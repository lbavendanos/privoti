import Button, { ButtonProps } from '@/common/components/Button'

interface ProductAddtoCartButtonProps extends ButtonProps {}

export default function ProductAddtoCartButton(
  props: ProductAddtoCartButtonProps
) {
  return (
    <Button {...props} type="button" variant="dark" size="lg">
      Agregar al carrito
    </Button>
  )
}
