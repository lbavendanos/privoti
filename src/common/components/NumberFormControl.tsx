'use client'

import React from 'react'
import FormControl from './FormControl'

export interface NumberFormControlProps
  extends React.ComponentPropsWithRef<'input'> {}

const NumberFormControl = React.forwardRef<
  HTMLInputElement,
  NumberFormControlProps
>((props, ref) => {
  return <FormControl {...props} ref={ref} type="number" autoComplete="off" />
})

NumberFormControl.displayName = 'NumberFormControl'

export default NumberFormControl
