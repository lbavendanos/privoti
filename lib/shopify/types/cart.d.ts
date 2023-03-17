import { Price } from './price'
import { Product } from './product'

export interface Cart {
  id?: string
  totalQuantity?: number
  checkoutUrl?: string
  cost?: {
    subtotalAmount?: Price
    totalAmount?: Price
  }
  lines?: {
    edges: CartLines
  }
}

export interface CartLine {
  node?: {
    id?: string
    quantity?: number
    cost?: {
      amountPerQuantity?: Price
      subtotalAmount?: Price
    }
    merchandise: {
      id?: string
      title?: string
      quantityAvailable?: number
      image?: { url: string }
      product?: Product
    }
  }
}

export type CartLines = CartLine[]
