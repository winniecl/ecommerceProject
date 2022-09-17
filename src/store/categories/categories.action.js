import { async } from "@firebase/util";
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
export const fetchCategoriesSucess = (categories) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
export const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  payload: error,
});
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSucess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
