import { gql } from 'lib/utils/graphql'

export const CHECKOUT_FRAGMENT = gql`
  fragment CheckoutFragment on Checkout {
    id
    email
    ready
    webUrl
    taxExempt
    currencyCode
    taxesIncluded
    requiresShipping
  }
`

export const CREATE_CHECKOUT = gql`
  ${CHECKOUT_FRAGMENT}

  mutation CreateCheckout($input: CheckoutCreateInput = {}) {
    checkoutCreate(input: $input) {
      queueToken
      checkout {
        ...CheckoutFragment
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`
