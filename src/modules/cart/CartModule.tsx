import { cn } from 'lib/utils/helpers'
import React from 'react'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import CartItem from './components/CartItem'
import Container from '@/common/components/Container'
import Separator from '@/common/components/Separator'
import CartSummary from './components/CartSummary'
import ProductCard from '@/common/components/ProductCard'

export default function CartModule() {
  return (
    <Container className="my-10">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-4">
          <Heading as="h1">Cart</Heading>
          <div className="flex flex-wrap gap-y-6">
            <div className="w-full lg:w-8/12 xl:w-9/12 p-0 lg:pr-4">
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 3 }, (_, i) => (
                  <React.Fragment key={i}>
                    <CartItem />
                    {i !== 2 && <Separator className="!px-0 opacity-30" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-4/12 xl:w-3/12 p-0 lg:pl-4">
              <CartSummary />
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
