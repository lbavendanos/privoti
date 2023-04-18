import { url } from 'lib/utils/url'
import { config } from 'lib/utils/helpers'
import { getProductCache } from 'lib/shopify/core/product'
import { getShortVariantId } from 'lib/shopify/core/variant'
import { Product, WithContext } from 'schema-dts'

interface ProductJsonLdProps {
  slug: string
}

export default async function ProductJsonLd({ slug }: ProductJsonLdProps) {
  const { handle, title, description, images, variants } =
    await getProductCache(slug)

  const appName = config('app.name')

  const jsonLd: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    url: url(handle),
    image: [images?.edges?.at(0)?.node?.url!],
    description: description,
    brand: { '@type': 'Brand', name: appName },
    offers: variants?.edges?.map(({ node }) => ({
      '@type': 'Offer',
      availability: node?.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      price: Number(node?.price?.amount),
      priceCurrency: node?.price?.currencyCode,
      url: url(`${handle}?variant=${getShortVariantId(node?.id!)}`),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
