'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Verifikasi', href: '/verify' },
    { label: 'Kategori', href: '/categories' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-1 px-6 bg-transparent z-50">
      <div className="absolute top-0 left-0 py-1 px-6">
        <Image
          width={247}
          height={100}
          src="/logo.png"
          alt="PharmaCheck Logo"
          className="w-[247px] h-[100px] object-contain"
        />
      </div>

      <div className="w-full flex justify-center py-4 px-6">
        <nav className="flex justify-around items-center w-[685px] h-[70px] rounded-[40px] bg-white shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  `text-[24px] font-description font-bold leading-normal no-underline pb-1 transition-colors ` +
                  (isActive
                    ? 'border-b-4 border-[#004E64] text-[#004E64]'
                    : 'text-black')
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* <div className="flex w-[208px] h-[56px] rounded-[40px] bg-white shadow-md overflow-hidden">
        <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] text-black text-[24px] font-semibold font-description transition-colors">
          <img src="/USA Flag.png" alt="US Flag" className="w-[24px] h-auto object-contain" />
          ENG
        </button>
        <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] bg-[#c7f5f0] text-black text-[24px] font-semibold font-description transition-colors">
          <img src="/Indonesia Flag.png" alt="ID Flag" className="w-[24px] h-auto object-contain" />
          IND
        </button>
      </div> */}
    </header>
  );
}