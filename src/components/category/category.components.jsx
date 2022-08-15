import { CategoryContainer, CategoryTitle } from "./category.styles";
import ProductCard from "../product-card/product-card.component";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { Fragment, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCatagories } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCatagories);
  //const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
