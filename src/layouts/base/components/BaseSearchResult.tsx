'use client'

import { useMemo } from 'react'
import { useGetProducts } from 'lib/shopify/core/product/hooks'
import Link from 'next/link'
import Paragraph from '@/common/components/Paragraph'
import BaseSearchItemList from './BaseSearchItemList'

interface BaseSearchResultProps {
  query?: string
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void
}

export default function BaseSearchResult({
  query,
  onClick,
}: BaseSearchResultProps) {
  const { data } = useGetProducts(query, 10, { suspense: true })

  const hasProducts = useMemo(
    () => data?.products?.edges && data.products.edges.length > 0,
    [data]
  )

  if (!data) return null

  return (
    <div className="flex flex-col space-y-4">
      {hasProducts && (
        <BaseSearchItemList products={data.products} itemProps={{ onClick }} />
      )}
      {query && (
        <div className="flex justify-center">
          {hasProducts && (
            <Link
              href="/"
              className="uppercase tracking-tight font-semibold w-fit text-xs hover:underline"
            >
              Mostrar todos los resultados para <strong>{`"${query}"`}</strong>
            </Link>
          )}
          {!hasProducts && (
            <Paragraph size="xs" weight="semibold">
              Sin resultados para <strong>{`"${query}"`}</strong>
            </Paragraph>
          )}
        </div>
      )}
    </div>
  )
}
