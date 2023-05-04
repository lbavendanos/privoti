import { Metadata } from 'next'
import ContactModule from '@/modules/contact/ContactModule'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Contacto' }
}

export default function ContactPage() {
  return <ContactModule />
}
