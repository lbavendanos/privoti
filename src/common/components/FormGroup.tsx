import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface FormGroupProps extends React.ComponentPropsWithRef<'div'> {
  error?: boolean
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn('form-group', error && 'form-group-error', className)}
      />
    )
  }
)

FormGroup.displayName = 'FormGroup'

export default FormGroup
