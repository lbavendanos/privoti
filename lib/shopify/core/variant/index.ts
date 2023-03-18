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
