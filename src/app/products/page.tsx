import { Metadata } from 'next'
import ProductsModule from '@/modules/products/ProductsModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Productos' }
}

export default function ProductsPage() {
  return <ProductsModule />
}
