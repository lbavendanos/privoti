import { cn } from 'lib/utils/helpers'
import { shopifyFetch } from 'lib/utils/shopify'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import HomeBanner from './components/HomeBanner'
import ProductCard from '@/common/components/ProductCard'

export default async function HomeModule() {
  const gql = String.raw
  const queryPoducts = gql`
    query Products {
      products(first: 10, sortKey: CREATED_AT) {
        edges {
          node {
            handle
            title
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  altText
                  id
                  url(transform: { maxHeight: 600, maxWidth: 510 })
                }
              }
            }
          }
        }
      }
    }
  `

  const response = await shopifyFetch(queryPoducts)
  const edges: object[] = response.body.data.products.edges

  const products: object[] = edges.map(({ node }: any) => ({
    id: node.id,
    name: node.title,
    url: node.handle,
    priceRange: node.priceRange,
    images:
      node.images?.edges?.map(({ node }: any) => ({
        id: node.id,
        src: node.url,
        alt: node.altText,
      })) || [],
  }))

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
            {products.map((product: any) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
