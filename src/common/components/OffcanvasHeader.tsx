'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/OffcanvasHeader.tsx
import { cn } from 'lib/utils/helpers'
import React from 'react'
import AbstractModalHeader, {
  AbstractModalHeaderProps,
} from './AbstractModalHeader'

const defaultProps = {
  closeLabel: 'Close',
  closeButton: false,
}

export interface OffcanvasHeaderProps extends AbstractModalHeaderProps {}
// BsPrefixOnlyProps {}

const OffcanvasHeader = React.forwardRef<HTMLDivElement, OffcanvasHeaderProps>(
  ({ className, ...props }, ref) => {
    // bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas-header')

    return (
      <AbstractModalHeader
        ref={ref}
        {...props}
        className={cn('offcanvas-header', className)}
      />
    )
  }
)

OffcanvasHeader.displayName = 'OffcanvasHeader'
OffcanvasHeader.defaultProps = defaultProps

export default OffcanvasHeader
