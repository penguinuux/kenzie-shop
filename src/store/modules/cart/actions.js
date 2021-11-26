import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

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

export { addProduct, removeProduct };
