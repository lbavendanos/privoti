'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalDialog.tsx
import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface ModalDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  // BsPrefixProps {
  size?: 'sm' | 'lg' | 'xl'
  fullscreen?:
    | true
    | string
    | 'sm-down'
    | 'md-down'
    | 'lg-down'
    | 'xl-down'
    | 'xxl-down'
  centered?: boolean
  scrollable?: boolean
  contentClassName?: string
}

const ModalDialog = React.forwardRef<HTMLDivElement, ModalDialogProps>(
  (
    {
      // bsPrefix,
      className,
      contentClassName,
      centered,
      size,
      fullscreen,
      children,
      scrollable,
      ...props
    }: ModalDialogProps,
    ref
  ) => {
    // bsPrefix = useBootstrapPrefix(bsPrefix, 'modal')
    const dialogClass = 'modal-dialog'

    const fullScreenClass =
      typeof fullscreen === 'string'
        ? `modal-fullscreen-${fullscreen}`
        : 'modal-fullscreen'

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          dialogClass,
          className,
          size === 'sm' && 'modal-sm',
          size === 'lg' && 'modal-lg',
          size === 'xl' && 'modal-xl',
          centered && 'modal-dialog-centered',
          scrollable && 'modal-dialog-scrollable',
          fullscreen && fullScreenClass
        )}
      >
        <div className={cn('modal-content', contentClassName)}>{children}</div>
      </div>
    )
  }
)

ModalDialog.displayName = 'ModalDialog'

export default ModalDialog
