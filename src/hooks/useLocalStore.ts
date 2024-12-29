import { useEffect } from "react";
import { useCartStore } from "../store/cart-store";

export default function useLocalStore() {
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart };
}
