import { config } from 'lib/utils/helpers'
import Link from 'next/link'

export default function BaseLogo() {
  const appName = config('app.name')

  return (
    <Link
      href="/"
      className="text-zinc-900 text-2xl uppercase font-bold tracking-tight"
    >
      {appName}
    </Link>
  )
}
