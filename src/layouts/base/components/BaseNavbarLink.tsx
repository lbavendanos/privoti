import { cn } from 'lib/utils/helpers'
import Link, { LinkProps } from 'next/link'

interface BaseNavbarLinkProps extends LinkProps {
  children?: React.ReactNode
}

export default function BaseNavbarLink({
  href,
  ...props
}: BaseNavbarLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cn(
        'px-3 py-2',
        'font-normal text-zinc-900 hover:font-semibold text-sm uppercase tracking-tight'
      )}
    />
  )
}
