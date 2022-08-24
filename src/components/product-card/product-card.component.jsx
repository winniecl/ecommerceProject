import {
  ProductCardContainer,
  ProductCardName,
  ProductCardPrice,
  Footer,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//import { useContext } from "react";
//import { CartConext } from "../../contexts/cart.context";
import { addCartItems } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";
const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();
  // { addCartItems } = useContext(CartConext);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${id}No wor`} />
      <Footer>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price} </ProductCardPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        label="Add to cart"
        onClick={() => dispatch(addCartItems(cartItems, product))}
      />
    </ProductCardContainer>
  );
};
export default ProductCard;
