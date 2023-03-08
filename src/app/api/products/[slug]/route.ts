import { gql } from 'lib/utils/helpers'
import { shopifyFetch } from 'lib/utils/shopify'
import { getPlaiceholder } from 'plaiceholder'
import { Product } from 'lib/types/product'
import { NextResponse } from 'next/server'
import { Image, Images } from 'lib/types/image'

export const GET_PRODUCT_QUERY = gql`
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      handle
      id
      description
      title
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            altText
            url(transform: { maxHeight: 600, maxWidth: 510 })
            id
          }
        }
      }
    }
  }
`

export async function GET(_: Request, { params }: any) {
  const { slug } = params
  const response = await shopifyFetch(GET_PRODUCT_QUERY, { handle: slug })
  const node: any = response.body.data.product

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

  const product: Product = {
    id: node.id,
    url: node.handle,
    name: node.title,
    description: node.description,
    priceRange: node.priceRange,
    images,
  }

  return NextResponse.json({ data: product })
}
