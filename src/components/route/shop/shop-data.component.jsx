import "./shop.styles.scss";
import CategoriesPreview from "../../categories-preview/categories-preview.components";
import Category from "../../category/category.components";
import { Route, Routes } from "react-router-dom";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;
