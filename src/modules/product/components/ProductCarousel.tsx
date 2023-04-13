'use client'

import { cn } from 'lib/utils/helpers'
import { useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Swiper } from 'swiper/types'
import ProductCarouselThumbs from './ProductCarouselThumbs'
import ProductCarouselMedia from './ProductCarouselMedia'

interface ProductCarouselProps {
  images?: Images
  defaultAlt?: string
}

export default function ProductCarousel({
  images,
  defaultAlt,
}: ProductCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>()

  if (images?.edges?.length === 0) null

  return (
    <div className={cn('relative', 'flex flex-col', 'md:flex-row md:gap-x-4')}>
      <div
        className={cn(
          'hidden w-full',
          'grow-0 shrink-0',
          'lg:w-[60px]',
          'lg:aspect-square',
          'lg:block'
        )}
      >
        <ProductCarouselThumbs
          images={images}
          defaultAlt={defaultAlt}
          onSwiper={setThumbsSwiper}
        />
      </div>
      <div className={cn('-mx-4 -mt-6', 'md:w-full md:m-0')}>
        <ProductCarouselMedia
          thumbs={{ swiper: thumbsSwiper }}
          images={images}
          defaultAlt={defaultAlt}
        />
      </div>
    </div>
  )
}
