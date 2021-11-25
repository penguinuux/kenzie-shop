import { addProduct, removeProduct } from "./actions";

const addProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  return dispatch(addProduct([...cart, product]));
};
const removeProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const clearedList = cart.filter((element) => element.name !== product);
  return dispatch(removeProduct(clearedList));
};
