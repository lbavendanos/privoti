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

export interface Image {
  id?: string
  url?: string
  altText?: string
  width?: number
  height?: number
}

export interface Images {
  edges?: { node?: Image }[]
}

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
    }
    merchandise: {
      id?: string
      title?: string
      image?: { url: string }
      product?: Product
    }
  }
}

export type CartLines = CartLine[]

export type Carts = Cart[]
