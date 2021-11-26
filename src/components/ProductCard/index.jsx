import { Favorite, Share } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

const ProductCard = ({ description, image, title, price, rating }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="256"
        image={image}
        alt={title}
        sx={{ objectFit: "contain", boxSizing: "border-box", pt: 1, px: 1 }}
      />
      <CardContent>
        <Box>
          <Typography component="h2" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography component="span" variant="h5">
            {price}
          </Typography>
          <Rating value={rating.rate} readOnly precision={0.2} />
        </Box>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="medium" variant="contained" fullWidth>
          Add to cart
        </Button>
      </CardActions>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <Divider light variant="middle" />
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
