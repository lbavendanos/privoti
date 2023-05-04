import { Metadata } from 'next'
import CatalogModule from '@/modules/catalog/CatalogModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Catálogo' }
}

export default function CatalogPage() {
  return <CatalogModule />
}
