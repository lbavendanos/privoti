import { url } from 'lib/utils/url'
import { config } from 'lib/utils/helpers'
import { Metadata } from 'next'
import { Roboto_Mono } from '@next/font/google'
import BaseLogo from '@/layouts/base/components/BaseLogo'
import Container from '@/common/components/Container'
import BaseNavbar from '@/layouts/base/components/BaseNavbar'
import BaseFooter from '@/layouts/base/components/BaseFooter'
import 'styles/app.css'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const appName = config('app.name')
  const description = `Welcome to ${appName}`

  return {
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
      url: url(),
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
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex flex-col min-h-screen bg-white">
        <header className="border-b border-zinc-800">
          <Container>
            <div className="flex items-center space-x-4">
              <BaseLogo />
              <BaseNavbar />
            </div>
          </Container>
        </header>
        <main className="grow">{children}</main>
        <BaseFooter />
      </body>
    </html>
  )
}
