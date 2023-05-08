import { cn } from 'lib/utils/helpers'
import BaseNavbar, { BaseNavbarProps } from './BaseNavbar'

interface BaseNavbarDesktopProps extends BaseNavbarProps {}

export default function BaseNavbarDesktop({
  className,
  ...props
}: BaseNavbarDesktopProps) {
  return (
    <BaseNavbar
      {...props}
      className={cn('w-full py-4', className)}
      menuClassName="flex flex-row"
      linkClassName={cn('px-3 py-4', 'uppercase font-medium text-sm')}
    />
  )
}
