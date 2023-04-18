import { cn } from 'lib/utils/helpers'
import { getProductCache } from 'lib/shopify/core/product'
import { Suspense } from 'react'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import Paragraph from '@/common/components/Paragraph'
import ProductForm from './components/ProductForm'
import ProductJsonLd from './components/ProductJsonLd'
import ProductCarousel from './components/ProductCarousel'
import ProductFormFallback from './components/ProductFormFallback'
import ProductRecommendations from './components/ProductRecommendations'

interface ProductModuleProps extends React.ComponentPropsWithoutRef<'div'> {
  slug: string
}

export default async function ProductModule({
  slug,
  className,
  ...props
}: ProductModuleProps) {
  const { id, handle, title, description, availableForSale, images, variants } =
    await getProductCache(slug)

  return (
    <Container {...props} className={cn('my-6 md:my-10', className)}>
      {/* @ts-expect-error Async Server Component */}
      <ProductJsonLd slug={slug} />
      <div className="flex flex-col space-y-10">
        <div
          className={cn(
            'flex flex-col md:flex-row gap-4 lg:gap-x-10',
            'max-w-[1024px] mx-auto'
          )}
        >
          <div className="w-full md:w-6/12 lg:w-7/12">
            <ProductCarousel images={images} defaultAlt={title} />
          </div>
          <div className="w-full md:w-6/12 lg:w-5/12">
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
        {id && <ProductRecommendations productId={id} />}
      </div>
    </Container>
  )
}
