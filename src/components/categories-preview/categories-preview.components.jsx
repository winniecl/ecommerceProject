import { useContext, Fragment } from "react";
//import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";
//import ProductCard from "../../product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCatagories } from "../../store/categories/categories.selector";
const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCatagories);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => (
        <CategoryPreview key={key} title={key} products={categoriesMap[key]} />
        //<span className='title'>{key.toUpperCase() }</span>
      ))}
    </Fragment>
  );
};
export default CategoriesPreview;
