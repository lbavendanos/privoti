import { cache } from 'react'
import { shopifyFetcher } from 'lib/shopify/utils'
import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_SLUGS,
  GET_PRODUCT_RELATED_RECOMMENDATIONS,
} from './queries'
import { Product, Products } from 'lib/shopify/types/product'

export async function getProductSlugs(
  first: number = 10
): Promise<{ slug: string }[]> {
  const response = await shopifyFetcher(GET_PRODUCT_SLUGS, { first })
  const edges: object[] = response.products.edges

  return edges.map(({ node }: any) => ({ slug: node.handle }))
}

export async function getProducts(
  query?: string,
  first: number = 10
): Promise<Products> {
  const response = await shopifyFetcher<{ products: Products }>(GET_PRODUCTS, {
    query,
    first,
  })

  return response.products
}

export async function getProduct(handle: string): Promise<Product> {
  const response = await shopifyFetcher<{ product: Product }>(GET_PRODUCT, {
    handle,
  })

  return response.product
}

export async function getProductRelatedRecommendations(productId: string) {
  const response = await shopifyFetcher<{ productRecommendations: Product[] }>(
    GET_PRODUCT_RELATED_RECOMMENDATIONS,
    {
      productId,
    }
  )

  return response.productRecommendations
}

export const getProductsCache = cache(getProducts)
export const getProductCache = cache(getProduct)
