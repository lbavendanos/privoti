'use client'

import { cn } from 'lib/utils/helpers'
import { useCallback } from 'react'

export interface SizeFormControlProps
  extends React.ComponentPropsWithoutRef<'input'> {
  options?: { value: string; name: string }[]
  optionClassName?: string
  activeClassName?: string
}

export default function SizeFormControl({
  value,
  options,
  optionClassName,
  activeClassName,
  onChange,
  ...props
}: SizeFormControlProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
      e.preventDefault()

      Object.defineProperty(e, 'target', { writable: true, value: { value } })

      onChange?.(e as any)
    },
    [onChange]
  )

  return (
    <div {...props}>
      {options?.map((option) => (
        <button
          key={option.value}
          className={cn(
            optionClassName,
            option.value === value && activeClassName
          )}
          onClick={(e) => handleClick(e, option.value)}
        >
          {option.name === 'Extra small' && 'XS'}
          {option.name === 'Small' && 'S'}
          {option.name === 'Medium' && 'M'}
          {option.name === 'Large' && 'L'}
          {option.name === 'Extra large' && 'XL'}
        </button>
      ))}
    </div>
  )
}
