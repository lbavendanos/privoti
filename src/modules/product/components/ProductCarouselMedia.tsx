'use client'

import { useCallback, useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Controller, Navigation } from 'swiper'
import Swiper, { SwiperProps } from '@/common/components/Swiper'
import SwiperSlide from '@/common/components/SwiperSlide'
import ProductImage from '@/common/components/ProductImage'

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
      modules={[Navigation, Controller]}
      className="swiper-media"
      slidesPerView="auto"
      spaceBetween={10}
      onBeforeInit={handleBeforeInit}
      watchSlidesProgress
      navigation
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
    </Swiper>
  )
}
