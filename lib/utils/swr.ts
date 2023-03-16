import useBaseSWR, { Key, SWRConfiguration } from 'swr'
import { shopifyFetcher } from './shopify'

export const useShopifySWR = <Data = any, Error = any>(
  key: Key,
  config?: SWRConfiguration
) =>
  useBaseSWR<Data, Error>(
    key,
    ([query, variables]) => shopifyFetcher(query, variables),
    config
  )
