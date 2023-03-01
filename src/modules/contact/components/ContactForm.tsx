import Button from '@/common/components/Button'
import FormLabel from '@/common/components/FormLabel'
import FormControl from '@/common/components/FormControl'
import Paragraph from '@/common/components/Paragraph'

export default function ContactForm() {
  return (
    <form className="flex flex-col items-center space-y-3 border border-zinc-800 p-4">
      <Paragraph size="sm">
        If you have any questions, please write us a message and we will answer
        you as soon as possible.
      </Paragraph>
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
  )
}
