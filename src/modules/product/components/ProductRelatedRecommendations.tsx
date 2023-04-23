'use client'

import { cn } from 'lib/utils/helpers'
import { useGetProductRelatedRecommendations } from 'lib/shopify/core/product/hooks'
import Heading from '@/common/components/Heading'
import Loading from '@/common/components/Loading'
import ProductCard from '@/common/components/ProductCard'

interface ProductRelatedRecommendationsProps
  extends React.ComponentPropsWithRef<'div'> {
  productId: string
}

export default function ProductRelatedRecommendations({
  productId,
}: ProductRelatedRecommendationsProps) {
  const { data, isLoading } = useGetProductRelatedRecommendations(productId)

  if (isLoading) return <Loading className="text-center" />

  if (!data) return null
  if (data.productRecommendations && data.productRecommendations.length === 0)
    return null

  return (
    <div className="flex flex-col space-y-4">
      <Heading as="h2" className="text-center">
        También te puede interesar
      </Heading>
      <div
        className={cn(
          'flex flex-row flex-nowrap',
          'overflow-x-auto overflow-y-hidden',
          'space-x-4'
        )}
      >
        {data.productRecommendations.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className={cn(
              'w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12',
              'grow-0 shrink-0'
            )}
          />
        ))}
      </div>
    </div>
  )
}
