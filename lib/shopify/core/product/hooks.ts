import { useShopifySWR } from 'lib/shopify/hooks'
import { GET_PRODUCTS } from './queries'
import { Products } from 'lib/shopify/types/product'
import { SWRConfiguration } from 'swr'

export function useGetProducts(
  query?: string,
  first: number = 10,
  config?: SWRConfiguration
) {
  return useShopifySWR<{ products: Products }>(
    query ? [GET_PRODUCTS, { query, first }] : null,
    config
  )
}
