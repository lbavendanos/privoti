import { cn } from 'lib/utils/helpers'
import BaseNavbar from './BaseNavbar'

interface BaseNavbarDesktopProps
  extends React.ComponentPropsWithoutRef<'nav'> {}

export default function BaseNavbarDesktop({
  className,
  ...props
}: BaseNavbarDesktopProps) {
  return (
    <BaseNavbar
      {...props}
      className={cn('w-full py-4', className)}
      menuClassName="flex justify-between items-center"
      linkClassName="px-3 py-2"
    />
  )
}
