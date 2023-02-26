import { cn } from 'lib/utils/helpers'
import { ShoppingIcon } from '@/common/components/Icons'
import BaseNavbarSearch from './BaseNavbarSearch'

interface BaseNavbarOptionsProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export default function BaseNavbarOptions({
  className,
  ...props
}: BaseNavbarOptionsProps) {
  return (
    <div {...props} className={cn('flex space-x-4', className)}>
      <BaseNavbarSearch />
      <button type="button" className="text-zinc-800">
        <ShoppingIcon className="w-6 h-6" />
      </button>
    </div>
  )
}
