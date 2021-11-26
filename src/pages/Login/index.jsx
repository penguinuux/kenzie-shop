import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Box, Button, CssBaseline, Container, TextField } from "@mui/material";

import * as yup from "yup";
import { userSigninThunk } from "../../store/modules/user/thunk";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const successMessage = (text) => {
    toast.success(text);
  };

  const errorMessage = (text) => {
    toast.error(text);
  };

  const onSubmit = (data) =>
    dispatch(userSigninThunk(data, history, successMessage, errorMessage));

  const signupButtonHandler = () => {
    return history.push("/signup");
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={!!errors.email}
              helperText={errors.email?.message}
              margin="normal"
              fullWidth
              placeholder="Email"
              label="Email"
              {...register("email")}
            />
            <TextField
              error={!!errors.password}
              helperText={errors.password?.message}
              type="password"
              margin="normal"
              fullWidth
              placeholder="Senha"
              label="Senha"
              {...register("password")}
            />
            <Button
              sx={{ mt: 1.5, mb: 1.5 }}
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
            >
              Login
            </Button>
          </Box>
          <Button
            sx={{ mt: 1.5, mb: 1.5 }}
            fullWidth
            variant="outlined"
            size="medium"
            onClick={signupButtonHandler}
          >
            Cadastrar
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
