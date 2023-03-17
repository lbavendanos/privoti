import { GET_CART } from '../queries/cart'
import { useShopifySWR } from 'lib/utils/swr'
import { Cart } from 'lib/types/cart'

export function useGetCart(id?: string) {
  return useShopifySWR<{ cart: Cart }>(id ? [GET_CART, { id }] : null)
}
