import { createSelector } from "reselect";
const selectCatagoriesReducer = (state) => state.categories;
export const selectCategoriesArray = createSelector(
  [selectCatagoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);
export const selectCatagories = createSelector(
  [selectCategoriesArray],
  (categories) => {
    return categories.reduce((accumulator, catagory) => {
      const { title, items } = catagory;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {});
  }
);
export const selectCatagoriesIsLoading = createSelector(
  [selectCatagoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
