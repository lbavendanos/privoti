'use client'

// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/triggerBrowserReflow.tsx

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
export default function triggerBrowserReflow(node: HTMLElement): void {
  node.offsetHeight
}
