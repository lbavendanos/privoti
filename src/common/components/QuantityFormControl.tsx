'use client'

import { cn } from 'lib/utils/helpers'
import { useCallbackRef, useMergedRefs } from 'lib/hooks'
import React, { useCallback, useMemo } from 'react'
import { LineIcon, PlusIcon } from './Icons'
import Button from './Button'
import NumberFormControl, { NumberFormControlProps } from './NumberFormControl'

export interface QuantityFormControlProps extends NumberFormControlProps {
  value?: number
  min?: number
  max?: number
  disabled?: boolean
  groupClassName?: string
}

const QuantityFormControl = React.forwardRef<
  HTMLInputElement,
  QuantityFormControlProps
>(({ value, min, max, disabled, groupClassName, className, ...props }, ref) => {
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

  const increaseDisabled = useMemo(() => {
    if (disabled) return true

    return value && max ? max <= value : false
  }, [disabled, value, max])

  const decreaseDisabled = useMemo(() => {
    if (disabled) return true

    return value && min ? min >= value : false
  }, [disabled, value, min])

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
        variant="light"
        size="sm"
        className="flex-1 flex justify-center items-center border-r-0"
        aria-label="Decrease quantity"
        disabled={decreaseDisabled}
        onClick={handleDecrease}
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
        aria-label="quantity"
        readOnly
      />
      <Button
        variant="light"
        size="sm"
        className="flex-1 flex justify-center items-center border-l-0"
        aria-label="Increase quantity"
        disabled={increaseDisabled}
        onClick={handleIncrease}
      >
        <PlusIcon className="w-3 h-3" />
      </Button>
    </div>
  )
})

QuantityFormControl.displayName = 'QuantityFormControl'

export default QuantityFormControl
