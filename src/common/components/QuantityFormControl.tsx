import { cn } from 'lib/utils/helpers'
import { LineIcon, PlusIcon } from './Icons'
import Button from './Button'

export interface QuantityFormControlProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export default function QuantityFormControl({
  value,
  className,
  ...props
}: QuantityFormControlProps) {
  return (
    <div {...props} className={cn('inline-block', className)}>
      <Button variant="secondary" size="sm" className="!p-2">
        <LineIcon className="w-3 h-3" />
      </Button>
      <div className="w-[30px] border-y border-zinc-800 p-1.5 text-xs text-center inline-block align-middle">
        <span>{value}</span>
      </div>
      <Button variant="secondary" size="sm" className="!p-2">
        <PlusIcon className="w-3 h-3" />
      </Button>
    </div>
  )
}
