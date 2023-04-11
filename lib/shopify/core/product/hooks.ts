import { useShopifySWR } from 'lib/shopify/hooks'
import { GET_PRODUCTS, GET_PRODUCT_RELATED_RECOMMENDATIONS } from './queries'
import { Product, Products } from 'lib/shopify/types/product'
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

export function useGetProductRelatedRecommendations(
  productId: string,
  config?: SWRConfiguration
) {
  return useShopifySWR<{ productRecommendations: Product[] }>(
    [GET_PRODUCT_RELATED_RECOMMENDATIONS, { productId }],
    config
  )
}
