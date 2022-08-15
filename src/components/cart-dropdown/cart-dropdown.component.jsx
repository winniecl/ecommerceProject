// @ts-nocheck
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsContainer,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartConext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems } = useContext(CartConext);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {Object.keys(cartItems).length === 0 ? (
          <EmptyMessage>The cart is empty</EmptyMessage>
        ) : (
          /* {cartItems.map((cardItem)=>(<CartItem cartItem={cartItem} />))}  */
          Object.entries(cartItems).map(([key, value]) => (
            <CartItem key={key} cartItem={value} />
          ))
        )}
      </CartItemsContainer>

      <Link to="/checkout">
        <Button label="GO TO CHECKOUT" />
      </Link>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
