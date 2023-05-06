'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { SearchIcon } from '@/common/components/Icons'

const BaseSearchModal = dynamic(() => import('./BaseSearchModal'), {
  ssr: false,
})

export default function BaseNavbarSearchButton() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button
        type="button"
        className="text-zinc-800"
        aria-label="Search"
        onClick={handleShow}
      >
        <SearchIcon className="w-6 h-6" />
      </button>
      <BaseSearchModal show={show} onHide={handleClose} />
    </>
  )
}
