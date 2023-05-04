import { shopifyFetcher } from 'lib/shopify/utils'
import { CREATE_CHECKOUT } from './queries'
import { Checkout, CheckoutCreateInput } from 'lib/shopify/types/checkout'

export async function createCheckout(
  input: CheckoutCreateInput
): Promise<Checkout> {
  const response = await shopifyFetcher(CREATE_CHECKOUT, { input })

  return response.checkoutCreate.checkout
}
