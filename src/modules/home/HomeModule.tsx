import { cn } from 'lib/utils/helpers'
import { url } from 'lib/utils/url'
import { fetcher } from 'lib/utils/http'
import { Products } from 'lib/types/product'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import HomeBanner from './components/HomeBanner'
import ProductCard from '@/common/components/ProductCard'

interface ProductsResponse {
  data: Products
}

export default async function HomeModule() {
  const { data: products } = await fetcher<ProductsResponse>(
    url('/api/products'),
    {
      next: { revalidate: 60 },
    }
  )

  return (
    <div className="flex flex-col">
      <HomeBanner />
      <Container className="my-10">
        <div className="flex flex-col space-y-3">
          <Heading as="h2">Featured products</Heading>
          <div
            className={cn(
              'grid grid-cols-2 gap-4',
              'md:grid-cols-3',
              'lg:grid-cols-4',
              'xl:grid-cols-5',
              '2xl:grid-cols-6'
            )}
          >
            {products.map(({ id, ...product }) => (
              <ProductCard key={id} {...product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
