import React from 'react'
import FormGroup, { FormGroupProps } from './FormGroup'
import FormLabel, { FormLabelProps } from './FormLabel'
import FormControl, { FormControlProps } from './FormControl'
import FormHelperText, { FormHelperTextProps } from './FormHelperText'

export interface TextFieldProps extends FormControlProps {
  error?: boolean
  label?: string
  groupProps?: FormGroupProps
  labelProps?: FormLabelProps
  helperText?: string
  helperTextProps?: FormHelperTextProps
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      error,
      label,
      helperText,
      groupProps,
      labelProps,
      helperTextProps,
      ...props
    },
    ref
  ) => {
    return (
      <FormGroup {...groupProps} error={error}>
        {label && (
          <FormLabel {...labelProps} htmlFor={id}>
            {label}
          </FormLabel>
        )}
        <FormControl {...props} ref={ref} id={id} />
        {helperText && (
          <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
        )}
      </FormGroup>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
