'use client'

import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface FormLabelProps extends React.ComponentPropsWithRef<'label'> {}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const formLabelClassName = [
      'uppercase font-light text-sm text-zinc-800 tracking-tight',
    ]

    return (
      <label
        {...props}
        ref={ref}
        className={cn(formLabelClassName, className)}
      />
    )
  }
)

FormLabel.displayName = 'FormLabel'

export default FormLabel
