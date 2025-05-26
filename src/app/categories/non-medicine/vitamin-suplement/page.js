'use client';

import React from 'react';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';

const categories = [
  { id: 1, title: 'Cough, Cold & Flu', icon: '/non-categories/image6.png', href: '/' },
  { id: 2, title: 'Digestive Problem', icon: '/non-categories/image7.png', href: '/' },
  { id: 3, title: 'THT Problem', icon: '/non-categories/image8.png', href: '/' },
  { id: 4, title: 'Skin Condition', icon: '/non-categories/image9.png', href: '/' },
  { id: 5, title: 'Bones & Joints', icon: '/non-categories/image10.png', href: '/' },
  { id: 6, title: 'Allergies', icon: '/non-categories/image14.png', href: '/' },
];

export default function VitaminSuplementPage() {
  return (
    <div className="relative bg-[#FCF7F8] min-h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 flex justify-center px-8">
        <div className="py-10 px-8 max-w-[1083px] text-center">
          <h1 className="font-title text-[80px]">Vitamins and Supplements</h1>
          <p className="text-black mx-auto font-description text-[25px] mb-16 leading-[1.2]">
            Detailed and accurate information is provided on over 24,000 prescription and over-the-counter
            medicines for both consumers and healthcare professionals.
          </p>

          <div className="w-full max-w-4xl mx-auto flex justify-center">
            <SearchForm title="Search" objective="product" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 justify-center">
            {categories.map(cat => (
              <Link
                key={cat.id}
                href={cat.href}
                className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition w-[271px] h-[247px] mx-[50px] mb-[50px] overflow-hidden border border-black-300"
              >
                <div className="flex justify-center pt-6">
                  <img src={cat.icon} alt={cat.title} className="w-[120px] h-[120px]" />
                </div>
                <span className="absolute bottom-4 left-4 font-description font-semibold text-[30px] text-left w-[148px]">
                  {cat.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
