import cardIcon from "../images/icon-add-to-cart.svg";

type Props = {
  onClick: () => void;
};

export default function CartButton({ onClick }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-white border border-Red absolute -bottom-4 left-1/2 -translate-x-1/2 w-[150px]" 
      >
        <img src={cardIcon} alt="cart icon" />
        <span className="text-sm text-black font-medium ">Add to Cart</span>
      </button>
    </>
  );
}
