'use client'

import { cn } from 'lib/utils/helpers'
import { useGetCart } from 'lib/shopify/core/cart/hooks'
import { useCartStore } from 'lib/store/cart'
import { addLineToCart, createCart } from 'lib/shopify/core/cart'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { FormController, useForm } from 'lib/utils/form'
import { Variant, Variants } from 'lib/shopify/types/variant'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import ProductPrice from './ProductPrice'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductSizeFormControl from './ProductSizeFormControl'

interface ProductFormData {
  variantId: string
}

interface ProductFormProps extends React.ComponentPropsWithoutRef<'form'> {
  url: string
  variants: Variants
}

export default function ProductForm({
  url,
  variants,
  className,
  ...props
}: ProductFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cartId = useCartStore((state) => state.cart.id)
  const updateCart = useCartStore((state) => state.updateCart)
  const { mutate } = useGetCart(cartId)

  const [variant, setVariant] = useState<Variant | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const { formControl, setFormValue, handleSubmit } = useForm<ProductFormData>({
    defaultValues: {
      variantId: '',
    },
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      router.replace(`${url}?variant=${value}`)
    },
    [router, url]
  )

  const handleValid = useCallback(
    async (data: ProductFormData) => {
      setIsLoading(true)

      const variantId = variants.edges?.find(
        ({ node }) =>
          node?.id?.replace('gid://shopify/ProductVariant/', '') ===
          data.variantId
      )?.node?.id

      if (variantId) {
        const cart = cartId
          ? await addLineToCart(cartId, variantId)
          : await createCart(variantId)

        updateCart(cart)
        mutate({ cart })

        const btnCart = document.querySelector<HTMLButtonElement>('#btn-cart')

        if (btnCart) {
          btnCart.click()
        }
      }

      setIsLoading(false)
    },
    [cartId, variants, updateCart, mutate]
  )

  useEffect(() => {
    const queryVariant = searchParams.get('variant')
    const variant = queryVariant
      ? variants.edges?.find(
          ({ node }) =>
            node?.id?.replace('gid://shopify/ProductVariant/', '') ===
            queryVariant
        )?.node
      : variants.edges?.at(0)?.node

    if (variant && variant.id) {
      setVariant(variant)
      setFormValue(
        'variantId',
        variant.id?.replace('gid://shopify/ProductVariant/', '')
      )
    }
  }, [searchParams, variants, setFormValue])

  if (!(variants.edges && variants.edges?.length > 0)) return null

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
      </div>
      <div className="flex flex-col space-y-2">
        <Button type="submit" variant="dark" size="lg" disabled={isLoading}>
          Add to my cart
        </Button>
        <Button type="button" variant="primary" size="lg">
          Buy now
        </Button>
      </div>
    </form>
  )
}
