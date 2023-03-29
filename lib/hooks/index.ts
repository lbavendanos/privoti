import { debounce } from 'lib/utils/function'
import { useEffect, useRef } from 'react'

export function useDebounce<T extends Function>(
  func: T,
  wait?: number,
  callFirst?: boolean
) {
  // @ts-ignore
  const ref = useRef(debounce(func, wait, callFirst))

  useEffect(() => {
    const debounced = ref.current

    return () => {
      debounced.cancel()
    }
  }, [])

  return ref.current
}

export { default as useMounted } from '@restart/hooks/useMounted'
export { default as useBreakpoint } from '@restart/hooks/useBreakpoint'
export { default as useMediaQuery } from '@restart/hooks/useMediaQuery'
export { default as useMergedRefs } from '@restart/hooks/useMergedRefs'
export { default as useCallbackRef } from '@restart/hooks/useCallbackRef'
export { default as useWillUnmount } from '@restart/hooks/useWillUnmount'
export { default as useEventCallback } from '@restart/hooks/useEventCallback'
