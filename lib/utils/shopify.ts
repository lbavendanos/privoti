import { config } from './helpers'

export async function shopifyFetch(query: string, variables = {}) {
  const domain = config('shopify.domain')
  const apiVersion = config('shopify.api_version')
  const privateToken = config('shopify.private_token')
  const publicToken = config('shopify.public_token')

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`
  const token = typeof window === 'undefined' ? privateToken : publicToken

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-SDK-Variant-Source': 'react',
        'X-SDK-Version': apiVersion,
        'Shopify-Storefront-Private-Token': token,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    })

    return {
      status: response.status,
      body: await response.json(),
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      status: 500,
      error: 'Error receiving data',
    }
  }
}
