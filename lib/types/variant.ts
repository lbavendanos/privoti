import { Price } from './price'

export interface Variant {
  id?: string
  shortId: string
  name?: string
  shortName?: string
  quantity?: number
  price?: Price
}

export type Variants = Variant[]
