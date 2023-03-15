import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Cart } from 'lib/types/cart'

export interface CartState {
  cart: Cart
  updateCart: (cart: Cart) => void
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: {},
        updateCart: (cart) => set(() => ({ cart })),
      }),
      { name: 'cart' }
    )
  )
)
