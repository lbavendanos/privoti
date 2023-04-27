import { shopifyFetcher } from 'lib/shopify/utils'
import { CREATE_CUSTOMER } from './queries'

export async function createCustomer(email: string) {
  const response = await shopifyFetcher(CREATE_CUSTOMER, {
    email,
  })

  return response.customerCreate.customer
}
