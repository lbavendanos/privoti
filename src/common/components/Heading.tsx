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

    const h1ClassName = 'text-2xl md:text-3xl'
    const h2ClassName = 'text-xl md:text-2xl'
    const h3ClassName = 'text-lg md:text-xl'
    const h4ClassName = 'text-base md:text-lg'
    const h5ClassName = 'text-sm md:text-base'
    const h6ClassName = 'text-xs md:text-sm'

    return (
      <Component
        {...props}
        ref={ref}
        className={cn(
          headingClassName,
          as === 'h1' && h1ClassName,
          as === 'h2' && h2ClassName,
          as === 'h3' && h3ClassName,
          as === 'h4' && h4ClassName,
          as === 'h5' && h5ClassName,
          as === 'h6' && h6ClassName,
          className
        )}
      />
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
