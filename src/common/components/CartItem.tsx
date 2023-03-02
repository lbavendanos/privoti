import { cn } from 'lib/utils/helpers'
import { LineIcon, PlusIcon } from './Icons'
import Button from './Button'
import Paragraph from './Paragraph'

export interface Item {
  name?: string
  size?: string
  color?: string
  amount?: number
  price?: string
}

export interface CartItemProps
  extends React.ComponentPropsWithoutRef<'div'>,
    Item {
  variant?: 'normal' | 'minimal'
}

export default function CartItem({
  className,
  name,
  size,
  color,
  amount,
  price,
  variant = 'normal',
  ...props
}: CartItemProps) {
  if (variant === 'minimal')
    return (
      <div {...props} className={cn('flex flex-nowrap space-x-4', className)}>
        <a href="#">
          <div className="bg-gray-300 w-[90px] h-[120px] sm:w-[100px] sm:h-[135px]" />
        </a>
        <div className="w-full flex flex-col md:flex-row space-y-2">
          <div className="flex flex-col space-y-1 w-8/12 shrink-0 grow-0">
            {name && (
              <a
                href="#"
                className="uppercase tracking-tight font-medium w-fit text-xs md:text-sm"
              >
                {name}
              </a>
            )}
            {size && (
              <Paragraph size="xs" weight="light">
                Size: <strong>{size}</strong>
              </Paragraph>
            )}
            {color && (
              <Paragraph size="xs" weight="light">
                Color: <strong>{color}</strong>
              </Paragraph>
            )}
          </div>
          <div className="w-full flex flex-col space-y-2 items-start md:items-end">
            {price && (
              <Paragraph size="xs" weight="light">
                <strong>{price}</strong>
              </Paragraph>
            )}
            {amount && (
              <div className="inline-block">
                <Button variant="secondary" size="sm" className="!p-2">
                  <LineIcon className="w-3 h-3" />
                </Button>
                <div className="w-[30px] border-y border-zinc-800 p-1.5 text-xs text-center inline-block align-middle">
                  <span>{amount}</span>
                </div>
                <Button variant="secondary" size="sm" className="!p-2">
                  <PlusIcon className="w-3 h-3" />
                </Button>
              </div>
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
      <a href="#">
        <div className="bg-gray-300 w-[110px] h-[150px] sm:w-[150px] sm:h-[200px]"></div>
      </a>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-2">
        <div className="w-full lg:w-6/12 flex flex-col space-y-1">
          {name && (
            <a
              href="#"
              className="uppercase tracking-tight font-medium text-sm lg:text-base w-fit"
            >
              {name}
            </a>
          )}
          {size && (
            <Paragraph size="xs" weight="light">
              Size: <strong>{size}</strong>
            </Paragraph>
          )}
          {color && (
            <Paragraph size="xs" weight="light">
              Color: <strong>{color}</strong>
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
        {amount && (
          <div className="w-full lg:w-3/12 inline-block text-left">
            <Button variant="secondary" size="sm" className="!p-2">
              <LineIcon className="w-3 h-3" />
            </Button>
            <div className="w-[30px] border-y border-zinc-800 p-1.5 text-xs text-center inline-block align-middle">
              <span>{amount}</span>
            </div>
            <Button variant="secondary" size="sm" className="!p-2">
              <PlusIcon className="w-3 h-3" />
            </Button>
          </div>
        )}
        {price && (
          <Paragraph
            size="sm"
            weight="light"
            className="w-full lg:w-3/12 text-left lg:text-right"
          >
            <strong>{price}</strong>
          </Paragraph>
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
