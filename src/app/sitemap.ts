import { gql } from 'lib/utils/graphql'
import { url } from 'lib/utils/url'
import { config } from 'lib/utils/helpers'
import { shopifyFetcher } from 'lib/shopify/utils'
import { MetadataRoute } from 'next'
import {
  PageConnection,
  ProductConnection,
  CollectionConnection,
} from 'lib/shopify/types'

const MAX_SITEMAPS = 250

const SITEMAP_QUERY = gql`
  query Sitemap($first: Int, $language: LanguageCode)
  @inContext(language: $language) {
    products(first: $first, query: "published_status:'online_store:visible'") {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
        title
        featuredImage {
          url
          altText
        }
      }
    }
    collections(
      first: $first
      query: "published_status:'online_store:visible'"
    ) {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
    pages(first: $first, query: "published_status:'published'") {
      nodes {
        updatedAt
        handle
        onlineStoreUrl
      }
    }
  }
`

interface SitemapResponse {
  products: ProductConnection
  collections: CollectionConnection
  pages: PageConnection
}

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const appLanguage = config<string>('app.language')
  const response = await shopifyFetcher<SitemapResponse>(SITEMAP_QUERY, {
    first: MAX_SITEMAPS,
    language: appLanguage,
  })

  const productsSitemap: MetadataRoute.Sitemap = response.products.nodes
    .filter((node) => node.onlineStoreUrl)
    .map((node) => ({
      url: url(`/products/${node.handle}`),
      lastModified: node.updatedAt,
    }))

  const collectionsSitemap: MetadataRoute.Sitemap = response.collections.nodes
    .filter((node) => node.onlineStoreUrl)
    .map((node) => ({
      url: url(`/collections/${node.handle}`),
      lastModified: node.updatedAt,
    }))

  const pagesSitemap: MetadataRoute.Sitemap = response.pages.nodes
    .filter((node) => node.onlineStoreUrl)
    .map((node) => ({
      url: url(node.handle),
      lastModified: node.updatedAt,
    }))

  const homeSitemap: MetadataRoute.Sitemap = [
    { url: url(), lastModified: new Date() },
  ]

  return [
    ...productsSitemap,
    ...collectionsSitemap,
    ...pagesSitemap,
    ...homeSitemap,
  ]
}
