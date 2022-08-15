import { CATEGORIES_ACTION_TYPE } from "./categories.type";
export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
  payload: categories,
});
