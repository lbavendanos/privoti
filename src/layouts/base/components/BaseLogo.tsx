import { cn, config } from 'lib/utils/helpers'
import Link from 'next/link'

interface BaseLogoProps extends React.ComponentPropsWithoutRef<'a'> {}

export default function BaseLogo({ className, ...props }: BaseLogoProps) {
  const appName = config<string>('app.name')

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
      {appName}
    </Link>
  )
}
