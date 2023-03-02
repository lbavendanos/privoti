import Button from '@/common/components/Button'
import Heading from '@/common/components/Heading'
import Container from '@/common/components/Container'
import Paragraph from '@/common/components/Paragraph'
import ShippingInfo from '@/common/components/ShippingInfo'
import QuantityFormControl from '@/common/components/QuantityFormControl'

export default function ProductModule() {
  return (
    <Container className="my-6 md:my-10">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row gap-y-4">
          <div className="w-full md:w-8/12 p-0 md:pr-4">
            <div className="bg-gray-300 w-full h-[600px]" />
          </div>
          <div className="w-full md:w-4/12 p-0 md:pl-4">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <Heading as="h1">UZO TOP BLUE</Heading>
                <Paragraph size="lg" weight="light">
                  <strong>S/. 49.90 PEN</strong>
                </Paragraph>
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
              <div className="w-full">
                <Paragraph size="sm" weight="light">
                  Top Crop de Pijama in a cliff point designed with a minimum
                  seam for a more comfortable and soft sensation. Model fitted
                  with wide braces and wide neckline.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
