'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FooterProduct() {
  return (
    <footer className="w-full bg-white">
      {/* Wrapper hijau + wave, dengan padding agar teks tetap di dalam gelombang */}
      <div className="bg-[url('/background/green-wave-bot.svg')] bg-no-repeat bg-top bg-contain pt-35 pb-5">
        <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row lg:space-x-24">
          {/* Kiri */}
          <div className="flex flex-col gap-6 w-full">
            <Image
              src="/logo.png"
              alt="PharmaCheck Logo"
              width={300}
              height={200}
              className="object-contain"
            />
            <div className="flex flex-col gap-2 w-full">
              <span className="font-lato text-[35px] font-bold text-black">Daftar Halaman</span>
              <div className="flex flex-wrap gap-3 font-lato text-[25px] font-bold text-black">
                <Link href="/" className="hover:text-[#af9edf]">Beranda</Link>
                <Link href="/about" className="hover:text-[#af9edf]">Tentang</Link>
                <Link href="/verify" className="hover:text-[#af9edf]">Verifikasi</Link>
                <Link href="/categories" className="hover:text-[#af9edf]">Kategori</Link>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              © {new Date().getFullYear()} PharmaCheck. All rights reserved.
            </p>
          </div>

          {/* Kanan: Customer Service & Partners */}
          <div className="flex flex-col gap-6 w-full">
            <div>
              <h4 className="font-lato text-[35px] font-bold text-black mb-2">
                Layanan Keluhan Konsumen
              </h4>
              <div className="flex flex-col gap-8 font-lato text-[20px] text-black">
                <div>
                  <p className="leading-[100%] mb-4" align="left">
                    Rumah Sakit Hermina Podomoro.<br/>
                    Blok E 3, Jl. Danau Agung 2 No.28 - 30, RT.3/RW.16,<br />
                    Sunter Agung, Kec. Tj. Priok, Jkt Utara,<br />
                    Daerah Khusus Ibukota Jakarta 14350
                  </p>
                  <p className="leading-[100%]" align="left">
                    Layanan Pengaduan BPOM<br/>
                    Jalan Percetakan Negara Nomor 23<br />
                    Jakarta - 10560 - Indonesia (HaloBPOM 1500533)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-row gap-6 items-center">
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
      </div>
    </footer>
  );
}
