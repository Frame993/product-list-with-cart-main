import CartButtonSelected from "./CartButtonSelected";
import CartButton from "./CartButton";
import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";

interface Props {
  className?: string;
  item: Products;
}

export default function CartButtonMain({ className, item }: Props) {

  const cart = useCartStore((state) => state.cart);

  return (
    <div className={`${className}`}>
      {cart.some((product) => product.id === item.id) ? (
        <CartButtonSelected item={item} />
      ) : (
        <CartButton item={item}/>
      )}
    </div>
  );
}
