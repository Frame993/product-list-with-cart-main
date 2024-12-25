import { useCartStore } from "../../store/cart-store";
import empty_cart from "../images/illustration-empty-cart.svg";
import delete_icon from "../images/icon-remove-item.svg";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <aside className="w-[350px] bg-Rose-50 rounded-lg p-4 flex flex-col justify-center items-start">
      <div className="flex justify-between w-full mb-4">
        <h2 className="text-lg font-bold text-Red">
          Your Cart <span>({cart.length})</span>
        </h2>
        <button onClick={() => clearCart()}>Clear</button>
      </div>
      {cart.length > 0 ? (
        <ul className="w-full">
          {cart.map((item) => (
            <li
              className="flex w-full border-b py-2 justify-between mb-4"
              key={item.id}
            >
              <div>
                <p className="text-xs font-semibold">{item.name}</p>
                <div className="flex gap-1">
                  <p className="text-xs font-semibold text-Red">4x</p>
                  <p className="text-xs">
                    @ {"$" + item.price}{" "}
                    <span className="font-semibold">total</span>
                  </p>
                </div>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                <img src={delete_icon} alt="delete icon" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-4 p-8 w-full">
          <img
            src={empty_cart}
            alt="empty_cart"
            width={100}
            className="aspect-square"
          />
          <p className="text-center text-xs text-Rose-500 font-semibold">
            Your added items will appear here{" "}
          </p>
        </div>
      )}
    </aside>
  );
}
