import useBaseSWR, { Key, SWRConfiguration } from 'swr'
import { shopifyFetcher } from 'lib/shopify/utils'
import { GET_CART } from './queries'
import { Cart } from 'lib/shopify/types/cart'

export const useShopifySWR = <Data = any, Error = any>(
  key: Key,
  config?: SWRConfiguration
) =>
  useBaseSWR<Data, Error>(
    key,
    ([query, variables]) => shopifyFetcher(query, variables),
    config
  )

export function useGetCart(id?: string) {
  return useShopifySWR<{ cart: Cart }>(id ? [GET_CART, { id }] : null)
}
