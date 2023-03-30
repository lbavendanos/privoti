import { cn } from 'lib/utils/helpers'
import { getProductCache } from 'lib/shopify/core/product'
import { Suspense } from 'react'
import Image from 'next/image'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import Paragraph from '@/common/components/Paragraph'
import ProductForm from './components/ProductForm'
import ProductFormFallback from './components/ProductFormFallback'

interface ProductModuleProps extends React.ComponentPropsWithoutRef<'div'> {
  slug: string
}

export default async function ProductModule({
  slug,
  className,
  ...props
}: ProductModuleProps) {
  const { handle, title, description, availableForSale, images, variants } =
    await getProductCache(slug)

  return (
    <Container {...props} className={cn('my-6 md:my-10', className)}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row gap-y-4">
          <div className="w-full md:w-8/12 p-0 md:pr-4">
            <div className="flex space-x-2">
              {images?.edges?.at(0)?.node && (
                <figure className="w-full h-auto lg:w-1/2">
                  <Image
                    className="object-cover w-full h-full"
                    src={images.edges.at(0)?.node?.url!}
                    alt={images.edges.at(0)?.node?.altText || title!}
                    width={images.edges.at(0)?.node?.width}
                    height={images.edges.at(0)?.node?.height}
                    quality={100}
                  />
                </figure>
              )}
              {images?.edges?.at(1)?.node && (
                <figure className="w-full h-auto lg:w-1/2">
                  <Image
                    className="object-cover w-full h-full"
                    src={images.edges.at(1)?.node?.url!}
                    alt={images.edges.at(1)?.node?.altText || title!}
                    width={images.edges.at(1)?.node?.width}
                    height={images.edges.at(1)?.node?.height}
                    quality={100}
                  />
                </figure>
              )}
            </div>
          </div>
          <div className="w-full md:w-4/12 p-0 md:pl-4">
            {title && (
              <Heading as="h1" className="mb-2">
                {title}
              </Heading>
            )}
            {variants && handle && (
              <div className="w-full mb-6">
                <Suspense
                  fallback={
                    <ProductFormFallback
                      variants={variants}
                      availableForSale={availableForSale}
                    />
                  }
                >
                  <ProductForm
                    url={handle}
                    variants={variants}
                    availableForSale={availableForSale}
                  />
                </Suspense>
              </div>
            )}
            {description && (
              <div className="w-full">
                <Paragraph size="sm" weight="light">
                  {description}
                </Paragraph>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
