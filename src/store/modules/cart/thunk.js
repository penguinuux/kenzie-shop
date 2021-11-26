import { addProduct, removeProduct } from "./actions";

// eslint-disable-next-line no-unused-vars
export const addProductThunk =
  (product, successMessage) => (dispatch, getState) => {
    const list = JSON.parse(localStorage.getItem("@kenzieShop:cart")) || [];

    const newList = [...list, product];

    localStorage.setItem("@kenzieShop:cart", JSON.stringify(newList));

    dispatch(addProduct(product));
    successMessage("Produto adicionado");
  };

// eslint-disable-next-line no-unused-vars
export const removeProductThunk =
  (product, successMessage) => (dispatch, getState) => {
    const { cart } = getState();

    const clearedList = cart.filter((element) => element.id !== product);
    localStorage.setItem("@kenzieShop:cart", JSON.stringify(clearedList));

    dispatch(removeProduct(clearedList));
    successMessage("Produto removido");
  };
