import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  //console.log(title);
  return (
    <CategoryPreviewContainer key={title}>
      <Title to={`/shop/${title}`}>{title}</Title>
      <Preview>
        {
          //products.filter((_,index)=>index<4).map((product)=>(
          products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
