import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
const defaultState = JSON.parse(localStorage.getItem("@kenzieShop:cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];
    case REMOVE_PRODUCT:
      const { newList } = action;
      return [...newList];
    default:
      return state;
  }
};

export default cartReducer;
