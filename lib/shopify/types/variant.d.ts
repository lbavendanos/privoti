import { Price } from './price'

export interface Variant {
  id?: string
  title?: string
  price?: Price
  currentlyNotInStock?: boolean
  quantityAvailable?: number
}

export interface Variants {
  edges?: { node?: Variant }[]
}
