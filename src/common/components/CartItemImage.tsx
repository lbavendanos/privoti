import Image from 'next/image'
import { Image as ImageType } from 'lib/types/cart'

export interface CartItemImageProps extends ImageType {
  alt?: string
}

export default function CartItemImage({
  url,
  altText,
  width,
  height,
  alt = '',
  ...props
}: CartItemImageProps) {
  if (!url) return null

  return (
    <Image
      className="object-cover w-full h-full"
      src={url}
      alt={altText || alt}
      width={width}
      height={height}
      quality={100}
      {...props}
    />
  )
}
