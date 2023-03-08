import { gql } from 'lib/utils/helpers'
import { shopifyFetch } from 'lib/utils/shopify'
import { NextResponse } from 'next/server'

export const GET_PRODUCT_SLUGS_QUERY = gql`
  query GetProductSlugs {
    products(first: 10, sortKey: CREATED_AT) {
      edges {
        node {
          handle
        }
      }
    }
  }
`

export async function GET() {
  const response = await shopifyFetch(GET_PRODUCT_SLUGS_QUERY)
  const edges: object[] = response.body.data.products.edges
  const slugs = edges.map(({ node }: any) => ({ slug: node.handle }))

  return NextResponse.json({ data: slugs })
}
