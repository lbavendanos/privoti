import { url } from 'lib/utils/url'
import { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/admin',
          '/account',
          '/orders',
          '/cart',
          '/carts',
          '/checkouts/',
          '/checkout',
        ],
      },
      {
        userAgent: 'adsbot-google',
        disallow: ['/checkouts/', '/checkout', '/carts', '/orders'],
      },
      {
        userAgent: 'Pinterest',
        crawlDelay: 1,
      },
    ],
    sitemap: url('sitemap.xml'),
    host: url(),
  }
}
