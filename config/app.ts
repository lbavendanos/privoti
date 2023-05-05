const app = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'App',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  domain: process.env.NEXT_PUBLIC_APP_DOMAIN || 'localhost:3000',
  timezone: process.env.NEXT_PUBLIC_APP_TIMEZONE || 'UTC',
  locale: process.env.NEXT_PUBLIC_APP_LOCALE || 'en-US',
  language: process.env.NEXT_PUBLIC_APP_LANGUAGE || 'EN',
  country_code: process.env.NEXT_PUBLIC_APP_COUNTRY_CODE || 'US',
}

export default app
