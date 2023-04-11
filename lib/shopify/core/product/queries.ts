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
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
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
          compareAtPrice {
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

export const GET_PRODUCT_RELATED_RECOMMENDATIONS = gql`
  ${PRODUCT_FRAGMENT}

  query GetProductRelatedRecommendations($productId: ID!) {
    productRecommendations(productId: $productId, intent: RELATED) {
      ...ProductFragment
    }
  }
`
