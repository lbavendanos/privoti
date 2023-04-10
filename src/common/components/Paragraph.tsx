import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface ParagraphProps extends React.ComponentPropsWithRef<'p'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  uppercase?: boolean
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size = 'md', weight = 'normal', uppercase, className, ...props }, ref) => {
    return (
      <p
        {...props}
        ref={ref}
        className={cn(
          'tracking-tight',
          size === 'xs' && 'text-xs',
          size === 'sm' && 'text-sm',
          size === 'md' && 'text-base',
          size === 'lg' && 'text-lg',
          size === 'xl' && 'text-xl',
          weight === 'light' && 'font-light',
          weight === 'normal' && 'font-normal',
          weight === 'medium' && 'font-medium',
          weight === 'semibold' && 'font-semibold',
          weight === 'bold' && 'font-bold',
          uppercase && 'uppercase',
          className
        )}
      />
    )
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph
