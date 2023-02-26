import { cn } from 'lib/utils/helpers'
import Link, { LinkProps } from 'next/link'

interface BaseNavbarLinkProps extends LinkProps {
  children?: React.ReactNode
  className?: string
}

export default function BaseNavbarLink({
  href,
  className,
  ...props
}: BaseNavbarLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cn(
        'font-normal hover:font-semibold text-sm uppercase tracking-tight',
        className
      )}
    />
  )
}
