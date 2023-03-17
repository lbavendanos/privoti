import { config } from 'lib/utils/helpers'
import { gqlFetcher } from 'lib/utils/http'

export async function shopifyFetcher<T = any>(
  query: string,
  variables = {}
): Promise<T> {
  const isServer = typeof window === 'undefined'

  const domain = config('shopify.domain')
  const apiVersion = config('shopify.api_version')
  const privateToken = config('shopify.private_token')
  const publicToken = config('shopify.public_token')

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`
  const token = isServer ? privateToken : publicToken
  const tokenHeader = isServer
    ? 'Shopify-Storefront-Private-Token'
    : 'X-Shopify-Storefront-Access-Token'

  const headers = {
    'Content-Type': 'application/json',
    'X-SDK-Variant-Source': 'react',
    'X-SDK-Version': apiVersion,
    [tokenHeader]: token,
  }

  return gqlFetcher<T>(endpoint, query, variables, { headers })
}
