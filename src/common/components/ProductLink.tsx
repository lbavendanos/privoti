import Link, { LinkProps } from 'next/link'

export interface ProductLinkProps
  extends Omit<React.ComponentPropsWithRef<'a'>, 'href'>,
    LinkProps {}

export default function ProductLink({ href, ...props }: ProductLinkProps) {
  return <Link {...props} href={`/products/${href}`} />
}
