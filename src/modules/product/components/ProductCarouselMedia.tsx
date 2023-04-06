'use client'

import { useCallback, useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Thumbs } from 'swiper'
import Swiper, { SwiperProps } from '@/common/components/Swiper'
import SwiperSlide from '@/common/components/SwiperSlide'
import ProductImage from '@/common/components/ProductImage'
import ProductCarouselNavigation from './ProductCarouselNavigation'

interface ProductCarouselMediaProps extends SwiperProps {
  images?: Images
}

export default function ProductCarouselMedia({
  images,
  ...props
}: ProductCarouselMediaProps) {
  const [swiperSlideClassName, setSwiperSlideClassName] = useState('mr-2.5')

  const handleBeforeInit = useCallback(() => {
    setSwiperSlideClassName('')
  }, [])

  return (
    <Swiper
      {...props}
      modules={[Thumbs]}
      className="swiper-media group"
      slidesPerView="auto"
      spaceBetween={10}
      onBeforeInit={handleBeforeInit}
      watchSlidesProgress
      breakpoints={{
        1024: {
          allowTouchMove: false,
        },
      }}
      loop
    >
      {images?.edges?.map(({ node }) => (
        <SwiperSlide key={node?.id} className={swiperSlideClassName}>
          <ProductImage
            src={node?.url!}
            alt={node?.altText || ''}
            width={node?.width}
            height={node?.height}
          />
        </SwiperSlide>
      ))}
      <ProductCarouselNavigation />
    </Swiper>
  )
}
