import { LOGOUT, SIGN_IN } from "./actionTypes";

const token = localStorage.getItem("@kenzieShop:token") || "";

const defaultState = {
  profile: {},
  token,
};

const userReducer = (state = defaultState, action) => {
  const { user } = action;

  switch (action.type) {
    case SIGN_IN:
      return { ...state, ...user };
    case LOGOUT:
      return { ...state, ...user };
    default:
      return state;
  }
};

export default userReducer;
