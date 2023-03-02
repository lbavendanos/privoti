import { cn } from 'lib/utils/helpers'
import BaseNavbarCartButton from './BaseNavbarCartButton'
import BaseNavbarSearchButton from './BaseNavbarSearchButton'

interface BaseNavbarOptionsProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export default function BaseNavbarOptions({
  className,
  ...props
}: BaseNavbarOptionsProps) {
  return (
    <div {...props} className={cn('flex space-x-4', className)}>
      <BaseNavbarSearchButton />
      <BaseNavbarCartButton />
    </div>
  )
}
