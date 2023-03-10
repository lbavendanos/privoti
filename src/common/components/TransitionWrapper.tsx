'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/TransitionWrapper.tsx
import React, { useCallback, useRef } from 'react'
import Transition, {
  TransitionProps,
  TransitionStatus,
} from 'react-transition-group/Transition'
import { useMergedRefs } from 'lib/hooks'
import safeFindDOMNode from '../bs/safeFindDOMNode'

export type TransitionWrapperProps = TransitionProps & {
  childRef?: React.Ref<unknown>
  children:
    | React.ReactElement
    | ((
        status: TransitionStatus,
        props: Record<string, unknown>
      ) => React.ReactNode)
}

const TransitionWrapper = React.forwardRef<
  Transition<any>,
  TransitionWrapperProps
>(
  (
    {
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      addEndListener,
      children,
      childRef,
      ...props
    },
    ref
  ) => {
    const nodeRef = useRef<HTMLElement>(null)
    const mergedRef = useMergedRefs(nodeRef, childRef)

    const attachRef = (r: React.Component | Element | null | undefined) => {
      mergedRef(safeFindDOMNode(r))
    }

    const normalize =
      (callback?: (node: HTMLElement, param: any) => void) => (param: any) => {
        if (callback && nodeRef.current) {
          callback(nodeRef.current, param)
        }
      }

    /* eslint-disable react-hooks/exhaustive-deps */
    const handleEnter = useCallback(normalize(onEnter), [onEnter])
    const handleEntering = useCallback(normalize(onEntering), [onEntering])
    const handleEntered = useCallback(normalize(onEntered), [onEntered])
    const handleExit = useCallback(normalize(onExit), [onExit])
    const handleExiting = useCallback(normalize(onExiting), [onExiting])
    const handleExited = useCallback(normalize(onExited), [onExited])
    const handleAddEndListener = useCallback(normalize(addEndListener), [
      addEndListener,
    ])
    /* eslint-enable react-hooks/exhaustive-deps */

    return (
      <Transition
        ref={ref}
        {...props}
        onEnter={handleEnter}
        onEntered={handleEntered}
        onEntering={handleEntering}
        onExit={handleExit}
        onExited={handleExited}
        onExiting={handleExiting}
        addEndListener={handleAddEndListener}
        nodeRef={nodeRef}
      >
        {/* @ts-ignore: Unreachable code error */}
        {typeof children === 'function'
          ? (status: TransitionStatus, innerProps: Record<string, unknown>) =>
              children(status, {
                ...innerProps,
                ref: attachRef,
              })
          : React.cloneElement(children as React.ReactElement, {
              ref: attachRef,
            })}
      </Transition>
    )
  }
)

TransitionWrapper.displayName = 'TransitionWrapper'

export default TransitionWrapper
