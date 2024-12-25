import { create } from 'zustand';

const useStore = create((set) => ({
  cart : 0,
  addProduct: () => set((state: { cart: number }) => ({ cart: state.cart + 1 })),
  removeProduct: () => set({cart: 0}),
}))

export default useStore
