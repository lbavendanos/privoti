import { useShopifySWR } from 'lib/shopify/hooks'
import { GET_CART } from './queries'
import { Cart } from 'lib/shopify/types/cart'

export function useGetCart(id?: string) {
  return useShopifySWR<{ cart: Cart }>(id ? [GET_CART, { id }] : null)
}
