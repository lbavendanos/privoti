'use client'

import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    const btnClassName = [
      'inline-block align-middle',
      'cursor-pointer select-none outline-none shadow-none',
      'uppercase font-normal tracking-tight text-center no-underline',
      'border border-zinc-800 rounded-none',
    ]

    const btnSizeSmClassName = ['px-2 py-1', 'text-xs']
    const btnSizeMdClassName = ['px-2.5 py-1.5', 'text-sm']
    const btnSizeLgClassName = ['px-3 py-2', 'text-base']

    const btnPrimaryClassName =
      'bg-primary-200 hover:bg-primary-300 active:bg-primary-300 focus-visible:bg-primary-300'

    const btnSecondaryClassName =
      'bg-secondary-200 hover:bg-secondary-300 active:bg-secondary-300 focus-visible:bg-secondary-300'

    const btnTertiaryClassName =
      'bg-tertiary-200 hover:bg-tertiary-300 active:bg-tertiary-300 focus-visible:bg-tertiary-300'

    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          btnClassName,
          variant === 'primary' && btnPrimaryClassName,
          variant === 'secondary' && btnSecondaryClassName,
          variant === 'tertiary' && btnTertiaryClassName,
          size === 'sm' && btnSizeSmClassName,
          size === 'md' && btnSizeMdClassName,
          size === 'lg' && btnSizeLgClassName,
          className
        )}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
