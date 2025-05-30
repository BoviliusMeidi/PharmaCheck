'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchForm({ title , objective }) {
  const router = useRouter();
  const [inputCode, setInputCode] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const objectiveURL = objective;

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
      if (objectiveURL == "product") {
        router.push(`/product/${keyword}`);
      }else if(objectiveURL == "verify"){
        router.push(`/verify/${keyword}`);
      }
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
      className="font-description flex items-center w-full h-[70px] rounded-[40px] bg-white border border-black/50 overflow-hidden"
    >
      <input
        className="flex-1 h-full px-6 text-xl md:text-2xl bg-transparent outline-none placeholder-gray-500"
        type="text"
        placeholder="Ketik nama obat, penyakit, atau kode klasifikasi..."
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
      />
      <button
        type="submit"
        className="h-full w-[150px] bg-mint text-black font-bold text-2xl rounded-r-[40px] border-l border-black"
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
