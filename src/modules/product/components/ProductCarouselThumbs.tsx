'use client'

import { useCallback, useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Thumbs } from 'swiper'
import Swiper, { SwiperProps } from '@/common/components/Swiper'
import SwiperSlide from '@/common/components/SwiperSlide'
import ProductImage from '@/common/components/ProductImage'

interface ProductCarouselThumbsProps extends SwiperProps {
  images?: Images
  defaultAlt?: string
}

export default function ProductCarouselThumbs({
  images,
  defaultAlt = '',
  ...props
}: ProductCarouselThumbsProps) {
  const [swiperSlideClassName, setSwiperSlideClassName] = useState(
    'mr-2.5 lg:mb-2.5 xl:mb-[14px]'
  )

  const handleBeforeInit = useCallback(() => {
    setSwiperSlideClassName('')
  }, [])

  return (
    <Swiper
      {...props}
      modules={[Thumbs]}
      className="swiper-thumb"
      direction="horizontal"
      slidesPerView="auto"
      spaceBetween={10}
      breakpoints={{
        1024: {
          direction: 'vertical',
          spaceBetween: 10,
        },
        1280: {
          direction: 'vertical',
          spaceBetween: 14,
        },
      }}
      onBeforeInit={handleBeforeInit}
      slideToClickedSlide
      watchSlidesProgress
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
    </Swiper>
  )
}
