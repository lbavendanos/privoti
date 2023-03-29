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
          availableForSale
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
  query GetProductSlugs($first: Int) {
    products(first: $first) {
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

  query GetProducts($query: String, $first: Int) {
    products(query: $query, first: $first) {
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
