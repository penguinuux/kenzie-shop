import { SIGN_IN, LOGOUT, SIGN_UP } from "./actionTypes";
export const userSignin = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};

export const userLogout = (user) => {
  return {
    type: LOGOUT,
    user,
  };
};
