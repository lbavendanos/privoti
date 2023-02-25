import { cn, config } from 'lib/utils/helpers'
import Link from 'next/link'

export default function BaseLogo() {
  const appName = config('app.name')

  return (
    <Link
      href="/"
      className={cn(
        'text-xl uppercase tracking-tight font-normal',
        'md:text-2xl'
      )}
    >
      {appName}
    </Link>
  )
}
