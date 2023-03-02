import { Metadata } from 'next'
import CatalogModule from '@/modules/catalog/CatalogModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Catalog' }
}

export default function CatalogPage() {
  return <CatalogModule />
}
