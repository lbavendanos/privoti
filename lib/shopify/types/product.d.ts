import { Price } from './price'
import { Images } from './image'
import { Variants } from './variant'

export interface Product {
  handle?: string
  id?: string
  title?: string
  description?: string
  availableForSale?: boolean
  totalInventory?: number
  priceRange?: { minVariantPrice?: Price }
  images?: Images
  variants?: Variants
}

export interface Products {
  edges?: { node: Product }[]
}
