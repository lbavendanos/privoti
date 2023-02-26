'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalBody.tsx
import { cn } from 'lib/utils/helpers'

interface ModalBodyProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function ModalBody({ className, ...props }: ModalBodyProps) {
  return <div {...props} className={cn('modal-body', className)} />
}
