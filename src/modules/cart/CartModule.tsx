import { cn } from 'lib/utils/helpers'
import CartItemList, { Items } from '@/common/components/CartItemList'
import React from 'react'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import ProductCard from '@/common/components/ProductCard'
import CartOrderSummary from './components/CartOrderSummary'

const items: Items = [
  {
    name: 'Marida top pink',
    size: 'Extra small',
    color: 'Black',
    amount: 1,
    price: 'S/. 179.80 PEN',
  },
  {
    name: 'Marida top pink',
    size: 'Extra small',
    color: 'Black',
    amount: 2,
    price: 'S/. 179.80 PEN',
  },
  {
    name: 'Marida top pink',
    size: 'Extra small',
    color: 'Black',
    amount: 3,
    price: 'S/. 179.80 PEN',
  },
]

export default function CartModule() {
  return (
    <Container className="my-10">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-4">
          <Heading as="h1">Cart</Heading>
          <div className="flex flex-wrap gap-y-6">
            <div className="w-full lg:w-8/12 p-0 lg:pr-4">
              <CartItemList items={items} />
            </div>
            <div className="w-full lg:w-4/12 p-0 lg:pl-4">
              <CartOrderSummary className="relative lg:sticky lg:top-0" />
            </div>
          </div>
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
