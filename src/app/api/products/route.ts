import { gql } from 'lib/utils/helpers'
import { shopifyFetch } from 'lib/utils/shopify'
import { getPlaiceholder } from 'plaiceholder'
import { NextResponse } from 'next/server'
import { Image, Images } from 'lib/types/image'
import { Product, Products } from 'lib/types/product'

export const GET_PRODUCTS_QUERY = gql`
  query GetProducts {
    products(first: 10, sortKey: CREATED_AT) {
      edges {
        node {
          handle
          id
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                altText
                id
                url(transform: { maxHeight: 600, maxWidth: 510 })
              }
            }
          }
        }
      }
    }
  }
`

export async function GET() {
  const response = await shopifyFetch(GET_PRODUCTS_QUERY)
  const edges: object[] = response.body.data.products.edges

  const products: Products = await Promise.all(
    edges.map(async ({ node }: any): Promise<Product> => {
      const images: Images = await Promise.all(
        node.images?.edges?.map(async ({ node }: any): Promise<Image> => {
          const { base64 } = await getPlaiceholder(node.url, { size: 10 })

          return {
            id: node.id,
            src: node.url,
            alt: node.altText,
            blurDataURL: base64,
          }
        })
      )

      return {
        id: node.id,
        url: node.handle,
        name: node.title,
        priceRange: node.priceRange,
        images,
      }
    })
  )

  return NextResponse.json({ data: products })
}
