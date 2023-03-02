'use client'

import { SearchIcon } from '@/common/components/Icons'
import Modal, { ModalProps } from '@/common/components/Modal'
import Button from '@/common/components/Button'
import ModalBody from '@/common/components/ModalBody'
import CloseButton from '@/common/components/CloseButton'
import FormControl from '@/common/components/FormControl'

interface BaseSearchModalProps extends ModalProps {}

export default function BaseSearchModal({
  onHide,
  ...props
}: BaseSearchModalProps) {
  return (
    <Modal {...props} onHide={onHide} size="lg">
      <ModalBody>
        <div className="flex items-center space-x-2">
          <div className="flex justify-center w-full">
            <FormControl
              id="search"
              type="search"
              name="search"
              placeholder="Enter search"
              className="shrink border-r-0"
            />
            <Button type="button">
              <SearchIcon />
            </Button>
          </div>
          <CloseButton onClick={onHide} />
        </div>
      </ModalBody>
    </Modal>
  )
}
