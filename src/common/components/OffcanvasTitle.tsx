'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/OffcanvasTitle.tsx
import { cn } from 'lib/utils/helpers'

interface OffcanvasTitleProps extends React.ComponentPropsWithoutRef<'h5'> {}

export default function OffcanvasTitle({
  className,
  ...props
}: OffcanvasTitleProps) {
  return <h5 {...props} className={cn('offcanvas-title', className)} />
}
