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
      menuClassName="flex justify-between items-center"
      linkClassName={cn(
        'px-3 py-2',
        'font-normal hover:font-semibold text-sm uppercase tracking-tight'
      )}
    />
  )
}
