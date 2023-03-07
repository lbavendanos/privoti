import { getProduct, getProductSlugs } from 'lib/graphql/product'
import { Metadata } from 'next'
import ProductModule from '@/modules/product/ProductModule'
import { url } from 'lib/utils/url'

export async function generateStaticParams() {
  return getProductSlugs()
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const product = await getProduct(params.slug)

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
  /* @ts-expect-error Server Component */
  return <ProductModule slug={params.slug} />
}
