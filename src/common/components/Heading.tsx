import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface HeadingProps extends React.ComponentPropsWithRef<'h1'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = 'h1', ...props }, ref) => {
    const Component = as

    const headingClassName =
      'uppercase font-semibold tracking-tight text-zinc-800'

    return (
      <Component
        {...props}
        ref={ref}
        className={cn(
          headingClassName,
          as === 'h1' && 'text-2xl md:text-3xl',
          as === 'h2' && 'text-xl md:text-2xl',
          as === 'h3' && 'text-lg md:text-xl',
          as === 'h4' && 'text-base md:text-lg',
          as === 'h5' && 'text-sm md:text-base',
          as === 'h6' && 'text-xs md:text-sm',
          className
        )}
      />
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
