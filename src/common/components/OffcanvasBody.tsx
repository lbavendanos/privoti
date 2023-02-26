'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/OffcanvasBody.tsx
import { cn } from 'lib/utils/helpers'

interface OffcanvasBodyProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function OffcanvasBody({
  className,
  ...props
}: OffcanvasBodyProps) {
  return <div {...props} className={cn('offcanvas-body', className)}></div>
}
