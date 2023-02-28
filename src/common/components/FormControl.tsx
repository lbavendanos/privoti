import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface FormControlProps extends React.ComponentPropsWithRef<'input'> {
  multiline?: boolean
  rows?: number
}

const FormControl = React.forwardRef<any, any>(
  ({ className, multiline, ...props }, ref) => {
    const formControlClassName = [
      'w-full h-auto p-2.5',
      'border border-zinc-800 outline-none rounded-none',
      'text-xs text-zinc-500 tracking-tight',
      'placeholder:uppercase placeholder:tracking-tight',
    ]

    return multiline ? (
      <textarea
        {...props}
        ref={ref}
        className={cn(formControlClassName, className)}
      />
    ) : (
      <input
        {...props}
        ref={ref}
        className={cn(formControlClassName, className)}
      />
    )
  }
)

FormControl.displayName = 'FormControl'

export default FormControl
