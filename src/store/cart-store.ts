import { create } from 'zustand';
import { Products } from '../interfaces/products';

interface CartStore {
  cart: Products[];
  addToCart: (product: Products) => void;
  removeFromCart: (productId : number) => void;
  clearCart: () => void;
}


export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart:(productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
  clearCart: () => set({ cart: [] }),
}));


