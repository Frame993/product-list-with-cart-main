import CartButtonSelected from "./CartButtonSelected";
import CartButton from "./CartButton";
import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";
import useLocalStore from "../../hooks/useLocalStore";

interface Props {
  className?: string;
  item: Products;
}

export default function CartButtonMain({ className, item }: Props) {

  const { cart } = useLocalStore();
  // const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className={`${className}`}>
      {cart.some((product) => product.id === item.id) ? (
        <CartButtonSelected item={item} />
      ) : (
        <CartButton onClick={() => addToCart(item)} />
      )}
    </div>
  );
}
