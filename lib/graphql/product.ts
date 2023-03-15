import { gql } from 'lib/utils/graphql'
import { cache } from 'react'
import { shopifyFetcher } from 'lib/utils/shopify'
import { getPlaiceholder } from 'plaiceholder'
import { Price } from 'lib/types/price'
import { Image, Images } from 'lib/types/image'
import { Product, Products } from 'lib/types/product'

export const GET_PRODUCT_SLUGS = gql`
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

export const GET_PRODUCTS = gql`
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

export const GET_PRODUCT = gql`
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
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

export async function getProductSlugs(): Promise<{ slug: string }[]> {
  const response = await shopifyFetcher(GET_PRODUCT_SLUGS)
  const edges: object[] = response.products.edges

  return edges.map(({ node }: any) => ({ slug: node.handle }))
}

export const getProducts = cache(async (): Promise<Products> => {
  const response = await shopifyFetcher(GET_PRODUCTS)
  const edges: object[] = response.products.edges

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
  const response = await shopifyFetcher(GET_PRODUCT, { handle: slug })
  const node: any = response.product

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
      const quantity: number = node.quantityAvailable
      const name: string = node.title
      const price: Price = node.price
      const id: string = node.id
      const shortId: string = id.replace('gid://shopify/ProductVariant/', '')

      let shortName = ''

      if (name === 'Extra small') shortName = 'xs'
      if (name === 'Small') shortName = 's'
      if (name === 'Medium') shortName = 'm'
      if (name === 'Large') shortName = 'l'
      if (name === 'Extra large') shortName = 'xl'

      return {
        id,
        shortId,
        name,
        shortName,
        quantity,
        price,
      }
    }),
  }

  return product
})
