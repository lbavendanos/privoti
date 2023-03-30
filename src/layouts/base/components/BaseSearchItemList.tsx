import { cn } from 'lib/utils/helpers'
import { Products } from 'lib/shopify/types/product'
import BaseSearchItem, { BaseSearchItemProps } from './BaseSearchItem'

interface BaseSearchItemListProps extends React.ComponentPropsWithoutRef<'ul'> {
  products: Products
  itemProps?: Omit<BaseSearchItemProps, 'product'>
}

export default function BaseSearchItemList({
  products,
  itemProps,
  className,
  ...props
}: BaseSearchItemListProps) {
  return (
    <ul {...props} className={cn('flex flex-col -mx-4', className)}>
      {products.edges?.map(({ node }) => (
        <BaseSearchItem key={node.id} product={node} {...itemProps} />
      ))}
    </ul>
  )
}
