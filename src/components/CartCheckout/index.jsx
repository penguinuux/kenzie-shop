import { Box, Button, Paper, Typography } from "@mui/material";

const CartCheckout = ({ quantity, totalValue }) => {
  return (
    <Paper elevation={12} sx={{ maxWidth: 345, minHeight: 350, pt: 2, px: 2 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
        Resumo do pedido
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body1" sx={{ flexGrow: 1, textAlign: "left" }}>
          {/* {quantity} Produtos */}4 Produtos
        </Typography>
        <Typography variant="body1">
          {/* {totalValue} */}
          R$ 2435,00
        </Typography>
      </Box>
      <Button variant="contained" color="success" fullWidth sx={{ mt: 7 }}>
        Finalizar pedido
      </Button>
      <Button sx={{ mt: 2 }}>Voltar</Button>
    </Paper>
  );
};

export default CartCheckout;
