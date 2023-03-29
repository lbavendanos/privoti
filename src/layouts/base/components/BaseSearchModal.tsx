'use client'

import { useDebounce } from 'lib/hooks'
import { Suspense, useCallback, useState } from 'react'
import { SearchIcon } from '@/common/components/Icons'
import Modal, { ModalProps } from '@/common/components/Modal'
import Button from '@/common/components/Button'
import ModalBody from '@/common/components/ModalBody'
import Paragraph from '@/common/components/Paragraph'
import CloseButton from '@/common/components/CloseButton'
import FormControl from '@/common/components/FormControl'
import BaseSearchResult from './BaseSearchResult'

interface BaseSearchModalProps extends ModalProps {}

export default function BaseSearchModal({
  onHide,
  ...props
}: BaseSearchModalProps) {
  const [query, setQuery] = useState<string>()

  const debounceResult = useDebounce(
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

  return (
    <Modal {...props} onHide={onHide}>
      <ModalBody>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex justify-center w-full">
              <FormControl
                id="search"
                type="search"
                name="search"
                placeholder="Enter search"
                className="shrink border-r-0"
                onChange={handleChange}
                autoComplete="off"
              />
              <Button type="button">
                <SearchIcon />
              </Button>
            </div>
            <CloseButton onClick={onHide} />
          </div>
          <Suspense
            fallback={
              <Paragraph size="xs" weight="semibold" className="text-center">
                Loading...
              </Paragraph>
            }
          >
            <BaseSearchResult query={query} onClick={onHide} />
          </Suspense>
        </div>
      </ModalBody>
    </Modal>
  )
}
