import { cn } from 'lib/utils/helpers'
import BaseNavbarCart from './BaseNavbarCart'
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
      <BaseNavbarCart />
    </div>
  )
}
