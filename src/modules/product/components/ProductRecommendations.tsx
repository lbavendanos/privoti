'use client'

import { Suspense } from 'react'
import Paragraph from '@/common/components/Paragraph'
import ProductRelatedRecommendations from './ProductRelatedRecommendations'

interface ProductRecommendationsProps {
  productId: string
}

export default function ProductRecommendations({
  productId,
}: ProductRecommendationsProps) {
  return (
    <div className="flex flex-col space-y-10">
      <Suspense
        fallback={
          <Paragraph
            size="xs"
            weight="semibold"
            className="text-center"
            uppercase
          >
            Loading...
          </Paragraph>
        }
      >
        <ProductRelatedRecommendations productId={productId} />
      </Suspense>
    </div>
  )
}
