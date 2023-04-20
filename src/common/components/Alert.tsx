'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Alert.tsx
import { cn } from 'lib/utils/helpers'
import { useEventCallback, useUncontrolled } from 'lib/hooks'
import { TransitionType } from '../bs/helpers'
import React from 'react'
import Fade from './Fade'
import CloseButton, { CloseButtonVariant } from './CloseButton'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'gray'
  | 'light'
  | string

export interface AlertProps extends React.ComponentPropsWithRef<'div'> {
  variant?: Variant
  dismissible?: boolean
  show?: boolean
  onClose?: (a: any, b: any) => void
  closeLabel?: string
  closeVariant?: CloseButtonVariant
  transition?: TransitionType
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (uncontrolledProps: AlertProps, ref) => {
    const {
      show = true,
      closeLabel = 'Close alert',
      closeVariant,
      className,
      children,
      variant = 'primary',
      onClose,
      dismissible,
      transition = Fade,
      ...props
    } = useUncontrolled(uncontrolledProps, {
      show: 'onClose',
    })

    const handleClose = useEventCallback((e) => {
      if (onClose) {
        onClose(false, e)
      }
    })
    const Transition = transition === true ? Fade : transition

    const alert = (
      <div
        role="alert"
        {...(!Transition ? props : undefined)}
        ref={ref}
        className={cn(
          'alert',
          variant === 'primary' && 'alert-primary',
          variant === 'secondary' && 'alert-secondary',
          variant === 'success' && 'alert-success',
          variant === 'danger' && 'alert-danger',
          variant === 'warning' && 'alert-warning',
          variant === 'info' && 'alert-info',
          variant === 'dark' && 'alert-dark',
          variant === 'gray' && 'alert-gray',
          variant === 'light' && 'alert-light',
          dismissible && 'alert-dismissible',
          className
        )}
      >
        {dismissible && (
          <CloseButton
            onClick={handleClose}
            aria-label={closeLabel}
            variant={closeVariant}
          />
        )}
        {children}
      </div>
    )

    if (!Transition) return show ? alert : null

    return (
      <Transition unmountOnExit {...props} ref={undefined} in={show}>
        {alert}
      </Transition>
    )
  }
)

Alert.displayName = 'Alert'

export default Alert
