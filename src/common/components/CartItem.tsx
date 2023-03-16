import { cn } from 'lib/utils/helpers'
import { CartLine } from 'lib/types/cart'
import Link from 'next/link'
import Price from './Price'
import Paragraph from './Paragraph'
import CartItemImage from './CartItemImage'
import QuantityFormControl from './QuantityFormControl'

export interface CartItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    CartLine {
  variant?: 'normal' | 'minimal'
}

export default function CartItem({
  variant = 'normal',
  node,
  className,
  onClick,
  ...props
}: CartItemProps) {
  if (variant === 'minimal')
    return (
      <div {...props} className={cn('flex flex-nowrap space-x-4', className)}>
        {node?.merchandise?.product?.handle && (
          <Link
            href={node.merchandise.product.handle}
            className="w-2/6"
            onClick={onClick as any}
          >
            {node?.merchandise?.product?.images?.edges?.at(0) && (
              <figure className="w-full h-full">
                <CartItemImage
                  {...node.merchandise.product.images.edges.at(0)?.node}
                  alt={node.merchandise.product.title}
                />
              </figure>
            )}
          </Link>
        )}
        <div className="w-full flex flex-col md:flex-row space-y-2">
          <div className="flex flex-col space-y-1 w-8/12 shrink-0 grow-0">
            {node?.merchandise?.product?.handle &&
              node?.merchandise?.product?.title && (
                <Link
                  href={node.merchandise.product.handle}
                  className="uppercase tracking-tight font-medium w-fit text-xs md:text-sm"
                  onClick={onClick as any}
                >
                  {node.merchandise.product.title}
                </Link>
              )}
            {node?.merchandise?.title && (
              <Paragraph size="xs" weight="light">
                Size: <strong>{node.merchandise.title}</strong>
              </Paragraph>
            )}
          </div>
          <div className="w-full flex flex-col space-y-2 items-start md:items-end">
            {node?.cost?.amountPerQuantity && (
              <Price
                size="xs"
                weight="light"
                {...node.cost.amountPerQuantity}
              />
            )}
            {node?.quantity && (
              <QuantityFormControl
                value={node.quantity}
                groupClassName="w-[90px] h-[30px]"
              />
            )}
            <a
              href="#"
              className="w-fit uppercase tracking-tight font-light text-xs underline hover:font-normal"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    )

  return (
    <div {...props} className={cn('flex flex-nowrap space-x-4', className)}>
      {node?.merchandise?.product?.handle && (
        <Link
          href={node.merchandise.product.handle}
          className="w-2/6"
          onClick={onClick as any}
        >
          {node?.merchandise?.product?.images?.edges?.at(0) && (
            <figure className="w-full h-full">
              <CartItemImage
                {...node.merchandise.product.images.edges.at(0)?.node}
                alt={node.merchandise.product.title}
              />
            </figure>
          )}
        </Link>
      )}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-2">
        <div className="w-full lg:w-6/12 flex flex-col space-y-1">
          {node?.merchandise?.product?.handle &&
            node?.merchandise?.product?.title && (
              <Link
                href={node.merchandise.product.handle}
                className="uppercase tracking-tight font-medium text-sm lg:text-base w-fit"
                onClick={onClick as any}
              >
                {node.merchandise.product.title}
              </Link>
            )}
          {node?.merchandise?.title && (
            <Paragraph size="xs" weight="light">
              Size: <strong>{node.merchandise.title}</strong>
            </Paragraph>
          )}
          <a
            href="#"
            className={cn(
              'hidden lg:block',
              'w-fit uppercase tracking-tight font-light text-xs underline hover:font-normal'
            )}
          >
            Remove
          </a>
        </div>
        {node?.quantity && (
          <QuantityFormControl
            className="w-full lg:w-3/12 text-left"
            groupClassName="w-[90px] h-[30px]"
            value={node.quantity}
          />
        )}
        {node?.cost?.amountPerQuantity && (
          <Price
            size="sm"
            weight="light"
            className="w-full lg:w-3/12 text-left lg:text-right"
            {...node.cost.amountPerQuantity}
          />
        )}
        <div className="w-full block lg:hidden">
          <a
            href="#"
            className="w-fit uppercase tracking-tight font-light text-xs underline hover:font-normal"
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  )
}
