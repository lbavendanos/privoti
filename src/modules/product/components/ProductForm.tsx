'use client'

import { cn } from 'lib/utils/helpers'
import { redirect } from 'next/navigation'
import { useGetCart } from 'lib/shopify/core/cart/hooks'
import { useCartStore } from 'lib/store/cart'
import { createCheckout } from 'lib/shopify/core/checkout'
import { addLineToCart, createCart } from 'lib/shopify/core/cart'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  getDefaultVariant,
  getShortVariantId,
  findVariantByShortId,
} from 'lib/shopify/core/variant'
import { Variant, Variants } from 'lib/shopify/types/variant'
import ProductPrice from './ProductPrice'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductBuyNowButton from './ProductBuyNowButton'
import ProductSoldOutButton from './ProductSoldOutButton'
import ProductSizeFormControl from './ProductSizeFormControl'
import ProductAddtoCartButton from './ProductAddToCartButton'

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

  const isOnSale = useMemo(
    () => variant?.compareAtPrice?.amount && variant.compareAtPrice.amount > 0,
    [variant]
  )

  const handleSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      setVariantId(value)
      router.replace(`/products/${url}?variant=${value}`)
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

  const handleCheckout = useCallback(async () => {
    setIsLoading(true)

    const merchandiseId = variantId
      ? findVariantByShortId(variantId, variants)?.id
      : null

    if (merchandiseId) {
      const checkout = await createCheckout({
        lineItems: [{ variantId: merchandiseId, quantity: 1 }],
      })

      router.push(checkout.webUrl!)
    }
  }, [variantId, variants, router])

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
        <div className="flex flex-row space-x-2">
          <ProductPrice {...variant?.price} />
          {isOnSale && (
            <ProductPrice
              className="line-through opacity-40"
              {...variant?.compareAtPrice}
            />
          )}
        </div>
        <ShippingInfo />
        <ProductSizeFormControl
          id="product-variant"
          name="variant"
          value={variantId}
          variants={variants}
          onChange={handleSizeChange}
        />
      </div>
      <div className="flex flex-col space-y-2">
        {variant?.availableForSale ? (
          <>
            <ProductAddtoCartButton
              disabled={isLoading}
              onClick={handleAddToCart}
            />
            <ProductBuyNowButton
              disabled={isLoading}
              onClick={handleCheckout}
            />
          </>
        ) : (
          <ProductSoldOutButton disabled />
        )}
      </div>
    </form>
  )
}
