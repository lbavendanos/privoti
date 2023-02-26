'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Fade.tsx
import { cn } from 'lib/utils/helpers'
import React, { useCallback } from 'react'
import Transition, {
  TransitionStatus,
  ENTERED,
  ENTERING,
} from 'react-transition-group/Transition'
import { TransitionCallbacks } from '@restart/ui/types'
import TransitionWrapper from './TransitionWrapper'
import transitionEndListener from '../bs/transitionEndListener'
import triggerBrowserReflow from '../bs/triggerBrowserReflow'

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
}

const fadeStyles: { [K in TransitionStatus]?: string } = {
  [ENTERING]: 'show',
  [ENTERED]: 'show',
}

export interface FadeProps extends TransitionCallbacks {
  className?: string
  in?: boolean
  mountOnEnter?: boolean
  unmountOnExit?: boolean
  appear?: boolean
  timeout?: number
  children: React.ReactElement
  transitionClasses?: Record<string, string>
}
const Fade = React.forwardRef<Transition<any>, FadeProps>(
  ({ className, children, transitionClasses = {}, ...props }, ref) => {
    const handleEnter = useCallback(
      (node: any, isAppearing: any) => {
        triggerBrowserReflow(node)
        props.onEnter?.(node, isAppearing)
      },
      [props]
    )

    return (
      <TransitionWrapper
        ref={ref}
        addEndListener={transitionEndListener}
        {...props}
        onEnter={handleEnter}
        childRef={(children as any).ref}
      >
        {(status: TransitionStatus, innerProps: Record<string, unknown>) =>
          React.cloneElement(children, {
            ...innerProps,
            className: cn(
              'fade',
              className,
              children.props.className,
              fadeStyles[status],
              transitionClasses[status]
            ),
          })
        }
      </TransitionWrapper>
    )
  }
)

Fade.displayName = 'Fade'
Fade.defaultProps = defaultProps

export default Fade
