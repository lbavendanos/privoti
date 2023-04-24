import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface HeadingProps extends React.ComponentPropsWithRef<'h1'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = 'h1', ...props }, ref) => {
    const Component = as

    const headingClassName = 'uppercase font-semibold text-zinc-800'

    return (
      <Component
        {...props}
        ref={ref}
        className={cn(
          headingClassName,
          as === 'h1' && 'text-xl md:text-2xl',
          as === 'h2' && 'text-lg md:text-xl',
          as === 'h3' && 'text-base md:text-lg',
          as === 'h4' && 'text-sm md:text-base',
          as === 'h5' && 'text-xs md:text-sm',
          as === 'h6' && 'text-xs md:text-xs',
          className
        )}
      />
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
