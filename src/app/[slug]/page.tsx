import { url } from 'lib/utils/url'
import { getProductCache, getProductSlugs } from 'lib/shopify/core/product'
import { Metadata } from 'next'
import ProductModule from '@/modules/product/ProductModule'

export const revalidate = 60

export async function generateStaticParams() {
  return getProductSlugs()
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { handle, title, description, images } = await getProductCache(
    params.slug
  )

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      url: url(handle),
      images: [
        {
          url: images?.edges?.at(0)?.node?.url || '',
          width: images?.edges?.at(0)?.node?.width,
          height: images?.edges?.at(0)?.node?.height,
        },
      ],
    },
  }
}

export default async function SlugPage({ params }: any) {
  /* @ts-expect-error Async Server Component */
  return <ProductModule slug={params.slug} />
}
