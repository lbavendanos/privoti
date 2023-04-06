'use client'

import { cn } from 'lib/utils/helpers'
import { useSwiper } from 'swiper/react'
import { useCallback } from 'react'
import {
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
} from '@/common/components/Icons'

export default function ProdutCarouselNavigation() {
  const swiper = useSwiper()

  const btnClassName = cn(
    'btn btn-secondary btn-xs rounded-full',
    'absolute top-1/2 transform -translate-y-1/2',
    'z-10',
    'opacity-0',
    'group-hover:opacity-100',
    'transition-opacity delay-100',
    'hidden lg:block'
  )
  const prevBtnClassName = 'left-2'
  const nextBtnClassName = 'right-2'
  const iconClassName = 'lg:w-8 lg:h-8 xl:w-6 xl:h-6'

  const handlePrev = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault
      swiper.slidePrev()
    },
    [swiper]
  )

  const handleNext = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault
      swiper.slideNext()
    },
    [swiper]
  )

  return (
    <>
      <button
        className={cn(btnClassName, prevBtnClassName)}
        onClick={handlePrev}
      >
        <KeyboardArrowLeftIcon className={iconClassName} />
      </button>
      <button
        className={cn(btnClassName, nextBtnClassName)}
        onClick={handleNext}
      >
        <KeyboardArrowRightIcon className={iconClassName} />
      </button>
    </>
  )
}
