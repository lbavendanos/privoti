import Link, { LinkProps } from 'next/link'

interface BaseNavbarLinkProps extends LinkProps {
  children?: React.ReactNode
  className?: string
}

export default function BaseNavbarLink({
  href,
  ...props
}: BaseNavbarLinkProps) {
  return <Link {...props} href={href} />
}
