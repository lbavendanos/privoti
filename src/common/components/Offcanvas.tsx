'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Offcanvas.tsx
import { cn } from 'lib/utils/helpers'
import React from 'react'
import { useBreakpoint, useEventCallback } from 'lib/hooks'
import {
  useCallback,
  // useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import BaseModal, {
  ModalProps as BaseModalProps,
  ModalHandle,
} from '@restart/ui/Modal'
import Fade from './Fade'
import ModalContext from './ModalContext'
import OffcanvasToggling from './OffcanvasToggling'
import BootstrapModalManager, {
  getSharedManager,
} from './BootstrapModalManager'

export type OffcanvasPlacement = 'start' | 'end' | 'top' | 'bottom'

export interface OffcanvasProps
  extends Omit<
    BaseModalProps,
    | 'role'
    | 'renderBackdrop'
    | 'renderDialog'
    | 'transition'
    | 'backdrop'
    | 'backdropTransition'
  > {
  bsPrefix?: string
  backdropClassName?: string
  scroll?: boolean
  placement?: OffcanvasPlacement
  responsive?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string
  renderStaticNode?: boolean
}

const defaultProps: Partial<OffcanvasProps> = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: 'start',
  renderStaticNode: false,
}

function DialogTransition(props: any) {
  return <OffcanvasToggling {...props} />
}

function BackdropTransition(props: any) {
  return <Fade {...props} />
}

const Offcanvas = React.forwardRef<ModalHandle, OffcanvasProps>(
  (
    {
      // bsPrefix,
      className,
      children,
      'aria-labelledby': ariaLabelledby,
      placement,
      responsive,

      /* BaseModal props */

      show,
      backdrop,
      keyboard,
      scroll,
      onEscapeKeyDown,
      onShow,
      onHide,
      container,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEntered,
      onExit,
      onExiting,
      onEnter,
      onEntering,
      onExited,
      backdropClassName,
      manager: propsManager,
      renderStaticNode,
      ...props
    },
    ref
  ) => {
    const modalManager = useRef<BootstrapModalManager>()
    // bsPrefix = useBootstrapPrefix(bsPrefix, 'offcanvas')
    // const { onToggle } = useContext(NavbarContext) || {}
    const [showOffcanvas, setShowOffcanvas] = useState(false)

    const hideResponsiveOffcanvas = useBreakpoint(
      (responsive as any) || 'xs',
      'up'
    )

    useEffect(() => {
      // Handles the case where screen is resized while the responsive
      // offcanvas is shown. If `responsive` not provided, just use `show`.
      setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show)
    }, [show, responsive, hideResponsiveOffcanvas])

    const handleHide = useEventCallback(() => {
      // onToggle?.()
      onHide?.()
    })

    const modalContext = useMemo(
      () => ({
        onHide: handleHide,
      }),
      [handleHide]
    )

    function getModalManager() {
      if (propsManager) return propsManager
      if (scroll) {
        // Have to use a different modal manager since the shared
        // one handles overflow.
        if (!modalManager.current)
          modalManager.current = new BootstrapModalManager({
            handleContainerOverflow: false,
          })
        return modalManager.current
      }

      return getSharedManager()
    }

    const handleEnter = (node: any, ...args: any[]) => {
      if (node) node.style.visibility = 'visible'
      onEnter?.(node, ...args)
    }

    const handleExited = (node: any, ...args: any[]) => {
      if (node) node.style.visibility = ''
      onExited?.(...args)
    }

    const renderBackdrop = useCallback(
      (backdropProps: any) => (
        <div
          {...backdropProps}
          className={cn(`offcanvas-backdrop`, backdropClassName)}
        />
      ),
      [backdropClassName]
    )

    const renderDialog = (dialogProps: any) => (
      <div
        {...dialogProps}
        {...props}
        className={cn(
          responsive ? `offcanvas-${responsive}` : 'offcanvas',
          placement === 'start' && 'offcanvas-start',
          placement === 'end' && 'offcanvas-end',
          placement === 'top' && 'offcanvas-top',
          placement === 'bottom' && 'offcanvas-bottom',
          className
        )}
        aria-labelledby={ariaLabelledby}
      >
        {children}
      </div>
    )

    return (
      <>
        {/*
            Only render static elements when offcanvas isn't shown so we
            don't duplicate elements.
            TODO: Should follow bootstrap behavior and don't unmount children
            when show={false} in BaseModal. Will do this next major version.
          */}
        {!showOffcanvas && (responsive || renderStaticNode) && renderDialog({})}

        <ModalContext.Provider value={modalContext}>
          <BaseModal
            show={showOffcanvas}
            ref={ref}
            backdrop={backdrop}
            container={container}
            keyboard={keyboard}
            autoFocus={autoFocus}
            enforceFocus={enforceFocus && !scroll}
            restoreFocus={restoreFocus}
            restoreFocusOptions={restoreFocusOptions}
            onEscapeKeyDown={onEscapeKeyDown}
            onShow={onShow}
            onHide={handleHide}
            onEnter={handleEnter}
            onEntering={onEntering}
            onEntered={onEntered}
            onExit={onExit}
            onExiting={onExiting}
            onExited={handleExited}
            manager={getModalManager()}
            transition={DialogTransition}
            backdropTransition={BackdropTransition}
            renderBackdrop={renderBackdrop}
            renderDialog={renderDialog}
          />
        </ModalContext.Provider>
      </>
    )
  }
)

Offcanvas.displayName = 'Offcanvas'
Offcanvas.defaultProps = defaultProps

export default Offcanvas
