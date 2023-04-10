import { cn } from 'lib/utils/helpers'
import { getProductCache } from 'lib/shopify/core/product'
import { Suspense } from 'react'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import Paragraph from '@/common/components/Paragraph'
import ProductForm from './components/ProductForm'
import ProductCarousel from './components/ProductCarousel'
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
        <div className="flex flex-col lg:flex-row gap-y-4">
          <div className="w-full lg:w-8/12 p-0 lg:pr-4">
            <ProductCarousel images={images} defaultAlt={title} />
          </div>
          <div className="w-full lg:w-4/12 p-0 lg:pl-4">
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
