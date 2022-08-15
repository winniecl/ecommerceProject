import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";
import {
  CartIconContatiner,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles";
import { useContext } from "react";
import { CartConext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { showCartDropdown, setShowCartDropdown, cartCount } =
    useContext(CartConext);

  return (
    <CartIconContatiner
      onClick={() => {
        //console.log("showCartDropdown");
        setShowCartDropdown(!showCartDropdown);
        // showCartDropdown
        //   ? setShowCartDropdown(false)
        //   : setShowCartDropdown(true);
      }}
    >
      <ShoppingIcon>
        <ShoppingIconSVG />
      </ShoppingIcon>

      <ItemCount as="span">{cartCount}</ItemCount>
    </CartIconContatiner>
  );
};
export default CartIcon;
