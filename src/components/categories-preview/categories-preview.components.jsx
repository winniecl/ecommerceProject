import { useContext, Fragment } from "react";
//import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";
//import ProductCard from "../../product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCatagories,
  selectCatagoriesIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../spinner/spinner.component";
const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCatagories);
  const isLoading = useSelector(selectCatagoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((key) => (
          <CategoryPreview
            key={key}
            title={key}
            products={categoriesMap[key]}
          />
          //<span className='title'>{key.toUpperCase() }</span>
        ))
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
