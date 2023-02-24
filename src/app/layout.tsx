import { config } from '@/lib/utils/helpers'
import { Metadata } from 'next'
import { Roboto_Mono } from '@next/font/google'
import Link from 'next/link'
import Container from '@/common/components/Container'
import '@/styles/app.css'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: config('app.name'),
    template: `%s | ${config('app.name')}`,
  },
  description: `Welcome to ${config('app.name')}`,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const appName = config<string>('app.name')

  return (
    <html lang="en" className={roboto.className}>
      <body className="flex flex-col min-h-screen">
        <header className="border-b bg-white">
          <Container>
            <div className="flex justify-between -ml-4">
              <nav>
                <ul className="flex">
                  <li className="p-4">
                    <Link href="/" className="text-black">
                      Home
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </header>
        <main className="grow">{children}</main>
        <footer className="flex justify-center items-center h-10 border-t bg-white">
          <Container>
            <div className="flex text-sm">
              <div className="flex-1 text-left">{appName.toUpperCase()}</div>
              <div className="flex-1 text-right">2023</div>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  )
}
