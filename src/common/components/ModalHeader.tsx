'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalHeader.tsx
import { cn } from 'lib/utils/helpers'
import React from 'react'
import AbstractModalHeader, {
  AbstractModalHeaderProps,
} from './AbstractModalHeader'

export interface ModalHeaderProps extends AbstractModalHeaderProps {}
// BsPrefixOnlyProps {}

const defaultProps = {
  closeLabel: 'Close',
  closeButton: false,
}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (
    {
      // bsPrefix,
      className,
      ...props
    },
    ref
  ) => {
    // bsPrefix = useBootstrapPrefix(bsPrefix, 'modal-header')
    return (
      <AbstractModalHeader
        ref={ref}
        {...props}
        className={cn('modal-header', className)}
      />
    )
  }
)

ModalHeader.displayName = 'ModalHeader'
ModalHeader.defaultProps = defaultProps

export default ModalHeader
