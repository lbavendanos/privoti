import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface FormLabelProps extends React.ComponentPropsWithRef<'label'> {}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const formLabelClassName = cn('form-label', className)

    return <label {...props} ref={ref} className={formLabelClassName} />
  }
)

FormLabel.displayName = 'FormLabel'

export default FormLabel
