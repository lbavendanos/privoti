import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import ContactForm from './components/ContactForm'

export default function ContactModule() {
  return (
    <Container className="my-10">
      <div className="flex flex-col w-full max-w-[600px] mx-auto space-y-4">
        <Heading as="h2" className="text-center">
          Contact
        </Heading>
        <ContactForm />
      </div>
    </Container>
  )
}
