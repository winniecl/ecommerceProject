import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";
import {
  CartIconContatiner,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
import { setShowCartDropdown } from "../../store/cart/cart.action";
//import { useContext } from "react";
//import { CartConext } from "../../contexts/cart.context";
const CartIcon = () => {
  const dispatch = useDispatch();
  //const { showCartDropdown, setShowCartDropdown, cartCount } =  useContext(CartConext);
  const { showCartDropdown, cartCount } = useSelector(cartSelector);
  return (
    <CartIconContatiner
      onClick={() => {
        //console.log("showCartDropdown");
        dispatch(setShowCartDropdown(!showCartDropdown));
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
