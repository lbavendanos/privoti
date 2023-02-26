'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalFooter.tsx
import { cn } from 'lib/utils/helpers'

interface ModalFooterProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function ModalFooter({ className, ...props }: ModalFooterProps) {
  return <div {...props} className={cn('modal-footer', className)} />
}
