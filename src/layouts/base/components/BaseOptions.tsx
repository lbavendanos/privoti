import { cn } from 'lib/utils/helpers'
import { SearchIcon, ShoppingIcon } from '@/common/components/Icons'

interface BaseOptionsProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function BaseOptions({ className, ...props }: BaseOptionsProps) {
  return (
    <div {...props} className={cn('flex space-x-4', className)}>
      <a href="#" className="text-zinc-800">
        <SearchIcon className="w-6 h-6" />
      </a>
      <a href="#" className="text-zinc-800">
        <ShoppingIcon className="w-6 h-6" />
      </a>
    </div>
  )
}
