'use client'

import dynamic from 'next/dynamic'

const ProductRecommendations = dynamic(
  () => import('./ProductRecommendations'),
  {
    ssr: false,
  }
)

interface ProductRecommendationsLazyProps {
  productId: string
}

export default function ProductRecommendationsLazy({
  productId,
}: ProductRecommendationsLazyProps) {
  return (
    <>
      <ProductRecommendations productId={productId} />
    </>
  )
}
