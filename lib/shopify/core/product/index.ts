import { shopifyFetcher } from 'lib/shopify/utils'
import { GET_PRODUCT, GET_PRODUCTS, GET_PRODUCT_SLUGS } from './queries'
import { Product, Products } from 'lib/shopify/types/product'
import { cache } from 'react'

export async function getProductSlugs(): Promise<{ slug: string }[]> {
  const response = await shopifyFetcher(GET_PRODUCT_SLUGS)
  const edges: object[] = response.products.edges

  return edges.map(({ node }: any) => ({ slug: node.handle }))
}

export async function getProducts(): Promise<Products> {
  const response = await shopifyFetcher<{ products: Products }>(GET_PRODUCTS)

  return response.products

  // const edges: object[] = response.products.edges
  //
  // const products: Products = await Promise.all(
  //   edges.map(async ({ node }: any): Promise<Product> => {
  //     const images: Images = await Promise.all(
  //       node.images?.edges?.map(async ({ node }: any): Promise<Image> => {
  //         const { base64 } = await getPlaiceholder(node.url, { size: 10 })
  //
  //         return {
  //           id: node.id,
  //           src: node.url,
  //           alt: node.altText,
  //           blurDataURL: base64,
  //         }
  //       })
  //     )
  //
  //     return {
  //       id: node.id,
  //       url: node.handle,
  //       name: node.title,
  //       priceRange: node.priceRange,
  //       images,
  //     }
  //   })
  // )
  //
  // return products
}

export async function getProduct(slug: string): Promise<Product> {
  const response = await shopifyFetcher<{ product: Product }>(GET_PRODUCT, {
    handle: slug,
  })

  return response.product

  // const node: any = response.product
  //
  // const images: Images = await Promise.all(
  //   node.images?.edges?.map(async ({ node }: any): Promise<Image> => {
  //     const { base64 } = await getPlaiceholder(node.url, { size: 10 })
  //
  //     return {
  //       id: node.id,
  //       src: node.url,
  //       alt: node.altText,
  //       blurDataURL: base64,
  //     }
  //   })
  // )
  //
  // const product: Product = {
  //   id: node.id,
  //   url: node.handle,
  //   name: node.title,
  //   description: node.description,
  //   priceRange: node.priceRange,
  //   images,
  //   variants: node.variants?.edges?.map(({ node }: any) => {
  //     const quantity: number = node.quantityAvailable
  //     const name: string = node.title
  //     const price: Price = node.price
  //     const id: string = node.id
  //     const shortId: string = id.replace('gid://shopify/ProductVariant/', '')
  //
  //     let shortName = ''
  //
  //     if (name === 'Extra small') shortName = 'xs'
  //     if (name === 'Small') shortName = 's'
  //     if (name === 'Medium') shortName = 'm'
  //     if (name === 'Large') shortName = 'l'
  //     if (name === 'Extra large') shortName = 'xl'
  //
  //     return {
  //       id,
  //       shortId,
  //       name,
  //       shortName,
  //       quantity,
  //       price,
  //     }
  //   }),
  // }
  //
  // return product
}

export const getProductsCache = cache(getProducts)
export const getProductCache = cache(getProduct)
