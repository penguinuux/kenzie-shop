import { addProduct, removeProduct } from "./actions";

// eslint-disable-next-line no-unused-vars
const addProductThunk = (product) => (dispatch, getState) => {
  const list = JSON.parse(localStorage.getItem("@kenzieShop:cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("@kenzieShop:cart", newList);

  dispatch(addProduct(product));
};

// eslint-disable-next-line no-unused-vars
const removeProductThunk = (product) => (dispatch, getState) => {
  localStorage.clear();

  const { cart } = getState();

  const clearedList = cart.filter((element) => element.name !== product);
  localStorage.setItem("@kenzieShop:cart", clearedList);

  return dispatch(removeProduct(clearedList));
};
