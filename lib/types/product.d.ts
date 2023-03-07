import { Images } from './image'

export interface Product {
  id?: string
  name?: string
  url?: string
  priceRange?: {
    minVariantPrice?: {
      amount?: number
      currencyCode?: string
    }
  }
  images?: Images
}

export type Products = Product[]
