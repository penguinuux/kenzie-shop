import { ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } from "./actionTypes";

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

const removeProduct = (newList) => {
  return {
    type: REMOVE_PRODUCT,
    newList,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export { addProduct, removeProduct, clearCart };
