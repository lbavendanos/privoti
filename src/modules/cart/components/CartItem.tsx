import { cn } from 'lib/utils/helpers'
import { LineIcon, PlusIcon } from '@/common/components/Icons'
import Button from '@/common/components/Button'
import Paragraph from '@/common/components/Paragraph'

export default function CartItem() {
  return (
    <div className="flex flex-nowrap space-x-4">
      <a href="#">
        <div className="bg-gray-300 w-[110px] h-[150px] sm:w-[150px] sm:h-[200px]"></div>
      </a>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-2">
        <div className="w-full lg:w-6/12 flex flex-col space-y-1">
          <a
            href="#"
            className="uppercase tracking-tight font-medium text-sm lg:text-base w-fit"
          >
            Marida top pink
          </a>
          <Paragraph size="xs" weight="light">
            Size: <strong>Extra small</strong>
          </Paragraph>
          <Paragraph size="xs" weight="light">
            Color: <strong>Black</strong>
          </Paragraph>
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
        <div className="w-full lg:w-3/12 inline-block text-left lg:text-left">
          <Button variant="secondary" size="sm" className="!p-2">
            <LineIcon className="w-3 h-3" />
          </Button>
          <div className="w-[30px] border-y border-zinc-800 p-1.5 text-xs text-center inline-block align-middle">
            <span>1</span>
          </div>
          <Button variant="secondary" size="sm" className="!p-2">
            <PlusIcon className="w-3 h-3" />
          </Button>
        </div>
        <Paragraph
          size="sm"
          weight="light"
          className="w-full lg:w-3/12 text-left lg:text-right"
        >
          <strong>S/. 179.80 PEN</strong>
        </Paragraph>
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
