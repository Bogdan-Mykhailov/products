import React from "react";
import axios from "axios";
import {Container, Typography} from "@mui/material";
import products from "@/data/Products";
import {Product} from "@/types/Product";
import {Back} from "@/components/Back/Back";

interface Params {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({params}: Params) {
  const {id} = params;
  const res = await axios.get(`https://products-nt.vercel.app/api/products/${id}`);
  const product: Product = res.data;

  return {
    title: product.name,
    description: product.description,
  };
}

const ProductPage = async ({params}: Params) => {
  const {id} = params;
  const res = await axios.get(`https://products-nt.vercel.app/api/products/${id}`);
  const product: Product = res.data;
  const {name, description, price} = product

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://products-nt.vercel.app/products/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <Container>
      <Back />
      <div style={{display: 'flex',
        justifyContent: 'center',
        marginTop: 100,
      flexDirection: 'column'}}>
        <Typography
          mt={5}
          align='center'
          variant="h3"
          color='primary'
          gutterBottom
        >
          {name}
        </Typography>

        <Typography align='center' variant='h5'>
          <span style={{fontWeight: 700}}>Price:</span> {price}$
        </Typography>
        <Typography
          mt={2}
          align='center'
          variant='h6'
          color="text.secondary"
        >
          {description}
        </Typography>
      </div>
      <script type="application/ld+json">
        {JSON.stringify(productJsonLd)}
      </script>
    </Container>
  );
};

export default ProductPage;
