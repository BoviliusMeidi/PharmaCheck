'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    router.back()
  };

  return (
    <div className="relative bg-[#FCF7F8]">
      <div className="flex justify-between items-center px-10 py-4">
        <button
          className="text-black text-[40px] font-normal"
          onClick={handleClose}
        >
          x
        </button>
        <div className="flex items-center gap-8">
          <div className="flex w-[208px] h-[56px] rounded-[40px] bg-white shadow-md overflow-hidden">
            <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] text-black text-[24px] font-semibold font-description transition-colors">
              <img
                src="/USA Flag.png"
                alt="US Flag"
                className="w-[24px] h-auto object-contain"
              />{' '}
              ENG
            </button>
            <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] bg-[#c7f5f0] text-black text-[24px] font-semibold font-description transition-colors">
              <img
                src="/Indonesia Flag.png"
                alt="ID Flag"
                className="w-[24px] h-auto object-contain"
              />{' '}
              IND
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-[36px] font-bold focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-[70px] right-6 bg-white rounded shadow-md p-4 flex flex-col gap-2 z-50">
          <a href="/" className="text-lg font-medium hover:text-blue-500">
            Beranda
          </a>
          <a href="/about" className="text-lg font-medium hover:text-blue-500">
            Tentang
          </a>
          <a href="/verify" className="text-lg font-medium hover:text-blue-500">
            Verifikasi
          </a>
          <a href="/categories" className="text-lg font-medium hover:text-blue-500">
            Kategori
          </a>
        </div>
      )}
    </div>
  );
}