'use client'

import { cn } from 'lib/utils/helpers'
import { useCartStore } from 'lib/store/cart'
import { useGetCart } from '@/common/hooks/cart'
import React, { useMemo } from 'react'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import ProductCard from '@/common/components/ProductCard'
import CartItemList from '@/common/components/CartItemList'
import CartOrderSummary from './components/CartOrderSummary'

export default function CartModule() {
  const cartId = useCartStore((state) => state.cart.id)
  const { data } = useGetCart(cartId)

  const lines = useMemo(() => data?.cart?.lines?.edges, [data])

  return (
    <Container className="my-6 md:my-10">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-4">
          <Heading as="h1">Cart</Heading>
          {lines && lines.length > 0 ? (
            <div className="flex flex-wrap gap-y-6">
              <div className="w-full lg:w-8/12 p-0 lg:pr-4">
                <CartItemList lines={lines} />
              </div>
              <div className="w-full lg:w-4/12 p-0 lg:pl-4">
                <CartOrderSummary
                  className="relative lg:sticky lg:top-0"
                  cart={data.cart}
                />
              </div>
            </div>
          ) : (
            <p className="uppercase font-normal tracking-tight text-center">
              your cart is currently empty! <br /> let&apos;s fix that
            </p>
          )}
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <Heading as="h2">Featured collection</Heading>
            <Button variant="tertiary" size="sm">
              See more
            </Button>
          </div>
          <div
            className={cn(
              'grid grid-cols-2 gap-4',
              'md:grid-cols-3',
              'lg:grid-cols-4',
              'xl:grid-cols-5',
              '2xl:grid-cols-6'
            )}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
