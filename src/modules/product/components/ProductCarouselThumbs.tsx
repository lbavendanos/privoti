'use client'

import { useCallback, useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Controller, Navigation } from 'swiper'
import Swiper, { SwiperProps } from '@/common/components/Swiper'
import SwiperSlide from '@/common/components/SwiperSlide'
import ProductImage from '@/common/components/ProductImage'

interface ProductCarouselThumbsProps extends SwiperProps {
  images?: Images
}

export default function ProductCarouselThumbs({
  images,
  ...props
}: ProductCarouselThumbsProps) {
  const [swiperSlideClassName, setSwiperSlideClassName] =
    useState('mr-2.5 lg:mb-2.5')

  const handleBeforeInit = useCallback(() => {
    setSwiperSlideClassName('')
  }, [])

  return (
    <Swiper
      {...props}
      modules={[Navigation, Controller]}
      className="swiper-thumb"
      direction="horizontal"
      slidesPerView="auto"
      spaceBetween={10}
      breakpoints={{
        1024: {
          direction: 'vertical',
        },
      }}
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
