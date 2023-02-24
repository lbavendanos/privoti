import { cn } from 'lib/utils/helpers'
import { KeyboardArrowRightIcon } from '@/common/components/Icons'

export default function BaseFooterSubscribe() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="font-medium tracking-tight uppercase">
        Subscribe to our emails
      </p>
      <div className="relative w-full flex border border-zinc-800 max-w-[400px] text-xs">
        <input
          className="w-full h-8 px-3 outline-none placeholder:uppercase placeholder:tracking-tight text-zinc-500"
          placeholder="Enter phone number"
        />
        <button
          className={cn(
            'absolute right-0 w-8 h-8',
            'flex justify-center items-center',
            'text-white bg-zinc-800 '
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
