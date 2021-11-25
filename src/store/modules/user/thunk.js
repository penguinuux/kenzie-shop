import { userSignin, userLogout } from "./actions";

import api from "../../../services/api";

export const userSigninThunk =
  (data, history, successMessage, errorMessage) => (dispatch) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { name, email, contact, created_at } = response.data.user;

        const token = response.data.token;
        const profile = { name, email, contact, created_at };

        const user = {
          profile,
          token,
        };

        localStorage.setItem("@kenzieShop:token", token);
        localStorage.setItem("@kenzieShop:user", JSON.stringify(profile));

        dispatch(userSignin(user));
        successMessage("Você agora está logado");
        history.push("/");
      })
      .catch((err) => errorMessage("Usuário e/ou senha incorretos"));
  };

export const userLogoutThunk = (history) => (dispatch) => {
  const token = "";

  localStorage.clear();

  dispatch(userLogout(token));
  history.push("/");
};
