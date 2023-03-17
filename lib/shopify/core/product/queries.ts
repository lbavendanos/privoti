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

export const GET_PRODUCT_SLUGS = gql`
  query GetProductSlugs {
    products(first: 10, sortKey: CREATED_AT) {
      edges {
        node {
          handle
        }
      }
    }
  }
`

export const GET_PRODUCTS = gql`
  ${PRODUCT_FRAGMENT}

  query GetProducts {
    products(first: 10, sortKey: CREATED_AT) {
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
`

export const GET_PRODUCT = gql`
  ${PRODUCT_FRAGMENT}

  query GetProduct($handle: String!) {
    product(handle: $handle) {
      ...ProductFragment
    }
  }
`
