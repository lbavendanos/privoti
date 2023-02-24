import BaseNavbarLink from './BaseNavbarLink'

export default function BaseNavbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <ul className="flex -ml-3">
        <li>
          <BaseNavbarLink href="/">Home</BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/catalog">Catalog</BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/contact">Contact</BaseNavbarLink>
        </li>
      </ul>
    </nav>
  )
}
