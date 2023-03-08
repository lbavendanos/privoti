import HomeModule from '@/modules/home/HomeModule'

export const revalidate = 60

export default function HomePage() {
  /* @ts-expect-error Async Server Component */
  return <HomeModule />
}
