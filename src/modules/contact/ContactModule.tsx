import Button from '@/common/components/Button'
import Container from '@/common/components/Container'
import FormLabel from '@/common/components/FormLabel'
import FormControl from '@/common/components/FormControl'

export default function ContactModule() {
  return (
    <Container className="my-10">
      <div className="flex flex-col w-full max-w-[600px] mx-auto space-y-4">
        <h1 className="uppercase font-semibold tracking-tight text-xl md:text-2xl text-center">
          Contact
        </h1>
        <form className="flex flex-col items-center space-y-3 border border-zinc-800 p-4">
          <p className="uppercase font-light text-sm tracking-tight frac">
            If you have any questions, please write us a message and we will
            answer you as soon as possible.
          </p>
          <div className="flex flex-col space-y-1 w-full">
            <FormLabel htmlFor="name">Name *</FormLabel>
            <FormControl id="name" type="text" name="name" />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <FormLabel htmlFor="email">Email *</FormLabel>
            <FormControl id="email" type="email" name="email" />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <FormLabel htmlFor="phone">Phone *</FormLabel>
            <FormControl id="phone" type="tel" name="phone" />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <FormLabel htmlFor="message">Message *</FormLabel>
            <FormControl id="message" name="message" rows={10} multiline />
          </div>
          <Button type="submit" className="w-40">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}
