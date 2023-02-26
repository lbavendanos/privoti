'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ModalContext.tsx
import React from 'react'

interface ModalContextType {
  onHide: () => void
}

const ModalContext = React.createContext<ModalContextType>({
  onHide() {},
})

export default ModalContext
