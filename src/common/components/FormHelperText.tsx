import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface FormHelperTextProps extends React.ComponentPropsWithRef<'p'> {}

const FormHelperText = React.forwardRef<
  HTMLParagraphElement,
  FormHelperTextProps
>(({ className, ...props }, ref) => {
  const formHelperTextClassName = cn('form-helper-text', className)

  return <p {...props} ref={ref} className={formHelperTextClassName} />
})

FormHelperText.displayName = 'FormHelperText'

export default FormHelperText
