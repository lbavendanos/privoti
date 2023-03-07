import { cn } from 'lib/utils/helpers'
import { getProducts } from 'lib/graphql/product'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import HomeBanner from './components/HomeBanner'
import ProductCard from '@/common/components/ProductCard'

export default async function HomeModule() {
  const products = await getProducts()

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
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
