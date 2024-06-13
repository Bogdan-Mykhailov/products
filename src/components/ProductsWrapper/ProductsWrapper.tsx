import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import {ProductCard} from "@/components/ProductCard/ProductCard";
import {Product} from "@/types/Product";

interface Props {
  products: Product[];
}

export const ProductsWrapper: FC<Props> = ({products}) => {
  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => {
          const {id} = product;
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={id}
            >
              <ProductCard product={product}/>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};
