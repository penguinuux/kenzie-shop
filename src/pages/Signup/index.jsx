import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

import { Box, Button, CssBaseline, Container, TextField } from "@mui/material";

import * as yup from "yup";

const Signup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    contact: yup
      .string()
      .required("Telefone obrigatório")
      .matches(/^([1-9]{2}) *[0-9]{4,5}-?[0-9]{4}$/, "Telefone inválido"),
    password: yup.string().required("Senha obrigatória"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newData = { ...data, bio: "Usuário", course_module: "Primeiro" };
    console.log(newData);
    api
      .post("/users", newData)
      .then((response) => {
        toast.success("Usuário criado com sucesso");
        history.push("/login");
      })
      .catch((err) => toast.error("Algo deu errado"));
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="normal"
              fullWidth
              placeholder="Nome"
              label="Nome"
              {...register("name")}
            />
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
              error={!!errors.contact}
              helperText={errors.contact?.message}
              margin="normal"
              ref="phone"
              fullWidth
              placeholder="(99) 99999-9999"
              label="Telefone"
              {...register("contact")}
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
            <TextField
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm?.message}
              type="password"
              margin="normal"
              fullWidth
              placeholder="Confirmar senha"
              label="Confirmar senha"
              {...register("passwordConfirm")}
            />
            <Button
              sx={{ mt: 1.5, mb: 2.5 }}
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
