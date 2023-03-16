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
