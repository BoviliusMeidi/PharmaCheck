'use client';

import React from 'react';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

export default function PopularPage() {
  const popularItems = [
    { name: 'Telfast Plus', href: '' },
    { name: 'OBH Combi', href: '' },
    { name: 'Panadol Extra', href: '' },
    { name: 'Paracetamol', href: '' },
    { name: 'Sanmol Forte', href: '' },
    { name: 'Sanmol', href: '' },
    { name: 'Tempra Drops', href: '' },
    { name: 'Naprex Sirup', href: '' },
    { name: 'Ottopan Drops', href: '' },
    { name: 'Tempra Forte', href: '' },
    { name: 'Tempra Sirup', href: '' },
    { name: 'Lanos Drops', href: '' },
  ];

  return (
    <div className="relative bg-[#FCF7F8] min-h-screen flex flex-col">
      <div className="bg-[url('/background/wave-up.svg')] bg-no-repeat bg-contain flex flex-col bg-[#FCF7F8] h-screen overflow-hidden">
        <MenuBar />
        <div className="flex-1 flex justify-center px-8">
          <div className="py-10 px-8 max-w-[1083px] text-center">
            <h1 className="font-title text-[80px]">Pencarian Populer</h1>
            <p className="text-black mx-auto font-description text-[25px] mb-16 leading-[1.2]">
              Informasi yang rinci dan akurat disediakan untuk lebih dari 24.000 obat resep dan obat bebas
              baik untuk konsumen maupun tenaga kesehatan.
            </p>
            <div className="w-full mx-auto flex justify-center mb-16">
              <SearchForm title={"Cari"} objective={"product"}/>
            </div>

            <div className="text-left">
              <h2 className="font-description font-semibold text-[40px] mb-5">Pencarian Teratas</h2>
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
      <Footer />
    </div>
  );
}
