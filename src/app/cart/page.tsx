import { Metadata } from 'next'
import CartModule from '@/modules/cart/CartModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Carrito' }
}

export default function CartPage() {
  return <CartModule />
}
