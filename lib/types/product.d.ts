import { Price } from './price'
import { Sizes } from './size'
import { Images } from './image'

export interface Product {
  id?: string
  url?: string
  name?: string
  description?: string
  priceRange?: {
    minVariantPrice?: Price
  }
  images?: Images
  sizes?: Sizes
}

export type Products = Product[]
