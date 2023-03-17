import { gql } from 'lib/utils/graphql'
import { PRODUCT_FRAGMENT } from '../product/queries'

export const CART_FRAGMENT = gql`
  ${PRODUCT_FRAGMENT}

  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 10) {
      edges {
        node {
          id
          quantity
          cost {
            amountPerQuantity {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              quantityAvailable
              image {
                url
              }
              product {
                ...ProductFragment
              }
            }
          }
        }
      }
    }
  }
`

export const GET_CART = gql`
  ${CART_FRAGMENT}

  query GetCart($id: ID!) {
    cart(id: $id) {
      ...CartFragment
    }
  }
`

export const CREATE_CART = gql`
  ${CART_FRAGMENT}

  mutation CreateCart($merchandiseId: ID!, $quantity: Int!) {
    cartCreate(
      input: { lines: { merchandiseId: $merchandiseId, quantity: $quantity } }
    ) {
      cart {
        ...CartFragment
      }
    }
  }
`

export const ADD_LINE = gql`
  ${CART_FRAGMENT}

  mutation AddLineToCart($cartId: ID!, $merchandiseId: ID!, $quantity: Int!) {
    cartLinesAdd(
      lines: { merchandiseId: $merchandiseId, quantity: $quantity }
      cartId: $cartId
    ) {
      cart {
        ...CartFragment
      }
    }
  }
`

export const UPDATE_LINE = gql`
  ${CART_FRAGMENT}

  mutation UpdateLine(
    $cartId: ID!
    $id: ID!
    $merchandiseId: ID!
    $quantity: Int!
  ) {
    cartLinesUpdate(
      cartId: $cartId
      lines: { id: $id, merchandiseId: $merchandiseId, quantity: $quantity }
    ) {
      cart {
        ...CartFragment
      }
    }
  }
`

export const REMOVE_LINE = gql`
  ${CART_FRAGMENT}

  mutation RemoveLine($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartFragment
      }
    }
  }
`
