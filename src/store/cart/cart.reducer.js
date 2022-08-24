import { CART_ACTION_TYPE } from "./cart.type";
export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_SHOW_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: payload,
      };
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
const INITIAL_STATE = {
  showCartDropdown: false,
  cartItems: {},
  cartCount: 0,
  cartTotal: 0,
};
