import { cn } from 'lib/utils/helpers'
import { KeyboardArrowRightIcon } from '@/common/components/Icons'
import FormControl from '@/common/components/FormControl'

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
          className="shrink py-2 max-w-[350px]"
        />
        <button
          className={cn(
            'grow-0 shrink-0',
            'w-10 h-auto',
            'flex justify-center items-center',
            'text-white bg-zinc-800'
          )}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
      <p className="text-xs uppercase font-light">
        Stay informed of all the launches of our products.
      </p>
    </div>
  )
}
