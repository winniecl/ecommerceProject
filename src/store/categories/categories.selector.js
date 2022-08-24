import { createSelector } from "reselect";
const selectCategoriesArray = (state) => state.categories.categories;
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
