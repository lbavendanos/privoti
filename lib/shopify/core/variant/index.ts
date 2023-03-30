import { Variants } from 'lib/shopify/types/variant'

export function getShortVariantId(id: string) {
  return id.replace('gid://shopify/ProductVariant/', '')
}

export function getShortVariantTitle(title: string) {
  const name = title.toLowerCase()

  if (name === 'extra small') return 'xs'
  if (name === 'small') return 's'
  if (name === 'medium') return 'm'
  if (name === 'large') return 'l'
  if (name === 'extra large') return 'xl'
}

export function getDefaultVariant(
  variants: Variants,
  availableForSale?: boolean
) {
  return availableForSale
    ? variants.edges?.find(({ node }) => node?.availableForSale)?.node
    : variants.edges?.at(0)?.node
}

export function findVariantByShortId(id: string, variants: Variants) {
  return variants.edges?.find(({ node }) => getShortVariantId(node?.id!) === id)
    ?.node
}
