import { Price } from './price'
import { Image } from './image'
import { Products } from './product'

export interface Cart {
  id?: string
  totalQuantity?: number
  checkoutUrl?: string
  cost?: {
    totalAmount?: Price
  }
  lines?: CarLines
}

export interface CartLine {
  id?: string
  quantity?: number
  merchandise: {
    id?: string
    title?: string
    image: Image
  }
}

export type CartLines = CartLine[]

export type Carts = Cart[]
