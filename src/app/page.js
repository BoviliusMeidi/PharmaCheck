'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HomePage = () => {
  const router = useRouter();
  const [inputCode, setInputCode] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      router.push(`/product/${inputCode}`);
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