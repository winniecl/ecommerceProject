import { useContext } from "react";
import { CartConext } from "../../contexts/cart.context";
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
  const { addCartItems, reduceCartItems, deleteCardItems } =
    useContext(CartConext);
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={() => reduceCartItems(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addCartItems(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={() => deleteCardItems(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
