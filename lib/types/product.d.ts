import { Price } from './price'
import { Images } from './image'
import { Variants } from './variant'

export interface Product {
  id?: string
  url?: string
  name?: string
  description?: string
  priceRange?: {
    minVariantPrice?: Price
  }
  images?: Images
  variants?: Variants
}

export type Products = Product[]
