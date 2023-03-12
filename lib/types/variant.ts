import { Price } from './price'

export interface Variant {
  id?: string
  name?: string
  short?: string
  quantity?: number
  price?: Price
}

export type Variants = Variant[]
