// src/context/SearchContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [code, setCode] = useState('');
  return (
    <SearchContext.Provider value={{ code, setCode }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
