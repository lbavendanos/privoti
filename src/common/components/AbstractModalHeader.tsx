'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/AbstractModalHeader.tsx
import { useEventCallback } from 'lib/hooks'
import React, { useContext } from 'react'
import CloseButton, { CloseButtonVariant } from './CloseButton'
import ModalContext from './ModalContext'

export interface AbstractModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  closeLabel?: string
  closeVariant?: CloseButtonVariant
  closeButton?: boolean
  onHide?: () => void
}

const defaultProps = {
  closeLabel: 'Close',
  closeButton: false,
}

const AbstractModalHeader = React.forwardRef<
  HTMLDivElement,
  AbstractModalHeaderProps
>(
  (
    { closeLabel, closeVariant, closeButton, onHide, children, ...props },
    ref
  ) => {
    const context = useContext(ModalContext)

    const handleClick = useEventCallback(() => {
      context?.onHide()
      onHide?.()
    })

    return (
      <div ref={ref} {...props}>
        {children}

        {closeButton && (
          <CloseButton
            aria-label={closeLabel}
            variant={closeVariant}
            onClick={handleClick}
          />
        )}
      </div>
    )
  }
)

AbstractModalHeader.displayName = 'AbstractModalHeader'
AbstractModalHeader.defaultProps = defaultProps

export default AbstractModalHeader
