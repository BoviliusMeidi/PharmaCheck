'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchForm({ title }) {
  const router = useRouter();
  const [inputCode, setInputCode] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputCode.trim().length >= 3 && isNaN(inputCode)) {
        const res = await fetch(`/api/search-suggestions?query=${inputCode}`);
        const data = await res.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    };

    const delayDebounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(delayDebounce);
  }, [inputCode]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const keyword = inputCode.trim().toLowerCase();

    if (keyword && keyword.length >= 3) {
      if (isNaN(keyword)) {
        await fetch('/api/log-search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ keyword }),
        });
      }
      router.push(`/product/${keyword}`);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputCode(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearch}
        className="font-description flex justify-between items-center w-full h-[70] bg-base rounded-[40]"
      >
        <input
          className="w-full ml-12 text-2xl"
          type="text"
          placeholder="Type a medicine name, illness, or classification code..."
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer text-[32px] bg-mint rounded-[40px] border w-[300] h-[70] font-[600] border-black"
        >
          {title}
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 z-10 max-h-60 overflow-y-auto">
          {suggestions.map((s, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(s.keyword)}
            >
              {s.keyword}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
