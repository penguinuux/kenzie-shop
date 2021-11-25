import { userSignin, userLogout } from "./actions";
import { Redirect } from "react-router";

import api from "../../../services/api";

export const userSigninThunk =
  (data, successMessage, errorMessage) => (dispatch) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.token;

        localStorage.setItem("@kenzieShop:token", token);

        dispatch(userSignin(token));
        successMessage("Você agora está logado");
        return <Redirect to="/" />;
      })
      .catch((err) => errorMessage("Usuário e/ou senha incorretos"));
  };

export const userLogoutThunk = () => (dispatch) => {
  const token = "";

  localStorage.clear();

  dispatch(userLogout(token));
  return <Redirect to="/" />;
};
