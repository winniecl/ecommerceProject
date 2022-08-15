import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name} mo wor`} />
      <ItemDetails>
        <Name>{name}</Name>
        {quantity} x ${price}
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
