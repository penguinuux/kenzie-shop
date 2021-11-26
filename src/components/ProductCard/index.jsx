import {
  addProductThunk,
  removeProductThunk,
} from "../../store/modules/cart/thunk";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Delete, Favorite, Share } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

const ProductCard = ({ product, isOnCart = false }) => {
  const dispatch = useDispatch();

  const successMessage = (text) => {
    toast.success(text, { position: "bottom-left", autoClose: 2500 });
  };

  const addToCartHandleButton = () => {
    dispatch(addProductThunk(product, successMessage));
  };

  const removeFromCartHandleButton = (id) => {
    dispatch(removeProductThunk(id, successMessage));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="256"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", boxSizing: "border-box", pt: 1, px: 1 }}
      />
      <CardContent>
        <Box>
          <Typography component="h2" variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem" }}>
            R$ {product.price.toFixed(2)}
          </Typography>
          <Rating
            value={product.rating.rate}
            readOnly
            precision={0.2}
            sx={{ mb: 1 }}
          />
        </Box>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
      {!isOnCart && (
        <CardActions disableSpacing>
          <Button
            onClick={addToCartHandleButton}
            size="medium"
            variant="contained"
            fullWidth
          >
            Adicionar ao carrinho
          </Button>
        </CardActions>
      )}
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        {isOnCart && (
          <IconButton
            onClick={() => removeFromCartHandleButton(product.id)}
            aria-label="remove of cart"
          >
            <Delete />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
