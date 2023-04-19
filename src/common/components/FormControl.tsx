import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface FormControlProps extends React.ComponentPropsWithRef<'input'> {
  rows?: number
  multiline?: boolean
}

const FormControl = React.forwardRef<HTMLInputElement, FormControlProps>(
  ({ type = 'text', multiline, className, ...props }, ref) => {
    const formControlClassName = cn('form-control', className)

    return multiline ? (
      // @ts-ignore
      <textarea {...props} ref={ref as any} className={formControlClassName} />
    ) : (
      <input
        {...props}
        ref={ref}
        type={type}
        className={formControlClassName}
      />
    )
  }
)

FormControl.displayName = 'FormControl'

export default FormControl
