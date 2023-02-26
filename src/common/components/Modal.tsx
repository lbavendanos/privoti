'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Modal.tsx
import { cn } from 'lib/utils/helpers'
import addEventListener from 'dom-helpers/addEventListener'
import canUseDOM from 'dom-helpers/canUseDOM'
import ownerDocument from 'dom-helpers/ownerDocument'
import removeEventListener from 'dom-helpers/removeEventListener'
import getScrollbarSize from 'dom-helpers/scrollbarSize'
import transitionEnd from 'dom-helpers/transitionEnd'
import { getSharedManager } from './BootstrapModalManager'
import {
  useCallbackRef,
  useEventCallback,
  useMergedRefs,
  useWillUnmount,
} from 'lib/hooks'
import { ModalInstance } from '@restart/ui/ModalManager'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import BaseModal, { BaseModalProps } from '@restart/ui/Modal'
import Fade from './Fade'
import ModalContext from './ModalContext'
import ModalDialog from './ModalDialog'

export interface ModalProps
  extends Omit<
    BaseModalProps,
    | 'role'
    | 'renderBackdrop'
    | 'renderDialog'
    | 'transition'
    | 'backdropTransition'
    | 'children'
  > {
  size?: 'sm' | 'lg' | 'xl'
  fullscreen?:
    | true
    | string
    | 'sm-down'
    | 'md-down'
    | 'lg-down'
    | 'xl-down'
    | 'xxl-down'
  // bsPrefix?: string
  centered?: boolean
  backdropClassName?: string
  animation?: boolean
  dialogClassName?: string
  contentClassName?: string
  dialogAs?: React.ElementType
  scrollable?: boolean
  [other: string]: any
}

const defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog,
}

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props: any) {
  return <Fade {...props} timeout={null} />
}

function BackdropTransition(props: any) {
  return <Fade {...props} timeout={null} />
}

/* eslint-enable no-use-before-define */
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      // bsPrefix,
      className,
      style,
      dialogClassName,
      contentClassName,
      children,
      dialogAs: Dialog,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,

      /* BaseModal props */

      show,
      animation,
      backdrop,
      keyboard,
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
      ...props
    },
    ref
  ) => {
    const [modalStyle, setStyle] = useState({})
    const [animateStaticModal, setAnimateStaticModal] = useState(false)
    const waitingForMouseUpRef = useRef(false)
    const ignoreBackdropClickRef = useRef(false)
    const removeStaticModalAnimationRef = useRef<(() => void) | null>(null)
    const [modal, setModalRef] = useCallbackRef<ModalInstance>()
    const mergedRef = useMergedRefs(ref as any, setModalRef)
    const handleHide = useEventCallback(onHide)
    const isRTL = false

    // bsPrefix = useBootstrapPrefix(bsPrefix, 'modal')

    const modalContext = useMemo(
      () => ({
        onHide: handleHide,
      }),
      [handleHide]
    )

    function getModalManager() {
      if (propsManager) return propsManager
      return getSharedManager({ isRTL })
    }

    function updateDialogStyle(node: any) {
      if (!canUseDOM) return

      const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0

      const modalIsOverflowing =
        node.scrollHeight > ownerDocument(node).documentElement.clientHeight

      setStyle({
        paddingRight:
          containerIsOverflowing && !modalIsOverflowing
            ? getScrollbarSize()
            : undefined,
        paddingLeft:
          !containerIsOverflowing && modalIsOverflowing
            ? getScrollbarSize()
            : undefined,
      })
    }

    const handleWindowResize = useEventCallback(() => {
      if (modal) {
        updateDialogStyle(modal.dialog)
      }
    })

    useWillUnmount(() => {
      removeEventListener(window as any, 'resize', handleWindowResize)
      removeStaticModalAnimationRef.current?.()
    })

    // We prevent the modal from closing during a drag by detecting where the
    // click originates from. If it starts in the modal and then ends outside
    // don't close.
    const handleDialogMouseDown = () => {
      waitingForMouseUpRef.current = true
    }

    const handleMouseUp = (e: any) => {
      if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
        ignoreBackdropClickRef.current = true
      }
      waitingForMouseUpRef.current = false
    }

    const handleStaticModalAnimation = () => {
      setAnimateStaticModal(true)
      removeStaticModalAnimationRef.current = transitionEnd(
        modal!.dialog as any,
        () => {
          setAnimateStaticModal(false)
        }
      )
    }

    const handleStaticBackdropClick = (e: any) => {
      if (e.target !== e.currentTarget) {
        return
      }

      handleStaticModalAnimation()
    }

    const handleClick = (e: any) => {
      if (backdrop === 'static') {
        handleStaticBackdropClick(e)
        return
      }

      if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
        ignoreBackdropClickRef.current = false
        return
      }

      onHide?.()
    }

    const handleEscapeKeyDown = (e: any) => {
      if (keyboard) {
        onEscapeKeyDown?.(e)
      } else {
        // Call preventDefault to stop modal from closing in @restart/ui.
        e.preventDefault()

        if (backdrop === 'static') {
          // Play static modal animation.
          handleStaticModalAnimation()
        }
      }
    }

    const handleEnter = (node: any, isAppearing: any) => {
      if (node) {
        updateDialogStyle(node)
      }

      onEnter?.(node, isAppearing)
    }

    const handleExit = (node: any) => {
      removeStaticModalAnimationRef.current?.()
      onExit?.(node)
    }

    const handleEntering = (node: any, isAppearing: any) => {
      onEntering?.(node, isAppearing)

      // FIXME: This should work even when animation is disabled.
      addEventListener(window as any, 'resize', handleWindowResize)
    }

    const handleExited = (node: any) => {
      if (node) node.style.display = '' // RHL removes it sometimes
      onExited?.(node)

      // FIXME: This should work even when animation is disabled.
      removeEventListener(window as any, 'resize', handleWindowResize)
    }

    const renderBackdrop = useCallback(
      (backdropProps: any) => (
        <div
          {...backdropProps}
          className={cn(
            'modal-backdrop',
            backdropClassName,
            !animation && 'show'
          )}
        />
      ),
      [animation, backdropClassName]
    )

    const baseModalStyle = { ...style, ...modalStyle }

    // If `display` is not set to block, autoFocus inside the modal fails
    // https://github.com/react-bootstrap/react-bootstrap/issues/5102
    baseModalStyle.display = 'block'

    const renderDialog = (dialogProps: any) => (
      <div
        role="dialog"
        {...dialogProps}
        style={baseModalStyle}
        className={cn(
          className,
          'modal',
          animateStaticModal && 'modal-static',
          !animation && 'show'
        )}
        onClick={backdrop ? handleClick : undefined}
        onMouseUp={handleMouseUp}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
      >
        {/*
        // @ts-ignore */}
        <Dialog
          {...props}
          onMouseDown={handleDialogMouseDown}
          className={dialogClassName}
          contentClassName={contentClassName}
        >
          {children}
        </Dialog>
      </div>
    )

    return (
      <ModalContext.Provider value={modalContext}>
        <BaseModal
          show={show}
          ref={mergedRef as any}
          backdrop={backdrop}
          container={container}
          keyboard // Always set true - see handleEscapeKeyDown
          autoFocus={autoFocus}
          enforceFocus={enforceFocus}
          restoreFocus={restoreFocus}
          restoreFocusOptions={restoreFocusOptions}
          onEscapeKeyDown={handleEscapeKeyDown}
          onShow={onShow}
          onHide={onHide}
          onEnter={handleEnter}
          onEntering={handleEntering}
          onEntered={onEntered}
          onExit={handleExit}
          onExiting={onExiting}
          onExited={handleExited}
          manager={getModalManager()}
          transition={animation ? DialogTransition : undefined}
          backdropTransition={animation ? BackdropTransition : undefined}
          renderBackdrop={renderBackdrop}
          renderDialog={renderDialog}
        />
      </ModalContext.Provider>
    )
  }
)

Modal.displayName = 'Modal'
Modal.defaultProps = defaultProps

export default Modal
