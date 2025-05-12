'use client';

import { useRouter } from 'next/navigation';
import { useSearch } from '@/context/SearchContext';
import { useState } from 'react';

const HomePage = () => {
  const router = useRouter();
  const { setCode } = useSearch();
  const [inputCode, setInputCode] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      setCode(inputCode);
      router.push('/about');
    }
  };

  return (
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter product code"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
  );
};

export default HomePage;
