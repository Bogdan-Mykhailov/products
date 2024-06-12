'use client';

import React, {Suspense, useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {Container, Grid, Pagination, Typography} from '@mui/material';
import axios from 'axios';
import {Product} from "@/types/Product";

const CatalogContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const limit = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const currentPage = parseInt(searchParams.get('page') || '1', 10);
      setPage(currentPage);
      try {
        const res = await axios.get(`/api/products?page=${currentPage}&limit=${limit}`);
        setProducts(res.data.products);
        setTotal(res.data.total);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [searchParams, limit]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/?page=${value}`);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
      >
        Product Catalog
      </Typography>

      <Grid container spacing={4}>
        {products.map(({
                         id,
                         name,
                         description,
                         price
                       }) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={id}
          >
            <div>
              <Typography variant="h6">{name}</Typography>
              <Typography>{description}</Typography>
              <Typography>${price}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(total / limit)}
        page={page}
        onChange={handlePageChange}
      />
    </Container>
  );
};

const Home: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogContent />
    </Suspense>
  );
};

export default Home;
