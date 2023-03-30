'use client'

import { cn } from 'lib/utils/helpers'
import { useGetCart } from 'lib/shopify/core/cart/hooks'
import { useCartStore } from 'lib/store/cart'
import { addLineToCart, createCart } from 'lib/shopify/core/cart'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import {
  getDefaultVariant,
  getShortVariantId,
  findVariantByShortId,
} from 'lib/shopify/core/variant'
import { Variant, Variants } from 'lib/shopify/types/variant'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import ProductPrice from './ProductPrice'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductSizeFormControl from './ProductSizeFormControl'

interface ProductFormProps extends React.ComponentPropsWithoutRef<'form'> {
  url: string
  variants: Variants
  availableForSale?: boolean
}

export default function ProductForm({
  url,
  variants,
  availableForSale,
  className,
  ...props
}: ProductFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cartId = useCartStore((state) => state.cart.id)
  const updateCart = useCartStore((state) => state.updateCart)
  const { mutate } = useGetCart(cartId)

  const [variant, setVariant] = useState<Variant>()
  const [variantId, setVariantId] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      setVariantId(value)
      router.replace(`${url}?variant=${value}`)
    },
    [router, url]
  )

  const handleAddToCart = useCallback(async () => {
    setIsLoading(true)

    const merchandiseId = variantId
      ? findVariantByShortId(variantId, variants)?.id
      : null

    if (merchandiseId) {
      const cart = cartId
        ? await addLineToCart(cartId, merchandiseId)
        : await createCart(merchandiseId)

      updateCart(cart)
      mutate({ cart })

      const btnCart = document.querySelector<HTMLButtonElement>('#btn-cart')

      if (btnCart) {
        btnCart.click()
      }
    }

    setIsLoading(false)
  }, [variantId, variants, cartId, updateCart, mutate])

  useEffect(() => {
    const queryVariant = searchParams.get('variant')
    const variant = queryVariant
      ? findVariantByShortId(queryVariant, variants)
      : getDefaultVariant(variants, availableForSale)

    if (variant && variant.id) {
      setVariant(variant)
      setVariantId(getShortVariantId(variant.id))
    }
  }, [variants, availableForSale, searchParams])

  if (!(variants.edges && variants.edges?.length > 0)) return null

  return (
    <form {...props} className={cn('flex flex-col space-y-6', className)}>
      <div className="flex flex-col gap-y-2">
        <ProductPrice {...variant?.price} />
        <ShippingInfo />
        <Paragraph size="xs" weight="medium">
          <strong>Size:</strong>
        </Paragraph>
        <ProductSizeFormControl
          id="variantId"
          name="variantId"
          value={variantId}
          variants={variants}
          onChange={handleSizeChange}
        />
      </div>
      <div className="flex flex-col space-y-2">
        {variant?.availableForSale ? (
          <>
            <Button
              type="button"
              variant="dark"
              size="lg"
              disabled={isLoading}
              onClick={handleAddToCart}
            >
              Add to my cart
            </Button>
            <Button
              type="button"
              variant="primary"
              size="lg"
              disabled={isLoading}
            >
              Buy now
            </Button>
          </>
        ) : (
          <span className="btn btn-dark btn-lg disabled">Agotado</span>
        )}
      </div>
    </form>
  )
}
