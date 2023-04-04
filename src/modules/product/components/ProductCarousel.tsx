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
  const [firstSwiper, setFirstSwiper] = useState<Swiper>()
  const [secondSwiper, setSecondSwiper] = useState<Swiper>()

  if (images?.edges?.length === 0) null

  return (
    <div className={cn('relative', 'flex flex-col gap-y-2 lg:block lg:gap-0')}>
      <div className={cn('-mx-4 -mt-6', 'md:-mt-10', 'lg:ml-[76px] lg:m-0')}>
        <ProductCarouselMedia
          images={images}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
        />
      </div>
      <div
        className={cn(
          'lg:absolute lg:top-0 lg:left-0',
          'lg:w-[67px] lg:h-full lg:max-h-full',
          'lg:overflow-hidden'
        )}
      >
        <ProductCarouselThumbs
          images={images}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        />
      </div>
    </div>
  )
}
