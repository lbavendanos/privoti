import { cn } from 'lib/utils/helpers'
import Link from 'next/link'
import Paragraph from './Paragraph'

export default function ProductCard() {
  return (
    <Link href="/" className="flex flex-col">
      <div className="bg-gray-300 w-full h-[240px] sm:h-[300px]"></div>
      <div className={cn('flex flex-col my-2', 'tracking-tight text-xs')}>
        <Paragraph size="xs" weight="semibold">
          KALBARRI CORSET TOP WHITE
        </Paragraph>
        <Paragraph size="xs">$75.00</Paragraph>
      </div>
    </Link>
  )
}
