'use client'

import { cn } from 'lib/utils/helpers'
import ProductRelatedRecommendations from './ProductRelatedRecommendations'

interface ProductRecommendationsProps
  extends React.ComponentPropsWithRef<'div'> {
  productId: string
}

export default function ProductRecommendations({
  productId,
  className,
  ...props
}: ProductRecommendationsProps) {
  return (
    <div {...props} className={cn('flex flex-col space-y-10', className)}>
      <ProductRelatedRecommendations productId={productId} />
    </div>
  )
}
