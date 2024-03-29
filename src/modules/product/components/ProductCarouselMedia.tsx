'use client'

import { useCallback, useState } from 'react'
import { Images } from 'lib/shopify/types/image'
import { Pagination, Thumbs } from 'swiper'
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
      modules={[Thumbs, Pagination]}
      className="swiper-media group"
      slidesPerView="auto"
      spaceBetween={0}
      pagination={{
        enabled: true,
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      }}
      breakpoints={{
        1024: {
          pagination: {
            enabled: false,
          },
        },
      }}
      onBeforeInit={handleBeforeInit}
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
      <ProductCarouselNavigation />
    </Swiper>
  )
}
