import { gql } from 'lib/utils/helpers'
import { shopifyFetch } from 'lib/utils/shopify'
import { getPlaiceholder } from 'plaiceholder'
import { Image, Images } from 'lib/types/image'
import { Product, Products } from 'lib/types/product'

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

export async function getProductSlugs(): Promise<{ slug: string }[]> {
  const response = await shopifyFetch(GET_PRODUCT_SLUGS_QUERY)
  const edges: object[] = response.body.data.products.edges

  return edges.map(({ node }: any) => ({ slug: node.handle }))
}

export async function getProducts(): Promise<Products> {
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

  return products
}

export async function getProduct(slug: string): Promise<Product> {
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

  return product
}