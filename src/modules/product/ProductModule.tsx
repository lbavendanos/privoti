import { cn } from 'lib/utils/helpers'
import { getProduct } from 'lib/graphql/product'
import Image from 'next/image'
import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import Paragraph from '@/common/components/Paragraph'
import ShippingInfo from '@/common/components/ShippingInfo'
import ProductPrice from '@/common/components/ProductPrice'
import QuantityFormControl from '@/common/components/QuantityFormControl'

interface ProductModuleProps extends React.ComponentPropsWithoutRef<'div'> {
  slug: string
}

export default async function ProductModule({
  slug,
  className,
  ...props
}: ProductModuleProps) {
  const product = await getProduct(slug)

  return (
    <Container {...props} className={cn('my-6 md:my-10', className)}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row gap-y-4">
          <div className="w-full md:w-8/12 p-0 md:pr-4">
            <div className="flex space-x-2">
              {product.images?.at(0) && (
                <figure className="bg-gray-300 w-full h-auto lg:w-1/2">
                  <Image
                    src={product.images.at(0)?.src!}
                    alt={product.images.at(0)?.alt! || product.name!}
                    blurDataURL={product.images.at(0)?.blurDataURL!}
                    placeholder="blur"
                    width={510}
                    height={600}
                  />
                </figure>
              )}
              {product.images?.at(1) && (
                <figure className="bg-gray-300 w-full h-auto lg:w-1/2">
                  <Image
                    src={product.images.at(1)?.src!}
                    alt={product.images.at(1)?.alt! || product.name!}
                    blurDataURL={product.images.at(1)?.blurDataURL!}
                    placeholder="blur"
                    width={510}
                    height={600}
                  />
                </figure>
              )}
            </div>
          </div>
          <div className="w-full md:w-4/12 p-0 md:pl-4">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                {product.name && <Heading as="h1">{product.name}</Heading>}
                {product.priceRange?.minVariantPrice && (
                  <ProductPrice
                    size="lg"
                    weight="light"
                    {...product.priceRange?.minVariantPrice}
                  />
                )}
                <ShippingInfo />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
                  <Paragraph size="xs" weight="medium">
                    <strong>Size:</strong>
                  </Paragraph>
                  <div className="flex flex-nowrap gap-2">
                    <button className="btn btn-md w-20 bg-tertiary-200">
                      XS
                    </button>
                    <button className="btn btn-md w-20 hover:bg-tertiary-200">
                      S
                    </button>
                    <button className="btn btn-md w-20 hover:bg-tertiary-200">
                      M
                    </button>
                    <button className="btn btn-md w-20 hover:bg-tertiary-200">
                      L
                    </button>
                    <button className="btn btn-md w-20 hover:bg-tertiary-200">
                      XL
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Paragraph size="xs" weight="medium">
                    <strong>Quantity:</strong>
                  </Paragraph>
                  <QuantityFormControl value={1} />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <Button variant="dark" size="lg">
                  Add to my cart
                </Button>
                <Button variant="primary" size="lg">
                  Buy now
                </Button>
              </div>
              {product.description && (
                <div className="w-full">
                  <Paragraph size="sm" weight="light">
                    {product.description}
                  </Paragraph>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
