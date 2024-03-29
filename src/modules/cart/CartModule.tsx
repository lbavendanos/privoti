import { cn } from 'lib/utils/helpers'
import React from 'react'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import CartOrder from './components/CartOder'

export default function CartModule() {
  return (
    <Container className="my-6 md:my-10">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-4">
          <Heading as="h1">Tu carrito</Heading>
          <CartOrder />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <Heading as="h2">Colección destacada</Heading>
            <Button variant="tertiary" size="sm">
              Ver más
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
            {/* {Array.from({ length: 6 }, (_, i) => ( */}
            {/*   <ProductCard key={i} /> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </Container>
  )
}
