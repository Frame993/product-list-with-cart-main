import PRODUCTS from "../../data.json";
import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";
import CartButtonMain from "./CartButtonMain";

export default function ProductList() {

  const cart = useCartStore((state) => state.cart);
  //@ts-expect-error-The type of 'PRODUCTS' should have null on quantity
  const products: Products[] = PRODUCTS;

  return (
    <>
      {products.map((item) => (
        <li key={item.id} className={`flex flex-col`}>
          <figure className="w-full relative h-[200px] md:h-[300px] md:w-[300px] md:mb-6 mb-4 rounded-lg">
            <img
              src={`${item.image.desktop}`}
              alt={item.name}
              className={`w-full h-full object-cover shadow-sm rounded-lg ${
                cart.some((product) => product.id === item.id)
                  ? "border-[3px] border-Red"
                  : ""
              }`}
            />
            <CartButtonMain item={item} className="absolute -bottom-4 left-1/2 -translate-x-1/2"/>
          </figure>
          <p className="text-xs text-Rose-300 font-semibold">{item.category}</p>
          <h3 className="text-sm font-bold">{item.name}</h3>
          <p className="text-sm text-Red font-semibold">${item.price}</p>
        </li>
      ))}
    </>
  );
}
