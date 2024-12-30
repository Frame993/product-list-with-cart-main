import { useCartStore } from "../../store/cart-store";
import IconCheck from "../images/icon-order-confirmed.svg";

interface Props {
  onclick?: () => void;
  handleConfirm?: () => void;
}
export default function OrderConfirmation({ onclick, handleConfirm }: Props) {
  const cart = useCartStore((state) => state.cart);

  return (
    <section
      onClick={onclick}
      className="flex flex-col items-center justify-center w-full h-screen bg-black/50 z-50 fixed top-0"
    >
      <div className="flex flex-col items-left justify-center gap-2 bg-white rounded-lg p-8 w-[450px]">
        <div className="flex flex-col gap-1 mb-6">
          <img src={IconCheck} alt="icon check" width={32} className="mb-4" />
          <h1 className="text-3xl text-Rose-900 font-bold">Order Confirmed</h1>
          <p className="text-Rose-400 text-xs">We hope you enjoy your food</p>
        </div>
        <div className="flex flex-col p-4 bg-Rose-50 rounded-lg">
          {cart &&
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center w-full border-b py-2 mb-2"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={`./src/${item.image.mobile}`}
                    alt={item.name}
                    width={32}
                    className="object-cover rounded-lg aspect-square"
                  />
                  <div>
                    <p className="text-xs font-semibold">{item.name}</p>
                    <div className="flex gap-2">
                      <p className="text-xs font-semibold text-Red">
                        x{item.quantity}
                      </p>
                      <p className="text-xs text-Rose-400">
                        @ {"$" + item.price}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold">
                  {" "}
                  {"$" + item.price * item.quantity}
                </p>
              </div>
            ))}
          <div className="flex justify-between mt-4">
            <p className="text-xs font-semibold">Order Total</p>
            <p className="font-bold text-lg">
              ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
          </div>
        </div>
        <button className="w-full bg-Red text-white py-4 rounded-full hover:bg-Rose-900 text-sm mt-4"
          onClick={handleConfirm}>
          Start New Order
        </button>
      </div>
    </section>
  );
}
