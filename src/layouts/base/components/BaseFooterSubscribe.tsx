import { cn } from 'lib/utils/helpers'
import { KeyboardArrowRightIcon } from '@/common/components/Icons'
import FormControl from '@/common/components/FormControl'
import Button from '@/common/components/Button'

export default function BaseFooterSubscribe() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 text-center">
      <p className="font-medium tracking-tight uppercase">
        Subscribe to our emails
      </p>
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
      <p className="text-xs uppercase font-light">
        Stay informed of all the launches of our products.
      </p>
    </div>
  )
}
