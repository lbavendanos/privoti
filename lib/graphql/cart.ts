import { gql } from 'lib/utils/helpers'
import { shopifyFetch } from 'lib/utils/shopify'
import { Cart } from 'lib/types/cart'

export const CREATE_CART_QUERY = gql`
  mutation CreateCart($merchandiseId: ID!, $quantity: Int!) {
    cartCreate(
      input: { lines: { merchandiseId: $merchandiseId, quantity: $quantity } }
    ) {
      cart {
        id
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

export const UPDATE_ITEM_QUERY = gql`
  mutation UpdateCart($cartId: ID!, $merchandiseId: ID!) {
    cartLinesAdd(lines: { merchandiseId: $merchandiseId }, cartId: $cartId) {
      cart {
        id
      }
    }
  }
`

export async function createCart(
  productId: string,
  quantity: number
): Promise<Cart> {
  const response = await shopifyFetch(CREATE_CART_QUERY, {
    merchandiseId: productId,
    quantity,
  })

  return response.body.data.cart
}
