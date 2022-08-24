import {
  addCartItems,
  reduceCartItems,
  deleteCardItems,
} from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
//import { useContext } from "react";
//import { CartConext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";
const CheckoutItem = ({ cartItem }) => {
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();
  //const { addCartItems, reduceCartItems, deleteCardItems } = useContext(CartConext);
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={() => dispatch(reduceCartItems(cartItems, cartItem))}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addCartItems(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton
        onClick={() => dispatch(deleteCardItems(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
