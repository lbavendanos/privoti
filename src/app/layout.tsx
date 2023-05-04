import { config } from 'lib/utils/helpers'
import { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import BaseLogo from '@/layouts/base/components/BaseLogo'
import Container from '@/common/components/Container'
import Separator from '@/common/components/Separator'
import BaseFooter from '@/layouts/base/components/BaseFooter'
import SSRProvider from '@/common/components/SSRProvider'
import BaseNavbarOptions from '@/layouts/base/components/BaseNavbarOptions'
import BaseNavbarDesktop from '@/layouts/base/components/BaseNavbarDesktop'
import BaseNavbarMobileToggleButton from '@/layouts/base/components/BaseNavbarMobileToggleButton'
import 'styles/app.css'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const appName = config<string>('app.name')
  const appUrl = config<string>('app.url')
  const description = `${appName} es una boutique de moda en línea de Perú para mujer. Encuentra calzado, ropa y accesorios de marcas exclusivas y modelos de edición limitada.`

  return {
    metadataBase: new URL(appUrl),
    title: {
      default: appName,
      template: `%s | ${appName}`,
    },
    description: description,
    openGraph: {
      title: {
        default: appName,
        template: `%s | ${appName}`,
      },
      description: description,
      type: 'website',
      url: '/',
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const appLocale = config<string>('app.locale')

  return (
    <html lang={appLocale} className={roboto.className}>
      <body className="flex flex-col min-h-screen bg-white text-zinc-800">
        <SSRProvider>
          <header className="border-b border-zinc-800 py-3 md:py-2">
            <Container>
              <div className="grid grid-cols-3 md:grid-cols-2 items-center">
                <BaseNavbarMobileToggleButton className="block md:hidden justify-self-start" />
                <div className="flex items-center space-x-8 justify-self-center md:justify-self-start">
                  <BaseLogo />
                  <BaseNavbarDesktop className="hidden md:block" />
                </div>
                <BaseNavbarOptions className="justify-self-end" />
              </div>
            </Container>
          </header>
          <main className="grow">{children}</main>
          <Separator />
          <BaseFooter />
        </SSRProvider>
      </body>
    </html>
  )
}
