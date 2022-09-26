import { useDispatch } from "react-redux";

import { CATEGORIES_ACTION_TYPE } from "./categories.type";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// export const setCategories = (categories) => ({
//   type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
//   payload: categories,
// });
export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
  payload: null,
});
export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
export const fetchCategoriesFailure = (error) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  payload: error,
});
export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
