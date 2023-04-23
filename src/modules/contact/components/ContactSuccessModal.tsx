'use client'

import Modal, { ModalProps } from '@/common/components/Modal'
import ModalBody from '@/common/components/ModalBody'
import Paragraph from '@/common/components/Paragraph'
import CloseButton from '@/common/components/CloseButton'

interface ContactSuccessModalProps extends ModalProps {}

export default function ContactSuccessModal({
  onHide,
  ...props
}: ContactSuccessModalProps) {
  return (
    <Modal {...props} onHide={onHide} centered>
      <ModalBody className="bg-primary-100">
        <div className="flex justify-between">
          <Paragraph size="sm" centered>
            Gracias por contactarnos. Te responderemos lo antes posible.
          </Paragraph>
          <CloseButton onClick={onHide} />
        </div>
      </ModalBody>
    </Modal>
  )
}
