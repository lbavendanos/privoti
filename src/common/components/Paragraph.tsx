import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface ParagraphProps extends React.ComponentPropsWithRef<'p'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold'
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size = 'md', weight = 'normal', ...props }, ref) => {
    const paragraphClassName = 'uppercase font-light tracking-tight'

    return (
      <p
        {...props}
        ref={ref}
        className={cn(
          paragraphClassName,
          size === 'xs' && 'text-xs',
          size === 'sm' && 'text-sm',
          size === 'md' && 'text-base',
          size === 'lg' && 'text-lg',
          size === 'xl' && 'text-xl',
          weight === 'light' && 'font-light',
          weight === 'normal' && 'font-normal',
          weight === 'medium' && 'font-medium',
          weight === 'semibold' && 'font-semibold',
          className
        )}
      />
    )
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph
