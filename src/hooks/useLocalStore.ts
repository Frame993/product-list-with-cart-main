import { useEffect } from "react";
import { useCartStore } from "../store/cart-store";


export default function useLocalStore() {

  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      useCartStore.setState({ cart: JSON.parse(cart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(useCartStore.getState().cart));
  }, [cart]);
  
  

  return { cart };
}
