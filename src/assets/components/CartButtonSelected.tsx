import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";
import decrement from "../images/icon-decrement-quantity.svg";
import increment from "../images/icon-increment-quantity.svg";

interface Props {
  item: Products;
}

export default function CartButtonSelected({item}: Props) {

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <>
      <button className="flex items-center justify-between gap-1 px-2 py-2 rounded-full bg-Red border border-Red absolute -bottom-4 left-1/2 -translate-x-1/2 w-[150px]">
        <button onClick={() => removeFromCart(item.id)}>
          <img
            src={decrement}
            alt="cart icon"
            className="border rounded-full aspect-square p-1 h-5"
          />
        </button>
        <span className="text-sm font-semibold text-white "></span>
        <button onClick={() => addToCart(item)}>
          <img
            src={increment}
            alt="cart icon"
            className="border rounded-full aspect-square p-1  h-5"
          />
        </button>
      </button>
    </>
  );
}
