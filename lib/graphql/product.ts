import { gql } from 'lib/utils/helpers'
import { cache } from 'react'
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
      title
      description
      availableForSale
      totalInventory
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
      variants(first: 10) {
        edges {
          node {
            title
            id
            currentlyNotInStock
            quantityAvailable
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

export const getProducts = cache(async (): Promise<Products> => {
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
})

export const getProduct = cache(async (slug: string): Promise<Product> => {
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
    variants: node.variants?.edges?.map(({ node }: any) => {
      const quantity = node.quantityAvailable
      const name = node.title
      const id = (node.id as string).replace(
        'gid://shopify/ProductVariant/',
        ''
      )

      let short = ''

      if (name === 'Extra small') short = 'xs'
      if (name === 'Small') short = 's'
      if (name === 'Medium') short = 'm'
      if (name === 'Large') short = 'l'
      if (name === 'Extra large') short = 'xl'

      return {
        id,
        name,
        short,
        quantity,
      }
    }),
  }

  return product
})
