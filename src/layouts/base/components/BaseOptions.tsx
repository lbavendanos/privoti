import { SearchIcon, ShoppingIcon } from '@/common/components/Icons'

export default function BaseOptions() {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-zinc-800">
        <SearchIcon className="w-6 h-6" />
      </a>
      <a href="#" className="text-zinc-800">
        <ShoppingIcon className="w-6 h-6" />
      </a>
    </div>
  )
}
