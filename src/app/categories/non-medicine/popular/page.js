'use client';

import React from 'react';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';

export default function PopularPage() {
  const popularItems = [
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
    { name: 'Acetaminophen', href: '' },
  ];

  return (
    <div className="relative bg-[#FCF7F8] min-h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 flex justify-center px-8">
        <div className="py-10 px-8 max-w-[1083px] text-center">
          <h1 className="font-title text-[80px]">Popular Search</h1>
          <p className="text-black mx-auto font-description text-[25px] mb-16 leading-[1.2]">
            Detailed and accurate information is provided on over 24,000 prescription and over-the-counter
            medicines for both consumers and healthcare professionals.
          </p>
          <div className="w-full mx-auto flex justify-center mb-16">
            <SearchForm title="Search" objective="product" />
          </div>

          <div className="text-left">
            <h2 className="font-description font-semibold text-[40px] mb-10">Popular Search</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] text-[30px] font-description">
              {popularItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="hover:text-[#3187EE] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
