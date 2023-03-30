import { Price } from './price'

export interface Variant {
  id?: string
  title?: string
  price?: Price
  compareAtPrice?: Price
  availableForSale?: boolean
  quantityAvailable?: number
}

export interface Variants {
  edges?: { node?: Variant }[]
}
