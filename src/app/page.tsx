'use client';
import React, {Suspense, useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {CircularProgress, Container, Pagination, Typography} from '@mui/material';
import axios from 'axios';
import {Product} from '@/types/Product';
import {ProductsWrapper} from '@/components/ProductsWrapper/ProductsWrapper';
import RootLayout from "@/app/layout";

const CatalogContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const limit = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      const currentPage = parseInt(searchParams.get('page') || '1', 10);
      setPage(currentPage);
      try {
        const res = await axios.get(`/api/products?page=${currentPage}&limit=${limit}`);
        setProducts(res.data.products);
        setTotal(res.data.total);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [searchParams, limit]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/?page=${value}`);
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <CircularProgress/>
      </div>
    )
  }

  return (
      <Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography
          gutterBottom
          variant="h4"
          align='center'
          marginY={4}
          fontWeight={600}
        >
          Product Catalog
        </Typography>

        <ProductsWrapper products={products}/>

        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
          <Pagination
            sx={{marginTop: 4}}
            count={Math.ceil(total / limit)}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </Container>
  );
};

const Home: React.FC = () => {
  return (
      <Suspense fallback={<div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <CircularProgress/>
      </div>}>
        <CatalogContent/>
      </Suspense>
  );
};

export default Home;
