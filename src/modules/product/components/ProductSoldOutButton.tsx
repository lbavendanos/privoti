import Button, { ButtonProps } from '@/common/components/Button'

interface ProductSoldOutButtonProps extends ButtonProps {}

export default function ProductSoldOutButton(props: ProductSoldOutButtonProps) {
  return (
    <Button {...props} type="button" variant="dark" size="lg">
      Agotado
    </Button>
  )
}
