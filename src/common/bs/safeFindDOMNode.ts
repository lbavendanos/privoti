'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/safeFindDOMNode.ts
import ReactDOM from 'react-dom'

export default function safeFindDOMNode(
  componentOrElement: React.Component | Element | null | undefined
) {
  if (componentOrElement && 'setState' in componentOrElement) {
    // eslint-disable-next-line
    return ReactDOM.findDOMNode(componentOrElement)
  }
  return (componentOrElement ?? null) as Element | Text | null
}
