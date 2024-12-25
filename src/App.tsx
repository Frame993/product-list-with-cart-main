import "./index.css";
import PRODUCTS from "./data.json";
import ProductList from "./assets/components/ProductList";
import Cart from "./assets/components/Cart";

export default function App() {
  return (
    <main className="my-8 flex w-[1400px] mx-auto gap-8 justify-center">
      <section>
        <h1 className="text-3xl mb-4">Dessert</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          <ProductList products={PRODUCTS} />
        </div>
      </section>
      <section>
        <Cart />
      </section>
    </main>
  );
}
