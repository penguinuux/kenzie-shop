import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const primary = blue[400];

const Header = ({ name, avatar_url, setAuthenticated }) => {
  const [anchor, setAnchor] = useState(null);
  const history = useHistory();

  const handleMenu = (e) => {
    setAnchor(e.currentTarget);
  };

  const togleMenu = () => {
    setAnchor(null);
  };

  const handleProfile = () => {
    return undefined;
  };

  const handleExit = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 6 }}>
      <AppBar position="static" sx={{ backgroundColor: primary }}>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar size="larger" alt={name} src={avatar_url} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchor}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchor)}
            onClose={togleMenu}
          >
            <MenuItem
              onClick={handleProfile}
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              Perfil
            </MenuItem>
            <MenuItem onClick={handleExit}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
