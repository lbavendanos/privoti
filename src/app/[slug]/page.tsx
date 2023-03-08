import { url } from 'lib/utils/url'
import { fetcher } from 'lib/utils/http'
import { Product } from 'lib/types/product'
import { Metadata } from 'next'
import ProductModule from '@/modules/product/ProductModule'

interface Slug {
  slug?: string
}

type Slugs = Slug[]

interface SlugsResponse {
  data: Slugs
}

interface ProductResponse {
  data: Product
}

export async function generateStaticParams() {
  const { data: slugs } = await fetcher<SlugsResponse>(url('/api/slugs'))

  return slugs
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params
  const { data: product } = await fetcher<ProductResponse>(
    url(`/api/products/${slug}`)
  )

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: 'article',
      url: url(product.url),
      images: [
        {
          url: product.images?.at(0)?.src || '',
          width: 510,
          height: 600,
        },
      ],
    },
  }
}

export default async function ProductPage({ params }: any) {
  /* @ts-expect-error Async Server Component */
  return <ProductModule slug={params.slug} />
}
