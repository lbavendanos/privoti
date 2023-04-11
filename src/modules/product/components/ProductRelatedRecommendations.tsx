'use client'

import { cn } from 'lib/utils/helpers'
import { useGetProductRelatedRecommendations } from 'lib/shopify/core/product/hooks'
import Heading from '@/common/components/Heading'
import ProductCard from '@/common/components/ProductCard'

interface ProductRelatedRecommendationsProps {
  productId: string
}

export default function ProductRelatedRecommendations({
  productId,
}: ProductRelatedRecommendationsProps) {
  const { data } = useGetProductRelatedRecommendations(productId, {
    suspense: true,
  })

  if (!data) return null
  if (data.productRecommendations && data.productRecommendations.length === 0)
    return null

  return (
    <div className="flex flex-col space-y-4">
      <Heading as="h2">You may also like</Heading>
      <div
        className={cn(
          'grid grid-cols-2 gap-4',
          'md:grid-cols-3',
          'lg:grid-cols-4',
          'xl:grid-cols-5',
          '2xl:grid-cols-6'
        )}
      >
        {data.productRecommendations.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
