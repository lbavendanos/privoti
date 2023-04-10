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
  defaultAlt?: string
}

export default function ProductCarouselMedia({
  images,
  defaultAlt = '',
  ...props
}: ProductCarouselMediaProps) {
  const [swiperSlideClassName, setSwiperSlideClassName] = useState(
    'mr-0 md:mr-2.5 lg:mr-0 xl:mr-2.5'
  )

  const handleBeforeInit = useCallback(() => {
    setSwiperSlideClassName('')
  }, [])

  return (
    <Swiper
      {...props}
      modules={[Thumbs]}
      className="swiper-media group"
      slidesPerView="auto"
      spaceBetween={0}
      onBeforeInit={handleBeforeInit}
      watchSlidesProgress
      breakpoints={{
        768: {
          spaceBetween: 10,
        },
        1024: {
          allowTouchMove: false,
          spaceBetween: 0,
        },
        1280: {
          allowTouchMove: false,
          spaceBetween: 10,
        },
      }}
      loop
    >
      {images?.edges?.map(({ node }) => (
        <SwiperSlide key={node?.id} className={swiperSlideClassName}>
          <ProductImage
            src={node?.url!}
            alt={node?.altText || defaultAlt}
            width={node?.width}
            height={node?.height}
          />
        </SwiperSlide>
      ))}
      <ProductCarouselNavigation />
    </Swiper>
  )
}
