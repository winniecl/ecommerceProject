import { createContext, useState, useEffect, useReducer } from "react";
export const CartConext = createContext({
  showCartDropdown: false,
  setShowCartDropdown: () => null,
  cartItems: {},
  addCartItems: () => null,
  reduceCartItems: () => null,
  deleteCardItems: () => null,
  cartCount: 0,
  cartTotal: 0,
});
const INITIAL_STATE = {
  showCartDropdown: false,
  cartItems: {},
  cartCount: 0,
  cartTotal: 0,
};
const CART_ACTION_TYPE = {
  SET_SHOW_CART_DROPDOWN: "SET_SHOW_CART_DROPDOWN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
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
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContextProvider = ({ children }) => {
  // const [showCartDropdown, setShowCartDropdown] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCardCount] = useState(0);
  // const [cartTotal,setCartTotal]=useState(0)
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { showCartDropdown, cartItems, cartCount, cartTotal } = state;
  const setShowCartDropdown = (showCartDropdown) => {
    dispatch({
      type: CART_ACTION_TYPE.SET_SHOW_CART_DROPDOWN,
      payload: showCartDropdown,
    });
  };
  // useEffect(() => {
  //   // let count = 0;
  //   // Object.entries(cartItems).map(([key, value]) => (count += value.quantity));
  //   // setCardCount(count);
  //   setCardCount(
  //     Object.entries(cartItems).reduce(
  //       (count, [key, value]) => count + value.quantity,
  //       0
  //     )
  //   );
  //   setCartTotal(
  //     Object.entries(cartItems).reduce(
  //       (total, [key, value]) => total + value.quantity * value.price,
  //       0
  //     )
  //   );
  // }, [cartItems]);
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = Object.entries(newCartItems).reduce(
      (count, [key, value]) => count + value.quantity,
      0
    );
    const newCartTotal = Object.entries(newCartItems).reduce(
      (total, [key, value]) => total + value.quantity * value.price,
      0
    );
    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };
    dispatch({ type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: payload });
  };
  const addCartItems = (productToAdd) => {
    const temp = { ...cartItems };
    productToAdd.id in cartItems
      ? (temp[`${productToAdd.id}`].quantity += 1)
      : (temp[`${productToAdd.id}`] = { ...productToAdd, quantity: 1 });
    updateCartItemsReducer(temp);
  };
  const reduceCartItems = (productToReduce) => {
    const temp = { ...cartItems };
    if (temp[`${productToReduce.id}`].quantity > 1) {
      productToReduce.id in cartItems
        ? (temp[`${productToReduce.id}`].quantity -= 1)
        : (temp[`${productToReduce.id}`] = { ...productToReduce, quantity: 1 });
    } else {
      delete temp[`${productToReduce.id}`];
    }

    updateCartItemsReducer(temp);
  };
  const deleteCardItems = (productToDelete) => {
    const temp = { ...cartItems };
    delete temp[`${productToDelete.id}`];
    updateCartItemsReducer(temp);
  };
  const value = {
    showCartDropdown,
    setShowCartDropdown,
    addCartItems,
    reduceCartItems,
    deleteCardItems,
    cartItems,
    cartCount,
    cartTotal,
  };
  // @ts-ignore
  return <CartConext.Provider value={value}>{children}</CartConext.Provider>;
};
