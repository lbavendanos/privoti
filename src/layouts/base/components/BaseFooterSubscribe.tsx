import { KeyboardArrowRightIcon } from '@/common/components/Icons'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'
import FormControl from '@/common/components/FormControl'

export default function BaseFooterSubscribe() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 text-center">
      <Paragraph weight="medium">Subscribe to our emails</Paragraph>
      <div className="flex justify-center w-full">
        <FormControl
          id="email"
          type="email"
          name="email"
          placeholder="Enter email"
          className="shrink py-2 max-w-[350px] border-r-0"
        />
        <Button type="button">
          <KeyboardArrowRightIcon />
        </Button>
      </div>
      <Paragraph size="xs" weight="light">
        Stay informed of all the launches of our products.
      </Paragraph>
    </div>
  )
}
