import HomeModule from '@/modules/home/HomeModule'

export default function HomePage() {
  /* @ts-expect-error Async Server Component */
  return <HomeModule />
}
