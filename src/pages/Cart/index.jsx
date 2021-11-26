/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import CartCheckout from "../../components/CartCheckout";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((store) => store.cart) || [];

  const [quantity, setQuantity] = useState(cartList.length);

  const totalValue = cartList.reduce((acc, { price }) => {
    return acc + price;
  }, 0);

  useEffect(() => {
    setQuantity(cartList.length);
  }, [cartList]);

  return (
    <>
      <Header />
      <Grid
        container
        spacing={2}
        justify="space-around"
        sx={{
          backgroundColor: "Background",
          py: 3,
          pt: 13,
          minHeight: "100vh",
        }}
      >
        <Grid item xs={12} sm={8} md={8} lg={9} align="center">
          <Grid container spacing={2}>
            {cartList.map((product, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                align="center"
                key={`cart-${product.id}${index}`}
              >
                <ProductCard product={product} isOnCart />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3} align="center">
          <CartCheckout
            quantity={quantity}
            totalValue={totalValue.toFixed(2)}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Cart;
