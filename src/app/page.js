'use client';

import SearchForm from '@/components/SearchForm';

export default function HomePage ()  {
  return (
    <div className='max-w-4xl'>
      <SearchForm title={"Search"} objective={"product"}/>
    </div>
  );
};