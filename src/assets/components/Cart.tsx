import { useCartStore } from "../../store/cart-store";
import empty_cart from "../../../public/illustration-empty-cart.svg";
import delete_icon from "../../../public/icon-remove-item.svg";
import carbon_img from "../../../public/icon-carbon-neutral.svg";

interface Props {
  onClick: () => void;
}

export default function Cart({ onClick }: Props) {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <aside className="md:w-[350px] w-full bg-Rose-50 rounded-lg p-6 flex flex-col justify-center items-start">
      <div className="flex justify-between w-full mb-4">
        <h2 className="text-lg font-bold text-Red">
          Your Cart <span>({cart.length})</span>
        </h2>
        <button
          className={`font-semibold text-xs hover:text-Red ${
            cart.length > 0
              ? "text-Rose-900 "
              : "pointer-events-none text-Rose-300"
          }`}
          onClick={() => clearCart()}
        >
          Clear
        </button>
      </div>
      {cart.length > 0 ? (
        <>
          <ul className="w-full">
            {cart.map((item) => (
              <li
                className="flex w-full border-b py-2 justify-between mb-4"
                key={item.id}
              >
                <div>
                  <p className="text-xs font-semibold">{item.name}</p>
                  <div className="flex gap-2">
                    <p className="text-xs font-semibold text-Red">
                      x{item.quantity}
                    </p>
                    <p className="text-xs font-medium text-Rose-400">
                      @ {"$" + item.price}{" "}
                      <span className="font-semibold ml-1 ">
                        {"$" + item.price * item.quantity}
                      </span>
                    </p>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  <img src={delete_icon} alt="delete icon" />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex w-full items-center justify-between my-4">
            <p className="text-xs font-semibold">Order Total</p>
            <p className="text-3xl font-bold text-Rose-900">
              {/* total */}
              {"$" +
                cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
          </div>

          <div className="w-full flex gap-2 justify-center py-4 my-4 bg-Rose-100 rounded-lg">
            <img src={carbon_img} alt="carbon_neutral" />
            <p>
              This is a<span>Carbon Neutral</span>delievery
            </p>
          </div>
          {/* button order */}
          <button
            className="w-full bg-Red text-white py-4 rounded-full hover:bg-Rose-900"
            onClick={onClick}
          >
            Confirm Order
          </button>
          {/* button order */}
        </>
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
