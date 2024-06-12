import React from 'react';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Container>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: product.name,
              description: product.description,
              price: product.price,
            }),
          }}
        />
      </Head>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Typography>{product.description}</Typography>
      <Typography>${product.price}</Typography>
    </Container>
  );
};

export default Product;
