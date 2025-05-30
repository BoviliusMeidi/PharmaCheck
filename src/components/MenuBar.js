'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BiMenu, BiX } from 'react-icons/bi';

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => router.back();

  return (
    <header className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-7xl flex justify-between items-center mt-5">
        {/* Tombol Kembali */}
        <button
          onClick={handleClose}
          aria-label="Kembali"
          className="text-gray-800 hover:text-pink-600 transition-colors"
        >
          <BiX size={40} />
        </button>

        {/* Toggle Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="text-gray-800 hover:text-pink-600 transition-colors focus:outline-none"
        >
          {menuOpen ? <BiX size={40} /> : <BiMenu size={40} />}
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

      {/* Side Menu (fit-content height) */}
      <nav
        className={`
          fixed top-16 right-0 w-64 bg-white/90 backdrop-blur-lg
          transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-in-out
          shadow-xl z-50 flex flex-col p-6
          h-auto
        `}
      >
        {[
          { label: 'Beranda',    href: '/' },
          { label: 'Tentang',    href: '/about' },
          { label: 'Verifikasi', href: '/verify' },
          { label: 'Kategori',   href: '/categories' },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="
              mb-4 text-lg font-semibold font-sans text-gray-800
              hover:text-blue-soft hover:border-l-4 hover:pl-2
              border-transparent border-l-4 transition-all duration-200
            "
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
