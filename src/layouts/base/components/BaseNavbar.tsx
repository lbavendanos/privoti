import BaseNavbarLink from './BaseNavbarLink'

export interface BaseNavbarProps extends React.ComponentPropsWithoutRef<'nav'> {
  menuClassName?: string
  itemClassName?: string
  linkClassName?: string
  onChange?: () => void
}

export default function BaseNavbar({
  menuClassName,
  itemClassName,
  linkClassName,
  onChange,
  ...props
}: BaseNavbarProps) {
  return (
    <nav {...props}>
      <ul className={menuClassName}>
        <li className={itemClassName}>
          <BaseNavbarLink href="/" className={linkClassName} onClick={onChange}>
            Home
          </BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink
            href="/catalog"
            className={linkClassName}
            onClick={onChange}
          >
            Catalog
          </BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink
            href="/contact"
            className={linkClassName}
            onClick={onChange}
          >
            Contact
          </BaseNavbarLink>
        </li>
      </ul>
    </nav>
  )
}
