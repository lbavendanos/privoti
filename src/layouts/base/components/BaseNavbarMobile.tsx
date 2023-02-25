import { MenuIcon } from '@/common/components/Icons'

interface BaseNavbarMobileProps extends React.ComponentPropsWithoutRef<'nav'> {}

export default function BaseNavbarMobile(props: BaseNavbarMobileProps) {
  return (
    <div {...props}>
      <button type="button">
        <MenuIcon className="w-6 h-6" />
      </button>
    </div>
  )
}
