import CartButton from "./CartButton";
import { Products } from "../../interfaces/products";



export default function ProductList({ name, image, category, price }: Products ) {
  return (
    <div className="flex flex-col">
      <figure className="aspect-square w-[200px] mb-8 relative">
        <img
          src={`./src/${image.desktop.slice(2)}`}
          alt={name}
          className="w-full h-full rounded-lg object-cover"
        />
        <CartButton onClick={() => console.log("add to cart")} />
      </figure>
      <p className="text-xs text-Rose-300 font-semibold">{category}</p>
      <h3 className="text-sm font-bold">{name}</h3>
      <p className="text-sm text-Red font-semibold">${price}</p>
    </div>
  );
}
