import { cn } from 'lib/utils/helpers'
import React from 'react'
import Separator from './Separator'
import CartItem, { Item } from './CartItem'

export type Items = Item[]

export interface CartItemListProps
  extends React.ComponentPropsWithoutRef<'div'> {
  items: Items
  variant?: 'normal' | 'minimal'
}

export default function CartItemList({
  className,
  items,
  variant,
  ...props
}: CartItemListProps) {
  const length = items.length

  return (
    <div {...props} className={cn('flex flex-col space-y-4', className)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <CartItem {...item} variant={variant} />
          {index + 1 !== length && <Separator className="!px-0 opacity-30" />}
        </React.Fragment>
      ))}
    </div>
  )
}
