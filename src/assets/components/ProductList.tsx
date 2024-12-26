import CartButton from "./CartButton";
import { useCartStore } from "../../store/cart-store";
import CartButtonSelected from "./CartButtonSelected";
import PRODUCTS from "../../data.json";
import { Products } from "../../interfaces/products";


export default function ProductList() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const products : Products[] = PRODUCTS;

  return (
    <>
      {products.map((item) => (
        <li key={item.id} className="flex flex-col">
          <figure className="aspect-square w-[200px] mb-8 relative">
            {cart.some((product) => product.id === item.id) ? (
              <>
                <img
                  src={`./src/${item.image.desktop.slice(2)}`}
                  alt={item.name}
                  className={`w-full h-full rounded-lg outline outline-Red border-Red object-cover}`}
                />
                <CartButtonSelected item={item} />
              </>
            ) : (
              <>
                <img
                  src={`./src/${item.image.desktop.slice(2)}`}
                  alt={item.name}
                  className={`w-full h-full rounded-lg object-cover}`}
                />
                <CartButton onClick={() => addToCart(item)} />
              </>
            )}
          </figure>
          <p className="text-xs text-Rose-300 font-semibold">{item.category}</p>
          <h3 className="text-sm font-bold">{item.name}</h3>
          <p className="text-sm text-Red font-semibold">${item.price}</p>
        </li>
      ))}
    </>
  );
}
