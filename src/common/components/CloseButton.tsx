'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CloseButton.tsx
import { cn } from 'lib/utils/helpers'
import React from 'react'

export type CloseButtonVariant = 'white' | string

export interface CloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CloseButtonVariant
}

const defaultProps = {
  'aria-label': 'Close',
}

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'btn-close',
        variant === 'white' && 'btn-close-white',
        className
      )}
      {...props}
    />
  )
)

CloseButton.displayName = 'CloseButton'
CloseButton.defaultProps = defaultProps

export default CloseButton
