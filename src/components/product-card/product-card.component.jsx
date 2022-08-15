import {
  ProductCardContainer,
  ProductCardName,
  ProductCardPrice,
  Footer,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartConext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addCartItems } = useContext(CartConext);
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
        onClick={() => addCartItems(product)}
      />
    </ProductCardContainer>
  );
};
export default ProductCard;
