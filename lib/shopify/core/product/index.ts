import { cache } from 'react'
import { shopifyFetcher } from 'lib/shopify/utils'
import { GET_PRODUCT, GET_PRODUCTS, GET_PRODUCT_SLUGS } from './queries'
import { Product, Products } from 'lib/shopify/types/product'

export async function getProductSlugs(): Promise<{ slug: string }[]> {
  const response = await shopifyFetcher(GET_PRODUCT_SLUGS)
  const edges: object[] = response.products.edges

  return edges.map(({ node }: any) => ({ slug: node.handle }))
}

export async function getProducts(): Promise<Products> {
  const response = await shopifyFetcher<{ products: Products }>(GET_PRODUCTS)

  return response.products
}

export async function getProduct(slug: string): Promise<Product> {
  const response = await shopifyFetcher<{ product: Product }>(GET_PRODUCT, {
    handle: slug,
  })

  return response.product
}

export const getProductsCache = cache(getProducts)
export const getProductCache = cache(getProduct)
