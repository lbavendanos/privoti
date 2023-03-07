import { Images } from './image'
import { Price } from './price'

export interface Product {
  id?: string
  url?: string
  name?: string
  description?: string
  priceRange?: {
    minVariantPrice?: Price
  }
  images?: Images
}

export type Products = Product[]
