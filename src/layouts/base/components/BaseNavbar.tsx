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
            Inicio
          </BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink
            href="/collections"
            className={linkClassName}
            onClick={onChange}
          >
            Colecciones
          </BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink
            href="/contact"
            className={linkClassName}
            onClick={onChange}
          >
            Contacto
          </BaseNavbarLink>
        </li>
      </ul>
    </nav>
  )
}
