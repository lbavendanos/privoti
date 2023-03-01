import { cn } from 'lib/utils/helpers'
import Link from 'next/link'

interface BaseLogoProps extends React.ComponentPropsWithoutRef<'a'> {}

export default function BaseLogo({ className, ...props }: BaseLogoProps) {
  return (
    <Link
      {...props}
      href="/"
      className={cn(
        'text-xl uppercase tracking-tight font-medium',
        'md:text-2xl',
        className
      )}
    >
      <span className="text-primary-400">PRI</span>
      <span className="text-secondary-400">VO</span>
      <span className="text-tertiary-400">TI</span>
    </Link>
  )
}
