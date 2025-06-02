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
    <header className="fixed top-0 left-0 w-full flex flex-col lg:flex-row justify-between items-center py-2 px-4 lg:px-6 bg-transparent z-50">
      {/* Logo */}
      <div className="relative w-full lg:w-auto flex justify-center lg:justify-start">
        <Image
          width={247}
          height={100}
          src="/logo.png"
          alt="PharmaCheck Logo"
          className="w-[200px] lg:w-[247px] h-[80px] lg:h-[100px] object-contain"
        />
      </div>

      {/* Navigation */}
      <div className="w-full flex justify-center py-4 px-2 lg:px-6">
        <nav className="flex flex-wrap justify-center gap-3 lg:gap-0 lg:justify-around items-center w-full max-w-[685px] h-auto lg:h-[70px] rounded-[40px] bg-white shadow-md px-4 lg:px-0 py-3 lg:py-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  `text-[18px] lg:text-[24px] font-description font-bold leading-normal no-underline pb-1 transition-colors ` +
                  (isActive
                    ? 'border-b-2 lg:border-b-4 border-[#004E64] text-[#004E64]'
                    : 'text-black')
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Language Switcher*/}
      <div className="hidden lg:flex w-[208px] h-[56px] rounded-[40px] overflow-hidden">
        {/* <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] text-black text-[24px] font-semibold font-description transition-colors">
          <img src="/USA Flag.png" alt="US Flag" className="w-[24px] h-auto object-contain" />
          ENG
        </button>
        <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] bg-[#c7f5f0] text-black text-[24px] font-semibold font-description transition-colors">
          <img src="/Indonesia Flag.png" alt="ID Flag" className="w-[24px] h-auto object-contain" />
          IND
        </button> */}
      </div>
    </header>
  );
}
