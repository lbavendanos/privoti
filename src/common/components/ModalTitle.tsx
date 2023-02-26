'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalTitle.tsx
import { cn } from 'lib/utils/helpers'

interface ModalTitleProps extends React.ComponentPropsWithoutRef<'h4'> {}

export default function ModalTitle({ className, ...props }: ModalTitleProps) {
  return <h4 {...props} className={cn('modal-title', className)} />
}
