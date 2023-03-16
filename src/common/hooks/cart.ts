import { GET_CART } from 'lib/graphql/queries/cart'
import { Cart } from 'lib/types/cart'
import { useShopifySWR } from 'lib/utils/swr'

export function useGetCart(id?: string) {
  return useShopifySWR<{ cart: Cart }>(id ? [GET_CART, { id }] : null)
}
