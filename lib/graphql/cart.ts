import { gql } from 'lib/utils/helpers'
import { shopifyFetcher } from 'lib/utils/shopify'
import { Cart } from 'lib/types/cart'

export const CREATE_CART = gql`
  mutation CreateCart($merchandiseId: ID!, $quantity: Int!) {
    cartCreate(
      input: { lines: { merchandiseId: $merchandiseId, quantity: $quantity } }
    ) {
      cart {
        id
        totalQuantity
        checkoutUrl
        cost {
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
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  image {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const GET_CART_QUERY = gql`
  query GetCart($id: ID!) {
    cart(id: $id) {
      id
      totalQuantity
      checkoutUrl
      cost {
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
            merchandise {
              ... on ProductVariant {
                id
                title
                image {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export const ADD_ITEM_TO_CART = gql`
  mutation UpdateCart($cartId: ID!, $merchandiseId: ID!, $quantity: Int!) {
    cartLinesAdd(
      lines: { merchandiseId: $merchandiseId, quantity: $quantity }
      cartId: $cartId
    ) {
      cart {
        id
        totalQuantity
        checkoutUrl
        cost {
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
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  image {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export async function createCart(
  variantId: string,
  quantity: number
): Promise<Cart> {
  const response = await shopifyFetcher(CREATE_CART, {
    merchandiseId: variantId,
    quantity,
  })

  return response.cartCreate.cart
}

export async function addItemToCart(
  cartId: string,
  variantId: string,
  quantity: number = 1
): Promise<Cart> {
  const response = await shopifyFetcher(ADD_ITEM_TO_CART, {
    cartId,
    merchandiseId: variantId,
    quantity,
  })

  return response.cartLinesAdd.cart
}
