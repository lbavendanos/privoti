'use client'

import { cn } from 'lib/utils/helpers'
import { useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Swiper } from 'swiper/types'
import ProductCarouselThumbs from './ProductCarouselThumbs'
import ProductCarouselMedia from './ProductCarouselMedia'

interface ProductCarouselProps {
  images?: Images
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>()

  if (images?.edges?.length === 0) null

  return (
    <div
      className={cn(
        'relative',
        'flex flex-col gap-y-2',
        'lg:flex-row lg:gap-x-1.5'
      )}
    >
      <div
        className={cn(
          '-mx-4 -mt-6',
          'md:-mt-10',
          'lg:order-2 lg:w-11/12 lg:m-0'
        )}
      >
        <ProductCarouselMedia
          images={images}
          thumbs={{ swiper: thumbsSwiper }}
        />
      </div>
      <div className={cn('w-full', 'lg:order-1 lg:w-1/12', 'lg:aspect-square')}>
        <ProductCarouselThumbs images={images} onSwiper={setThumbsSwiper} />
      </div>
    </div>
  )
}
