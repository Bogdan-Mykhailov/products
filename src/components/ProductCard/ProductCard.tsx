import React, {FC} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import Link from "next/link";
import {Product} from "@/types/Product";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({product}) => {
  const {id, name, description, price} = product;

  return (
    <Card>
      <CardContent sx={{height: 100}}>
        <Typography
          gutterBottom
          variant="h5"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography>{price} USD</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }} >
        <Link href={`/products/${id}`} passHref>
          <Button color='info' size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
