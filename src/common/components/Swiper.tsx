'use client'

import {
  Swiper as SwiperBase,
  SwiperProps as SwiperBaseProps,
} from 'swiper/react'
import 'node_modules/swiper/swiper.min.css'

export interface SwiperProps extends SwiperBaseProps {}

export default function Swiper(props: SwiperProps) {
  return <SwiperBase {...props} />
}
