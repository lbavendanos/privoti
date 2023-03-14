'use client'

import { cn } from 'lib/utils/helpers'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FormController, useForm } from 'lib/utils/form'
import { Product } from 'lib/types/product'
import { Variant } from 'lib/types/variant'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import ProductPrice from './ProductPrice'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductSizeFormControl from './ProductSizeFormControl'
import { createCart } from 'lib/graphql/cart'

interface ProductFormData {
  variantId: string
  quantity: number
}

interface ProductFormProps extends React.ComponentPropsWithoutRef<'form'> {
  product: Product
}

export default function ProductForm({
  product,
  className,
  ...props
}: ProductFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const variants = useMemo(() => product.variants, [product])

  const [variant, setVariant] = useState<Variant | undefined>()

  const {
    formControl,
    setFormValue,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ProductFormData>({
    defaultValues: {
      variantId: '',
      quantity: 1,
    },
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const url = product.url
      const value = e.target.value

      router.replace(`${url}?variant=${value}`)
    },
    [router, product]
  )

  const handleValid = useCallback(
    async (data: ProductFormData) => {
      const productId = variants?.find(
        ({ shortId }) => shortId === data.variantId
      )?.id

      if (productId) {
        const cart = await createCart(productId, data.quantity)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    },
    [variants]
  )

  useEffect(() => {
    const variantId = searchParams.get('variant')
    const variant = variantId
      ? variants?.find(({ shortId }) => shortId === variantId)
      : variants?.at(0)

    if (variant) {
      setVariant(variant)
      setFormValue('variantId', variant.shortId)
    }
  }, [searchParams, variants, setFormValue])

  if (!(variants && variants.length > 0)) return null

  return (
    <form
      {...props}
      className={cn('flex flex-col space-y-6', className)}
      onSubmit={handleSubmit(handleValid)}
    >
      <div className="flex flex-col gap-y-2">
        <ProductPrice {...variant?.price} />
        <ShippingInfo />
        <Paragraph size="xs" weight="medium">
          <strong>Size:</strong>
        </Paragraph>
        {product.url && (
          <FormController
            name="variantId"
            control={formControl}
            render={({ field }) => (
              <ProductSizeFormControl
                {...field}
                id="variantId"
                variants={variants}
                onChange={(e) => {
                  field.onChange(e)
                  handleChange(e)
                }}
              />
            )}
          />
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <Button type="submit" variant="dark" size="lg">
          Add to my cart
        </Button>
        <Button type="button" variant="primary" size="lg">
          Buy now
        </Button>
      </div>
    </form>
  )
}
