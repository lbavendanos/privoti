import { Metadata } from 'next'
import ProductModule from '@/modules/product/ProductModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Product name' }
}

export async function generateStaticParams() {
  return []
}

export default async function ProductPage() {
  return <ProductModule />
}
