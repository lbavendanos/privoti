import { gql } from 'lib/utils/graphql'

export const PRODUCT_FRAGMENT = gql`
  fragment ProductFragment on Product {
    handle
    id
    title
    description
    availableForSale
    totalInventory
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 10) {
      edges {
        node {
          id
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          currentlyNotInStock
          quantityAvailable
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`

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
          }
          merchandise {
            ... on ProductVariant {
              id
              title
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

export const GET_CART_QUERY = gql`
  ${CART_FRAGMENT}

  query GetCart($id: ID!) {
    cart(id: $id) {
      ...CartFragment
    }
  }
`
