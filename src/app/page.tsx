import HomeModule from '@/modules/home/HomeModule'

export default function HomePage() {
  /* @ts-expect-error Server Component */
  return <HomeModule />
}
