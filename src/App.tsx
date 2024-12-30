import "./index.css";
import ProductList from "./assets/components/ProductList";
import Cart from "./assets/components/Cart";
import { useLocalStore } from "./hooks/useLocalStore";
import OrderConfirmation from "./assets/components/OrderConfirmationModal";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useCartStore } from "./store/cart-store";

export default function App() {
  const [order, setOrder] = useState(false);

  useLocalStore();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleOrderSuccess = () => {
    setOrder(true);
  };

  const handleConfirm = () => {
    setOrder(false);
    clearCart();
  };

  return (
    <main className="flex md:flex-row flex-col md:w-[1400px] w-[90%] justify-center mx-auto gap-8 my-8">
      <section className="flex flex-col">
        <h1 className="text-5xl mb-8 text-left">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          <ProductList />
        </div>
      </section>
      <section className="flex flex-col">
        <Cart onClick={handleOrderSuccess} />
      </section>
      {order &&
        createPortal(
          <OrderConfirmation
            onclick={() => setOrder(false)}
            handleConfirm={() => handleConfirm()}
          />,
          document.body
        )}
    </main>
  );
}
