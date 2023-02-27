'use client'

import { cn } from 'lib/utils/helpers'
import { SearchIcon } from '@/common/components/Icons'
import Modal, { ModalProps } from '@/common/components/Modal'
import ModalBody from '@/common/components/ModalBody'
import CloseButton from '@/common/components/CloseButton'

interface BaseNavbarSearchModalProps extends ModalProps {}

export default function BaseNavbarSearchModal({
  onHide,
  ...props
}: BaseNavbarSearchModalProps) {
  return (
    <Modal {...props} onHide={onHide} size="lg">
      <ModalBody>
        <div className="flex items-center space-x-2">
          <div className="relative w-full flex border border-zinc-800 text-xs">
            <input
              id="search"
              type="search"
              name="search"
              className="w-full h-8 px-3 outline-none placeholder:uppercase placeholder:tracking-tight text-zinc-500"
              placeholder="Search"
              autoComplete="off"
            />
            <button
              className={cn(
                'absolute right-0 w-8 h-8',
                'flex justify-center items-center',
                'text-white bg-zinc-800 '
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
