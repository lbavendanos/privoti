const shopify = {
  domain:
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com',
  api_version:
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION || '2023-01',
  public_token:
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_PUBLIC_ACCESS_TOKEN || '',
  private_token: process.env.SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN || '',
}

export default shopify
