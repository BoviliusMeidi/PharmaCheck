'use client';

import React from 'react';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const categories = [
  { id: 1, title: 'Perawatan Jerawat',            icon: '/categories/ByDisease/CCF01.png',    href: '/categories/non-medicine/categories/Perawatan Jerawat' },
  { id: 2, title: 'Kosmetik dan Kecantikan',      icon: '/categories/ByDisease/BD01.png',     href: '/categories/non-medicine/categories/Kosmetik dan Kecantikan' },
  { id: 3, title: 'Eksim',                        icon: '/categories/ByDisease/THT01.png',    href: '/categories/non-medicine/categories/Eksim' },
  { id: 4, title: 'Perawatan Pria',               icon: '/categories/ByDisease/THT01.png',    href: '/categories/non-medicine/categories/Perawatan Pria' },
  { id: 5, title: 'Perawatan Diri',               icon: '/categories/ByDisease/THT01.png',    href: '/categories/non-medicine/categories/Perawatan Diri' },
  { id: 6, title: 'Perlindungan Matahari',        icon: '/categories/ByDisease/THT01.png',    href: '/categories/non-medicine/categories/Perlindungan Matahari' },
  { id: 7, title: 'Perawatan Kulit',              icon: '/categories/ByDisease/THT01.png',    href: '/categories/non-medicine/categories/Perawatan Kulit' },

];

export default function BeautySelfcarePage() {
  return (
    <div className="relative bg-[#FCF7F8] min-h-screen flex flex-col">
        <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
        <MenuBar />
        <div className="flex-1 flex justify-center px-8">
          <div className="py-10 px-8 max-w-[1083px] text-center">
            <h1 className="font-title text-[80px]">Kecantikan & Perawatan Diri</h1>
            <p className="text-black mx-auto font-description text-[25px] mb-16 leading-[1.2]">
              Informasi yang detail dan akurat disediakan untuk lebih dari 24.000 
              obat resep dan obat bebas untuk konsumen maupun tenaga kesehatan.
            </p>

            <div className="w-full mx-auto flex justify-center mb-8">
              <SearchForm title="Search" objective="product" />
            </div>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className="
                      relative 
                      bg-white 
                      rounded-[20px] 
                      shadow-md 
                      hover:shadow-lg 
                      transition 
                      w-[270px] 
                      h-[270px] 
                      flex 
                      flex-col 
                      items-center 
                      justify-between 
                      p-6 
                      border border-black-300
                    "
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <Image 
                        src={cat.icon} 
                        alt={cat.title} 
                        className="object-contain max-h-[120px]"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="w-full text-center mt-4">
                      <p className="text-[25px] font-[900] font-lato leading-tight">
                        {cat.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
