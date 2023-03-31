'use client'

import { cn } from 'lib/utils/helpers'
import { useGetCart } from 'lib/shopify/core/cart/hooks'
import { useCartStore } from 'lib/store/cart'
import { getShortVariantId } from 'lib/shopify/core/variant'
import { useDebouncedCallback } from 'lib/hooks'
import { removeLineFromCart, updateLineFromCart } from 'lib/shopify/core/cart'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CartLine } from 'lib/shopify/types/cart'
import Link from 'next/link'
import Price from './Price'
import Paragraph from './Paragraph'
import ProductImage from './ProductImage'
import QuantityFormControl from './QuantityFormControl'

export interface CartItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    CartLine {
  variant?: 'normal' | 'minimal'
}

export default function CartItem({
  variant = 'normal',
  node,
  className,
  onClick,
  ...props
}: CartItemProps) {
  const cartId = useCartStore((state) => state.cart.id)
  const { mutate } = useGetCart(cartId)

  const [isLoading, setIsLoading] = useState(false)
  const [quantity, setQuantity] = useState(node?.quantity)

  const merchandise = useMemo(() => node?.merchandise, [node])
  const product = useMemo(() => merchandise?.product, [merchandise])
  const merchandiseUrl = useMemo(
    () => `${product?.handle}?variant=${getShortVariantId(merchandise?.id!)}`,
    [merchandise, product]
  )

  const updateQuantityCart = useCallback(
    async (value: number) => {
      if (cartId && node && node.id && node.merchandise.id) {
        const cart = await updateLineFromCart(
          cartId,
          node?.id,
          node?.merchandise.id,
          value
        )

        mutate({ cart })
      }
    },
    [cartId, node, mutate]
  )

  const debouncedUpdateQuantityCart = useDebouncedCallback(
    updateQuantityCart,
    500
  )

  const handleQuantity = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.valueAsNumber

      setQuantity(value)
      debouncedUpdateQuantityCart(value)
    },
    [debouncedUpdateQuantityCart]
  )

  const handleRemove = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      setIsLoading(false)

      if (cartId && node?.id) {
        const cart = await removeLineFromCart(cartId, node?.id)

        mutate({ cart })
      }

      setIsLoading(false)
    },
    [cartId, node, mutate]
  )

  useEffect(() => {
    setQuantity(node?.quantity)
  }, [node?.quantity])

  if (variant === 'minimal')
    return (
      <div {...props} className={cn('flex flex-nowrap space-x-4', className)}>
        <Link
          href={merchandiseUrl}
          className="w-2/6 sm:w-1/5 grow-0 shrink-0"
          onClick={onClick as any}
        >
          {product?.images?.edges?.at(0) && (
            <ProductImage
              src={product.images.edges.at(0)?.node?.url!}
              alt={product.images.edges.at(0)?.node?.altText! || product.title!}
              width={product.images.edges.at(0)?.node?.width}
              height={product.images.edges.at(0)?.node?.height}
            />
          )}
        </Link>
        <div className="w-full flex flex-col md:flex-row space-y-2">
          <div className="flex flex-col space-y-1 w-8/12 shrink-0 grow-0">
            <Link
              href={merchandiseUrl}
              className="uppercase tracking-tight font-medium w-fit text-xs md:text-sm hover:underline"
              onClick={onClick as any}
            >
              {product?.title}
            </Link>
            {merchandise?.title && (
              <Paragraph size="xs" weight="light">
                Size: <strong>{merchandise.title}</strong>
              </Paragraph>
            )}
          </div>
          <div className="w-full flex flex-col space-y-2 items-start md:items-end">
            {node?.cost?.subtotalAmount && (
              <Price size="xs" weight="light" {...node.cost.subtotalAmount} />
            )}
            {node?.quantity && (
              <QuantityFormControl
                groupClassName="w-[90px] h-[30px]"
                value={quantity}
                min={1}
                max={merchandise?.quantityAvailable}
                onChange={handleQuantity}
              />
            )}
            <button
              className="w-fit uppercase tracking-tight font-light text-xs hover:underline hover:font-normal"
              disabled={isLoading}
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    )

  return (
    <div {...props} className={cn('flex flex-nowrap space-x-4', className)}>
      <Link
        href={merchandiseUrl}
        className="w-[110px] lg:w-[150px] grow-0 shrink-0"
        onClick={onClick as any}
      >
        {product?.images?.edges?.at(0) && (
          <ProductImage
            src={product.images.edges.at(0)?.node?.url!}
            alt={product.images.edges.at(0)?.node?.altText! || product.title!}
            width={product.images.edges.at(0)?.node?.width}
            height={product.images.edges.at(0)?.node?.height}
          />
        )}
      </Link>
      <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center space-y-2">
        <div className="w-full lg:w-6/12 flex flex-col space-y-1">
          <Link
            href={merchandiseUrl}
            className="uppercase tracking-tight font-medium text-sm lg:text-base w-fit hover:underline"
            onClick={onClick as any}
          >
            {product?.title}
          </Link>
          {merchandise?.title && (
            <Paragraph size="xs" weight="light">
              Size: <strong>{merchandise.title}</strong>
            </Paragraph>
          )}
          <button
            className={cn(
              'hidden lg:block',
              'w-fit uppercase tracking-tight font-light text-xs hover:underline hover:font-normal'
            )}
            disabled={isLoading}
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
        {node?.quantity && (
          <QuantityFormControl
            groupClassName="w-[90px] h-[30px]"
            value={quantity}
            min={1}
            max={merchandise?.quantityAvailable}
            onChange={handleQuantity}
          />
        )}
        {node?.cost?.subtotalAmount && (
          <Price
            size="sm"
            weight="light"
            className="w-full lg:w-3/12 text-left lg:text-right"
            {...node.cost.subtotalAmount}
          />
        )}
        <div className="w-full block lg:hidden">
          <button
            className="w-fit uppercase tracking-tight font-light text-xs hover:underline hover:font-normal"
            disabled={isLoading}
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
