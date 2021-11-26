import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { userLogoutThunk } from "../../store/modules/user/thunk";
import { toast } from "react-toastify";

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  AccountCircle,
  ShoppingCartOutlined,
  Logout,
} from "@mui/icons-material";

const primary = blue[400];

const Header = () => {
  const token = localStorage.getItem("@kenzieShop:token") || "";
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const { name } = user.profile;

  const cartList = useSelector((store) => store.cart);

  const history = useHistory();
  const [quantity, setQuantity] = useState(cartList.length);

  const infoMessage = (text) => {
    toast.info(text, { position: "top-right" });
  };

  useEffect(() => {
    setQuantity(cartList.length);
  }, [cartList]);

  const exitHandler = () => {
    dispatch(userLogoutThunk(history, infoMessage));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: primary, height: 84, pt: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            KenzieShop
          </Typography>
          <Box
            onClick={!token ? () => history.push("/login") : undefined}
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": {
                cursor: "pointer",
                opacity: "0.8",
              },
            }}
          >
            <AccountCircle fontSize="large" />

            {token ? (
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontSize: "1.4rem", mx: 1, fontWeight: "bold" }}
              >
                Olá, {name}
              </Typography>
            ) : (
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontSize: "0.8rem",
                  width: 100,
                  height: "8vh",
                  lineHeight: "1.2",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                olá, faça seu login ou cadastre-se
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <IconButton onClick={() => history.push("/cart")}>
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            {token && (
              <IconButton sx={{ ml: 2 }} onClick={exitHandler}>
                <Logout />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
