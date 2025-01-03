import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";
import decrement from "/icon-decrement-quantity.svg";
import increment from "/icon-increment-quantity.svg";

interface Props {
  item: Products;
}

export default function CartButtonSelected({ item }: Props) {
 
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantityFromCart = useCartStore(
    (state) => state.decreaseQuantityFromCart
  );

  const count = cart.filter((product) => product.id === item.id)[0].quantity;

  return (
    <>
      <div className="flex items-center justify-between gap-1 px-2 py-2 rounded-full bg-Red border border-Red w-[150px]">
        {/* REMOVE */}
        <button onClick={() => decreaseQuantityFromCart(item.id)}>
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
