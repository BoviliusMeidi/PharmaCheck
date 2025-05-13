'use client';

import { useEffect, useState } from 'react';
import { useSearch } from '@/context/SearchContext';

const AboutPage = () => {
  const { code } = useSearch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!code) return;
    const fetchData = async () => {
      const res = await fetch(`/api/products?code=${code}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [code]);

  return (
    <div>
      <h1>Product Info</h1>
      {product?.result ? (
        <div>{product.result.name}</div>
      ) : (
        <p>No data found or searching...</p>
      )}
    </div>
  );
};

export default AboutPage;
