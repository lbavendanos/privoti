'use client'

import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  active?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      active = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          'btn',
          variant === 'primary' && 'btn-primary',
          variant === 'secondary' && 'btn-secondary',
          variant === 'tertiary' && 'btn-tertiary',
          variant === 'light' && 'btn-light',
          variant === 'dark' && 'btn-dark',
          size === 'sm' && 'btn-sm',
          size === 'md' && 'btn-md',
          size === 'lg' && 'btn-lg',
          active && 'active',
          disabled && 'disabled',
          className
        )}
        disabled={disabled}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
