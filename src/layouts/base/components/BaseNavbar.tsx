import BaseNavbarLink from './BaseNavbarLink'

interface BaseNavbarProps extends React.ComponentPropsWithoutRef<'nav'> {
  menuClassName?: string
  itemClassName?: string
  linkClassName?: string
}

export default function BaseNavbar({
  menuClassName,
  itemClassName,
  linkClassName,
  ...props
}: BaseNavbarProps) {
  return (
    <nav {...props}>
      <ul className={menuClassName}>
        <li className={itemClassName}>
          <BaseNavbarLink href="/" className={linkClassName}>
            Home
          </BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/catalog" className={linkClassName}>
            Catalog
          </BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/contact" className={linkClassName}>
            Contact
          </BaseNavbarLink>
        </li>
      </ul>
    </nav>
  )
}
