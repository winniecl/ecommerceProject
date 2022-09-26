import "./shop.styles.scss";
import CategoriesPreview from "../../components/categories-preview/categories-preview.components";
import Category from "../../components/category/category.components";
import { fetchCategoriesStartAsync } from "../../store/categories/categories.action";

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;
