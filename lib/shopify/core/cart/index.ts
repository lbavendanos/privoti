import { Cart } from 'lib/shopify/types/cart'
import { ADD_LINE, CREATE_CART, REMOVE_LINE, UPDATE_LINE } from './queries'
import { shopifyFetcher } from 'lib/shopify/utils'

export async function createCart(
  merchandiseId: string,
  quantity: number = 1
): Promise<Cart> {
  const response = await shopifyFetcher(CREATE_CART, {
    merchandiseId,
    quantity,
  })

  return response.cartCreate.cart
}

export async function addLineToCart(
  cartId: string,
  merchandiseId: string,
  quantity: number = 1
): Promise<Cart> {
  const response = await shopifyFetcher(ADD_LINE, {
    cartId,
    merchandiseId,
    quantity,
  })

  return response.cartLinesAdd.cart
}

export async function updateLineFromCart(
  cartId: string,
  lineId: string,
  merchandiseId: string,
  quantity: number
): Promise<Cart> {
  const response = await shopifyFetcher(UPDATE_LINE, {
    cartId,
    id: lineId,
    merchandiseId,
    quantity,
  })

  return response.cartLinesUpdate.cart
}

export async function removeLineFromCart(
  cartId: string,
  lineIds: string | string[]
): Promise<Cart> {
  const response = await shopifyFetcher(REMOVE_LINE, {
    cartId,
    lineIds,
  })

  return response.cartLinesRemove.cart
}
