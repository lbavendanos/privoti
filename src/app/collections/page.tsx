import { Metadata } from 'next'
import CollectionsModule from '@/modules/collections/CollectionsModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Colecciones' }
}

export default function CollectionsPage() {
  return <CollectionsModule />
}
