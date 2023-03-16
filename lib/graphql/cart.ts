import { ADD_LINE_TO_CART, CREATE_CART, REMOVE_LINE } from './queries/cart'
import { shopifyFetcher } from 'lib/utils/shopify'
import { Cart } from 'lib/types/cart'

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
  const response = await shopifyFetcher(ADD_LINE_TO_CART, {
    cartId,
    merchandiseId,
    quantity,
  })

  return response.cartLinesAdd.cart
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
