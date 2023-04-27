import { gql } from 'lib/utils/graphql'

export const CUSTOMER_FRAGMENT = gql`
  fragment CustomerFragment on Customer {
    id
    email
    firstName
    lastName
    phone
    displayName
    acceptsMarketing
  }
`

export const CREATE_CUSTOMER = gql`
  ${CUSTOMER_FRAGMENT}

  mutation CreateCustomer($email: String) {
    customerCreate(input: { email: $email, acceptsMarketing: true }) {
      customer {
        ...CustomerFragment
      }
    }
  }
`
