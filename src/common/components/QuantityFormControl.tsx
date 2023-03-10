'use client'

import { cn } from 'lib/utils/helpers'
import { useCallbackRef, useMergedRefs } from 'lib/hooks'
import React, { useCallback } from 'react'
import { LineIcon, PlusIcon } from './Icons'
import Button from './Button'
import NumberFormControl, { NumberFormControlProps } from './NumberFormControl'

export interface QuantityFormControlProps extends NumberFormControlProps {
  value?: number
  min?: number
  max?: number
  groupClassName?: string
}

const QuantityFormControl = React.forwardRef<
  HTMLInputElement,
  QuantityFormControlProps
>(({ value, min, max, groupClassName, className, ...props }, ref) => {
  const [inputRef, attachInputRef] = useCallbackRef<HTMLInputElement>()
  const mergedRef = useMergedRefs(ref as any, attachInputRef)

  const emitEvent = useCallback(
    (value: number) => {
      if (inputRef) {
        Object.getOwnPropertyDescriptor(
          HTMLInputElement.prototype,
          'value'
        )?.set?.call(inputRef, value)

        inputRef.dispatchEvent(new Event('input', { bubbles: true }))
      }
    },
    [inputRef]
  )

  const handleIncrease = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (inputRef) {
        emitEvent(inputRef.valueAsNumber + 1)
      }
    },
    [inputRef, emitEvent]
  )

  const handleDecrease = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (inputRef) {
        emitEvent(inputRef.valueAsNumber - 1)
      }
    },
    [inputRef, emitEvent]
  )

  return (
    <div className={cn('flex', groupClassName)}>
      <Button
        variant="secondary"
        size="sm"
        className="flex-1 flex justify-center items-center border-r-0"
        onClick={handleDecrease}
        disabled={value && min ? min >= value : false}
      >
        <LineIcon className="w-3 h-3" />
      </Button>
      <NumberFormControl
        {...props}
        ref={mergedRef}
        value={value}
        min={min}
        max={max}
        className="flex-1 text-center"
        readOnly
      />
      <Button
        variant="secondary"
        size="sm"
        className="flex-1 flex justify-center items-center border-l-0"
        onClick={handleIncrease}
        disabled={value && max ? max <= value : false}
      >
        <PlusIcon className="w-3 h-3" />
      </Button>
    </div>
  )
})

QuantityFormControl.displayName = 'QuantityFormControl'

export default QuantityFormControl
