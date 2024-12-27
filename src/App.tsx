import "./index.css";
import ProductList from "./assets/components/ProductList";
import Cart from "./assets/components/Cart";

export default function App() {

  return (
    <main className="flex md:flex-row flex-col md:w-[1400px] w-[90%] justify-center mx-auto gap-8 my-8">
      <section className="flex flex-col">
        <h1 className="text-5xl mb-8 text-left">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          <ProductList />
        </div>
      </section>
      <section className="flex flex-col">
        <Cart />
      </section>
    </main>
  );
}
