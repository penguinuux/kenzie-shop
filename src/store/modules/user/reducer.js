import { LOGOOUT, SIGN_IN } from "./actionTypes";

const token = JSON.parse(localStorage.getItem("@kenzieShop:token")) || "";

const defaultState = {
  token,
};

const userReducer = (state = defaultState, action) => {
  const { token } = action;

  switch (action.type) {
    case SIGN_IN:
      return { ...state, token };
    case LOGOOUT:
      return { ...state, token };
    default:
      return state;
  }
};

export default userReducer;
