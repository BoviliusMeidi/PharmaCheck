'use client';

import React from 'react';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const categories = [
  { id: 1, title: 'Batuk, Pilek & Flu', icon: '/categories/ByDisease/CCF01.png', href: '/categories/medicine/categories/Batuk, Pilek & Flu' },
  { id: 2, title: 'Masalah Pencernaan', icon: '/categories/ByDisease/BD01.png', href: '/categories/medicine/categories/Masalah Pencernaan' },
  { id: 3, title: 'Masalah THT', icon: '/categories/ByDisease/THT01.png', href: '/categories/medicine/categories/Masalah THT' },
  { id: 4, title: 'Kondisi Kulit', icon: '/categories/ByDisease/SC01.png', href: '/categories/medicine/categories/Kondisi Kulit' },
  { id: 5, title: 'Tulang & Sendi Sakit', icon: '/categories/ByDisease/BJ01.png', href: '/categories/medicine/categories/Tulang & Sendi Sakit' },
  { id: 6, title: 'Alergi', icon: '/categories/ByDisease/AL01.png', href: '/categories/medicine/categories/Alergi' },
  { id: 7, title: 'Demam & Nyeri', icon: '/categories/ByDisease/FP01.png', href: '/categories/medicine/categories/Demam & Nyeri' },
  { id: 8, title: 'Masalah Mata', icon: '/categories/ByDisease/EP01.png', href: '/categories/medicine/categories/Masalah Mata' },
  { id: 9, title: 'Infeksi', icon: '/categories/ByDisease/IF01.png', href: '/categories/medicine/categories/Infeksi' },
  { id: 10, title: 'Kesuburan & Lainnya', icon: '/categories/ByDisease/FM01.png', href: '/categories/medicine/categories/Kesuburan & Lainnya' },
  { id: 11, title: 'Obat Lainnya', icon: '/categories/ByDisease/OM01.png', href: '/categories/medicine/categories/Obat Lainnya' },
];

export default function ByDiseasePage() {
  return (
    <div className="relative bg-[#FCF7F8] min-h-screen flex flex-col">
      <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
        <MenuBar />
        <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="py-10 w-full max-w-[1083px] text-center">
            <h1 className="font-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-12 leading-tight">
              Berdasarkan Penyakit
            </h1>
            <p className="font-description sm:text-lg md:text-xl lg:text-2xl mb-12 mt-4">
              Informasi yang detail dan akurat disediakan untuk lebih dari 24.000
              obat resep dan obat bebas untuk konsumen maupun tenaga kesehatan.
            </p>

            <div className="w-full mx-auto flex justify-center mb-10 px-2">
              <SearchForm title="Search" objective="product" />
            </div>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className="
                      relative 
                      bg-white 
                      rounded-2xl 
                      shadow-md 
                      hover:shadow-xl 
                      transition 
                      w-full 
                      max-w-[270px] 
                      aspect-square 
                      flex 
                      flex-col 
                      items-center 
                      justify-between 
                      p-6 
                      border 
                      border-black-300
                      mx-auto
                    "
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src={cat.icon}
                        alt={cat.title}
                        className="object-contain max-h-[100px] sm:max-h-[120px]"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="w-full text-center mt-4">
                      <p className="sm:text-2xl font-[900] font-lato leading-tight">
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