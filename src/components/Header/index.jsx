import { useHistory } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import {
  AccountCircle,
  ShoppingCartOutlined,
  Logout,
} from "@mui/icons-material";

const primary = blue[400];

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("@kenzieShop:token") || "";

  const exitHandler = () => {
    return true;
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
              <Typography variant="h5" component="h3">
                Olá, Pablo
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
            <IconButton>
              <Badge badgeContent={4} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            {token && (
              <IconButton sx={{ ml: 2 }}>
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
