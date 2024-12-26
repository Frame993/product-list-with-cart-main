import { create } from "zustand";
import { Products } from "../interfaces/products";

interface CartStore {
  cart: Products[];
  decreaseQuantityFromCart: (product: number) => void;
  addToCart: (product: Products) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  // addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart:(productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),

  addToCart: (product) =>
    set((state) => {
      if (state.cart.some((item) => item.id === product.id)) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
    decreaseQuantityFromCart: (product) =>
    set((state) => {
      if (state.cart.some((item) => item.id === product && item.quantity > 1)) {
        return {
          cart: state.cart.map((item) =>
            item.id === product
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return { cart: state.cart.filter((item) => item.id !== product) };
      }
    }),

  clearCart: () => set({ cart: [] }),
}));