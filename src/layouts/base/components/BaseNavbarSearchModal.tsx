'use client'

import { cn } from 'lib/utils/helpers'
import { SearchIcon } from '@/common/components/Icons'
import Modal, { ModalProps } from '@/common/components/Modal'
import ModalBody from '@/common/components/ModalBody'
import CloseButton from '@/common/components/CloseButton'
import FormControl from '@/common/components/FormControl'

interface BaseNavbarSearchModalProps extends ModalProps {}

export default function BaseNavbarSearchModal({
  onHide,
  ...props
}: BaseNavbarSearchModalProps) {
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
              className="shrink"
            />
            <button
              className={cn(
                'grow-0 shrink-0',
                'w-10 h-auto',
                'flex justify-center items-center',
                'text-white bg-zinc-800'
              )}
            >
              <SearchIcon />
            </button>
          </div>
          <CloseButton onClick={onHide} />
        </div>
      </ModalBody>
    </Modal>
  )
}
