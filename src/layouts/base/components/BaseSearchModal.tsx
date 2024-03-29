'use client'

import { useDebouncedCallback } from 'lib/hooks'
import { Suspense, useCallback, useRef, useState } from 'react'
import { SearchIcon } from '@/common/components/Icons'
import Modal, { ModalProps } from '@/common/components/Modal'
import Button from '@/common/components/Button'
import Loading from '@/common/components/Loading'
import ModalBody from '@/common/components/ModalBody'
import CloseButton from '@/common/components/CloseButton'
import FormControl from '@/common/components/FormControl'
import BaseSearchResult from './BaseSearchResult'

interface BaseSearchModalProps extends ModalProps {}

export default function BaseSearchModal({
  onHide,
  ...props
}: BaseSearchModalProps) {
  const [query, setQuery] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)

  const debounceResult = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    },
    500
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debounceResult(e)
    },
    [debounceResult]
  )

  const handleEntering = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Modal {...props} onHide={onHide} onEntering={handleEntering}>
      <ModalBody>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex justify-center w-full">
              <FormControl
                ref={inputRef}
                id="search"
                type="search"
                name="search"
                placeholder="Búsqueda"
                className="shrink border-r-0"
                autoComplete="off"
                onChange={handleChange}
              />
              <Button type="button">
                <SearchIcon />
              </Button>
            </div>
            <CloseButton onClick={onHide} />
          </div>
          <Suspense fallback={<Loading className="text-center" />}>
            <BaseSearchResult query={query} onClick={onHide} />
          </Suspense>
        </div>
      </ModalBody>
    </Modal>
  )
}
