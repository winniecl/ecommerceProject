import { CART_ACTION_TYPE } from "./cart.type";

export const setShowCartDropdown = (showCartDropdown) => ({
  type: CART_ACTION_TYPE.SET_SHOW_CART_DROPDOWN,
  payload: showCartDropdown,
});
export const setCartItems = (newCartItems) => {
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
  //console.log({ type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: payload });
  return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: payload };
};

export const addCartItems = (cartItems, productToAdd) => {
  const temp = { ...cartItems };
  productToAdd.id in cartItems
    ? (temp[`${productToAdd.id}`].quantity += 1)
    : (temp[`${productToAdd.id}`] = { ...productToAdd, quantity: 1 });
  return setCartItems(temp);
};
export const reduceCartItems = (cartItems, productToReduce) => {
  const temp = { ...cartItems };
  if (temp[`${productToReduce.id}`].quantity > 1) {
    productToReduce.id in cartItems
      ? (temp[`${productToReduce.id}`].quantity -= 1)
      : (temp[`${productToReduce.id}`] = { ...productToReduce, quantity: 1 });
  } else {
    delete temp[`${productToReduce.id}`];
  }
  return setCartItems(temp);
};
export const deleteCardItems = (cartItems, productToDelete) => {
  const temp = { ...cartItems };
  delete temp[`${productToDelete.id}`];
  return setCartItems(temp);
};
