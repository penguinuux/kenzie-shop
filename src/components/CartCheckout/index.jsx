import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CartCheckout = ({ quantity, totalValue = "R$ 0,00" }) => {
  const history = useHistory();
  const token = localStorage.getItem("@kenzieShop:token") || "";
  const cartList = useSelector((store) => store.cart);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (cartList.length > 0) {
      return setBtnDisabled(false);
    } else {
      return setBtnDisabled(true);
    }
  }, [cartList]);

  const handleCheckoutButton = () => {
    if (token) {
      toast.success("Pedido realizado com sucesso!");
      localStorage.setItem("@kenzieShop:cart", JSON.stringify([]));
      history.push("/");
    } else {
      toast.error("Faça login para finalizar a compra", {
        position: "top-right",
      });
      return history.push("/login");
    }
  };

  return (
    <Paper elevation={12} sx={{ maxWidth: 345, minHeight: 350, pt: 2, px: 2 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Resumo do pedido
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ flexGrow: 1, textAlign: "left" }}>
          {quantity} Produtos
        </Typography>
        <Typography variant="body1">R$ {totalValue}</Typography>
      </Box>
      <Button
        onClick={handleCheckoutButton}
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 7 }}
        disabled={btnDisabled}
      >
        Finalizar pedido
      </Button>
      <Button onClick={() => history.push("/")} sx={{ mt: 2 }}>
        Voltar
      </Button>
    </Paper>
  );
};

export default CartCheckout;
