'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FooterProduct() {
  return (
    <footer className="w-full bg-white bg-[url('/background/green-wave-bot.svg')] bg-no-repeat bg-cover pt-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-[90%] xl:max-w-[80%] mx-auto flex flex-col lg:flex-row lg:space-x-24 gap-12">
        {/* Kiri */}
        <div className="flex flex-col gap-6 w-full">
          <Image
            src="/logo.png"
            alt="PharmaCheck Logo"
            width={300}
            height={200}
            className="object-contain mx-auto lg:mx-0"
          />
          <div className="flex flex-col gap-2 w-full text-center lg:text-left">
            <span className="font-lato text-[28px] sm:text-[32px] md:text-[35px] font-bold text-black">Daftar Halaman</span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 font-lato text-[20px] sm:text-[22px] md:text-[25px] font-bold text-black">
              <Link href="/" className="hover:text-[#af9edf]">Beranda</Link>
              <Link href="/about" className="hover:text-[#af9edf]">Tentang</Link>
              <Link href="/verify" className="hover:text-[#af9edf]">Verifikasi</Link>
              <Link href="/categories" className="hover:text-[#af9edf]">Kategori</Link>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center lg:text-left mt-4">
            © {new Date().getFullYear()} PharmaCheck. All rights reserved.
          </p>
        </div>

        {/* Kanan */}
        <div className="flex flex-col gap-6 w-full">
          <div>
            <h4 className="font-lato text-[28px] sm:text-[32px] md:text-[35px] font-bold text-black mb-2 text-center lg:text-left">
              Layanan Keluhan Konsumen
            </h4>
            <div className="flex flex-col gap-6 font-lato text-[18px] sm:text-[20px] text-black">
              <div className="text-center lg:text-left">
                <p className="leading-tight mb-4">
                  Rumah Sakit Hermina Podomoro.<br />
                  Blok E 3, Jl. Danau Agung 2 No.28 - 30, RT.3/RW.16,<br />
                  Sunter Agung, Kec. Tj. Priok, Jkt Utara,<br />
                  Daerah Khusus Ibukota Jakarta 14350
                </p>
                <p className="leading-tight lg:text-right">
                  Layanan Pengaduan BPOM<br />
                  Jalan Percetakan Negara Nomor 23<br />
                  Jakarta - 10560 - Indonesia (HaloBPOM 1500533)
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-6 items-center">
              <Image
                src="/aboutUs/Kemenkes Logo.png"
                alt="Kemenkes"
                width={200}
                height={50}
                className="object-contain"
              />
              <Image
                src="/aboutUs/BPOM Logo.png"
                alt="BPOM"
                width={200}
                height={50}
                className="object-contain"
              />
              <Image
                src="/aboutUs/RS Hermina Mitra Logo.png"
                alt="Hermina"
                width={100}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
