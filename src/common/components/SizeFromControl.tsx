'use client'

import { cn } from 'lib/utils/helpers'
import React from 'react'

export interface SizeFormControlProps
  extends React.ComponentPropsWithoutRef<'input'> {
  options?: { value: string; name: string; available: boolean }[]
  availableClassName?: string
  activeAvailableClassName?: string
  unavailableClassName?: string
  activeUnavailableClassName?: string
  groupClassName?: string
}

const SizeFormControl = React.forwardRef<
  HTMLInputElement,
  SizeFormControlProps
>(
  (
    {
      value,
      id: idProp,
      name: nameProp,
      options,
      availableClassName,
      activeAvailableClassName,
      unavailableClassName,
      activeUnavailableClassName,
      groupClassName,
      onChange,
      ...props
    },
    ref
  ) => {
    const id = idProp || 'size'
    const name = nameProp || 'size'

    return (
      <div {...props} id={id} className={groupClassName}>
        {options?.map((option) => (
          <React.Fragment key={option.value}>
            <label
              htmlFor={`${id}-${option.name}`}
              className={cn(
                option.available
                  ? [
                      availableClassName,
                      option.value === value && activeAvailableClassName,
                    ]
                  : [
                      unavailableClassName,
                      option.value === value && activeUnavailableClassName,
                    ]
              )}
            >
              {option.name}
            </label>
            <input
              ref={ref}
              id={`${id}-${option.name}`}
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
