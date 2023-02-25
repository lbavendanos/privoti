import { cn } from 'lib/utils/helpers'
import BaseNavbarLink from './BaseNavbarLink'

interface BaseNavbarDesktopProps
  extends React.ComponentPropsWithoutRef<'nav'> {}

export default function BaseNavbarDesktop({
  className,
  ...props
}: BaseNavbarDesktopProps) {
  return (
    <nav {...props} className={cn('w-full py-4', className)}>
      <ul className="flex justify-between items-center">
        <li>
          <BaseNavbarLink href="/">Home</BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/catalog">Catalog</BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/contact">Contact</BaseNavbarLink>
        </li>
      </ul>
    </nav>
  )
}
