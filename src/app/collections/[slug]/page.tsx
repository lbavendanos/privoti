import { url } from 'lib/utils/url'
import { Metadata } from 'next'
import CollectionModule from '@/modules/collection/CollectionModule'

export const revalidate = 60

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const title = 'Coleccion'
  const description = 'Pagina de Coleccion'
  const handle = params.slug

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      url: url(handle),
    },
  }
}

export default function CollectionPage({ params }: any) {
  return <CollectionModule slug={params.slug} />
}
