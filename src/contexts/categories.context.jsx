import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  useEffect(() => {
    //console.log(SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
      //console.log(categoriesMap)
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  useEffect(() => {}, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
