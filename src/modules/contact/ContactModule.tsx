import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import ContactForm from './components/ContactForm'

export default function ContactModule() {
  return (
    <Container className="my-6 md:my-10">
      <div className="flex flex-col w-full max-w-[600px] mx-auto space-y-4">
        <Heading as="h1" className="text-center">
          Contacto
        </Heading>
        <ContactForm />
      </div>
    </Container>
  )
}
