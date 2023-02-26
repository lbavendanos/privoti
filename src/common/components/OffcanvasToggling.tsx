'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/OffcanvasToggling.tsx
import { cn } from 'lib/utils/helpers'
import React from 'react'
import Transition, {
  TransitionStatus,
  ENTERED,
  ENTERING,
  EXITING,
} from 'react-transition-group/Transition'
import TransitionWrapper from './TransitionWrapper'
import { TransitionCallbacks } from '@restart/ui/types'
import transitionEndListener from '../bs/transitionEndListener'

export interface OffcanvasTogglingProps extends TransitionCallbacks {
  // BsPrefixOnlyProps {
  className?: string
  in?: boolean
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  appear?: boolean
  timeout?: number
  children: React.ReactElement
}

const defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
}

const transitionStyles: { [K in TransitionStatus]?: string } = {
  [ENTERING]: 'show',
  [ENTERED]: 'show',
}

const OffcanvasToggling = React.forwardRef<
  Transition<any>,
  OffcanvasTogglingProps
>(
  (
    {
      // bsPrefix,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas')

    return (
      <TransitionWrapper
        ref={ref}
        addEndListener={transitionEndListener}
        {...props}
        childRef={(children as any).ref}
      >
        {(status: TransitionStatus, innerProps: Record<string, unknown>) =>
          React.cloneElement(children, {
            ...innerProps,
            className: cn(
              className,
              children.props.className,
              (status === ENTERING || status === EXITING) &&
                `offcanvas-toggling`,
              transitionStyles[status]
            ),
          })
        }
      </TransitionWrapper>
    )
  }
)

OffcanvasToggling.displayName = 'OffcanvasToggling'
OffcanvasToggling.defaultProps = defaultProps

export default OffcanvasToggling
