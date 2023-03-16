import { cn } from 'lib/utils/helpers'
import React from 'react'
import { CartLines } from 'lib/types/cart'
import Separator from './Separator'
import CartItem from './CartItem'

export interface CartItemListProps
  extends React.ComponentPropsWithoutRef<'div'> {
  lines: CartLines
  variant?: 'normal' | 'minimal'
}

export default function CartItemList({
  lines,
  variant,
  className,
  onClick,
  ...props
}: CartItemListProps) {
  const length = lines.length

  return (
    <div {...props} className={cn('flex flex-col space-y-4', className)}>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          <CartItem {...line} variant={variant} onClick={onClick} />
          {index + 1 !== length && <Separator className="!px-0 opacity-30" />}
        </React.Fragment>
      ))}
    </div>
  )
}
