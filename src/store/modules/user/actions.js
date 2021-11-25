import { SIGN_IN, LOGOUT } from "./actionTypes";
export const userSignin = (token) => {
  return {
    type: SIGN_IN,
    token,
  };
};

export const userLogout = (token) => {
  return {
    type: LOGOUT,
    token,
  };
};
