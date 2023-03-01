import { cn } from 'lib/utils/helpers'
import Link from 'next/link'

export default function ProductCard() {
  return (
    <Link href="/" className="flex flex-col">
      <div className="bg-gray-300 w-full h-[240px] sm:h-[300px] md:h-[350px]"></div>
      <div className={cn('flex flex-col my-2', 'tracking-tight text-xs')}>
        <p className="font-semibold">KALBARRI CORSET TOP WHITE</p>
        <p className="font-normal">$75.00</p>
      </div>
    </Link>
  )
}
