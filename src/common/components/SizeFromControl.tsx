'use client'

import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface SizeFormControlProps
  extends React.ComponentPropsWithoutRef<'input'> {
  options?: { value: string; name: string }[]
  optionClassName?: string
  activeClassName?: string
  groupClassName?: string
}

const SizeFormControl = React.forwardRef<
  HTMLInputElement,
  SizeFormControlProps
>(
  (
    {
      value,
      name: nameProp,
      options,
      optionClassName,
      activeClassName,
      groupClassName,
      onChange,
      ...props
    },
    ref
  ) => {
    const name = nameProp || 'size'

    return (
      <div {...props} className={groupClassName}>
        {options?.map((option) => (
          <React.Fragment key={option.value}>
            <label
              htmlFor={`${name}-${option.name}`}
              className={cn(
                optionClassName,
                option.value === value && activeClassName
              )}
            >
              {option.name}
            </label>
            <input
              ref={ref}
              id={`${name}-${option.name}`}
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              checked={option.value === value}
              className="hidden"
            />
          </React.Fragment>
        ))}
      </div>
    )
  }
)

SizeFormControl.displayName = 'SizeFormControl'

export default SizeFormControl
