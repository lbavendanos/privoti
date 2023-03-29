'use client'

import { useMemo } from 'react'
import { useGetProducts } from 'lib/shopify/core/product/hooks'
import Link from 'next/link'
import Price from '@/common/components/Price'
import Paragraph from '@/common/components/Paragraph'
import ProductImage from '@/common/components/ProductImage'

interface BaseSearchResultProps {
  query?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
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
        <ul className="flex flex-col -mx-4">
          {data.products.edges?.map(({ node }) => (
            <li key={node.id} className="flex px-4 py-2 hover:bg-zinc-100">
              {node.handle && (
                <Link
                  href={node.handle}
                  className="flex gap-x-4 items-center w-full"
                  onClick={onClick}
                >
                  {node.images?.edges?.at(0) && (
                    <div className="w-[15%] md:w-[10%] grow-0 shrink-0">
                      <ProductImage
                        src={node.images?.edges?.at(0)?.node?.url!}
                        alt={
                          node.images?.edges?.at(0)?.node?.altText! ||
                          node.title!
                        }
                        width={node.images?.edges?.at(0)?.node?.width}
                        height={node.images?.edges?.at(0)?.node?.height}
                      />
                    </div>
                  )}
                  <div className="flex flex-col space-y-1">
                    {node.title && (
                      <Paragraph size="xs" weight="semibold">
                        {node.title}
                      </Paragraph>
                    )}
                    {node.priceRange?.minVariantPrice && (
                      <Price size="xs" {...node.priceRange.minVariantPrice} />
                    )}
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      {query && (
        <div className="flex justify-center">
          {hasProducts && (
            <Link
              href="/"
              className="uppercase tracking-tight font-semibold w-fit text-xs hover:underline"
            >
              Show all result for <strong>{`"${query}"`}</strong>
            </Link>
          )}
          {!hasProducts && (
            <Paragraph size="xs" weight="semibold">
              No results for <strong>{`"${query}"`}</strong>
            </Paragraph>
          )}
        </div>
      )}
    </div>
  )
}
