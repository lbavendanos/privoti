import { cn } from 'lib/utils/helpers'
import Image, { ImageProps } from 'next/image'

export interface ProductImageProps extends ImageProps {
  figureClassName?: string
}

export default function ProductImage({
  alt,
  quality = 100,
  figureClassName,
  className,
  ...props
}: ProductImageProps) {
  return (
    <figure className={cn('relative block', figureClassName)}>
      <Image
        {...props}
        alt={alt}
        className={cn(
          'aspect-[2/3]',
          'w-full h-full max-w-full',
          'object-cover object-center',
          className
        )}
        quality={quality}
      />
    </figure>
  )
}
