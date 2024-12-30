import { Products } from "../../interfaces/products";
import { useCartStore } from "../../store/cart-store";
import cardIcon from "/icon-add-to-cart.svg";

type Props = {
  item: Products;
};

export default function CartButton({ item }: Props) {

  const addToCart = useCartStore((state) => state.addToCart);
  const handleClick = () => {
    // console.log(item);
    addToCart(item);
  };

  return (
    <>
      <button
        onClick={() => handleClick()}
        className="flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-white border border-Rose-500 hover:border-Red w-[150px]"
      >
        <img src={cardIcon} alt="cart icon" />
        <span className="text-sm text-black font-semibold hover:text-Red ">
          Add to Cart
        </span>
      </button>
    </>
  );
}
