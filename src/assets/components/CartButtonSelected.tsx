import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";
import decrement from "../images/icon-decrement-quantity.svg";
import increment from "../images/icon-increment-quantity.svg";

interface Props {
  item: Products;
}

export default function CartButtonSelected({ item }: Props) {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const count = cart.filter((product) => product.id === item.id).length;

  return (
    <>
      <div className="flex items-center justify-between gap-1 px-2 py-2 rounded-full bg-Red border border-Red absolute -bottom-4 left-1/2 -translate-x-1/2 w-[150px]">
        {/* REMOVE */}
        <button onClick={() => removeFromCart(item.id)}>
          <img
            src={decrement}
            alt="cart icon"
            className="rounded-full aspect-square p-1 h-4"
          />
        </button>
        {/* REMOVE */}
        <span className="text-sm font-semibold text-white ">{count}</span>
        {/* ADD */}
        <button onClick={() => addToCart(item)}>
          <img
            src={increment}
            alt="cart icon"
            className="rounded-full aspect-square p-1 h-4"
          />
        </button>
        {/* ADD */}
      </div>
    </>
  );
}
