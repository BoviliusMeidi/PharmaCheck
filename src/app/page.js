'use client';

import SearchForm from '@/components/SearchForm';
import Navbar from '@/components/Navbar';
import AccordionItem from '@/components/AccordionItem';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#FCF7F8] w-full">
      <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center gap-[40] mb-0">
          <div className='flex flex-col gap-[16]'>
            <h1 className='font-title text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>Temukan Obat Anda</h1>
            <p className='font-description text-center sm:text-lg md:text-xl lg:text-2xl'>
              Temukan informasi obat yang lengkap dan akurat! Gunakan pencarian ini
              untuk mendapatkan penjelasan terperinci,
              memverifikasi keaslian, dan memastikan keamanan
              obat di seluruh dunia dari sumber tepercaya.
            </p>
          </div>
          <div className='w-full max-w-4xl'>
            <SearchForm title={"Cari"} objective={"product"} />
          </div>
        </div>
      </div>
      <div className="relative bg-[#FCF7F8] pt-12">
        {/* Background wave */}
        <Image
          src="/background/wave-bottom.svg"
          alt="wave background"
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
          fill
        />
        <div className="relative z-10 w-full flex justify-center items-center py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full gap-8">
            <Link href="/verify">
              <div className="min-h-[300px] sm:h-[400px] md:h-[615px] w-full md:w-[490px] 
                  bg-[url('/icon/vermed.png')] bg-[#fdfdfd] bg-no-repeat bg-top border-2 border-black rounded-[24px] 
                  p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] 
                  transition-all duration-300 cursor-pointer flex items-end justify-center group">
                <h2 className="font-lato text-[28px] sm:text-[40px] md:text-[64px] font-bold text-black 
                   transition-colors duration-300 text-center leading-snug">
                  Verifikasi Obat Anda
                </h2>
              </div>
            </Link>
            <div className="flex flex-col gap-8 justify-start items-center w-full">
              <Link href="/categories/medicine">
                <div className="h-[300px] sm:h-[370px] w-full md:w-[490px] 
                    bg-[url('/icon/medcat.png')] bg-[#fdfdfd] bg-no-repeat bg-top 
                     border-2 border-black rounded-[24px] 
                    p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] 
                    transition-all duration-300 cursor-pointer flex items-end justify-center group">
                  <h2 className="font-lato text-[24px] sm:text-[32px] md:text-[45px] font-bold text-black 
                     transition-colors duration-300 text-center leading-snug">
                    Kumpulan Obat
                  </h2>
                </div>
              </Link>
              <Link href="/categories/non-medicine">
                <div className="h-[180px] sm:h-[210px] w-full md:w-[490px] 
                    bg-[url('/icon/nonmedcat.png')] bg-[#fdfdfd] bg-no-repeat
                    bg-[position:80px_center] bg-[length:137px_137px] 
                    border-2 border-black rounded-[24px] p-6 shadow-md 
                    hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 
                    cursor-pointer flex items-end justify-end group">
                  <h2 className="w-[140px] sm:w-[180px] font-lato text-[18px] sm:text-[24px] md:text-[30px] 
                     font-bold text-black transition-colors duration-300 text-right leading-snug">
                    Kumpulan Non Obat
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/background/green-wave.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
        <div className="flex-1 py-20 sm:py-32 px-4 sm:px-8 max-w-[1083px] mx-auto">
          <div className="text-black font-header font-bold text-[42px] sm:text-[60px] md:text-[80px] lg:text-[96px] max-w-full leading-[100%] mb-6 sm:mb-8">
            Kebenaran Data? Senang Anda Bertanya!
          </div>
          <div className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[35px] font-description font-normal text-black text-justify mb-6 sm:mb-8 leading-[1.5] sm:leading-[1.4]">
            Data tersebut didasarkan pada kebenaran dan kepastian dari BPOM dan Kementerian Kesehatan Indonesia.
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1083px] gap-8">
            <div className="flex flex-col gap-8 w-full lg:w-auto items-center">
              <Image
                src="/aboutUs/Kemenkes Logo.png"
                alt="Kemenkes Logo"
                width={617}
                height={162}
                className="object-contain w-full max-w-[500px] lg:max-w-none"
              />
              <Image
                src="/aboutUs/BPOM Logo.png"
                alt="BPOM Logo"
                width={617}
                height={185}
                className="object-contain w-full max-w-[500px] lg:max-w-none"
              />
            </div>
            <Image
              src="/aboutUs/RS Hermina Mitra Logo.png"
              alt="RS Hermina Logo"
              width={371}
              height={371}
              className="object-contain w-full max-w-[300px] lg:max-w-[371px]"
            />
          </div>
        </div>
      </div>

      <div className='px-4 sm:px-8 w-full h-full flex flex-col gap-12 justify-center my-20 mb-32'>
        <AccordionItem title="Apa itu PharmaCheck?">
          <div className="font-header sm:text-2xl md:text-3xl text-lg mt-4">
            PharmaCheck adalah alat sederhana dan praktis yang membantu Anda menemukan informasi lengkap dan tepercaya tentang
            obat-obatan legal di Indonesia. Baik Anda pengguna biasa, apoteker, atau bahkan dokter - Anda bisa mencari
            obat apa pun dan mendapatkan detailnya seperti nama, bahan, kegunaan, efek samping, dan banyak lagi.
            Kami di sini untuk memastikan semua orang memahami obat-obatan mereka dengan lebih baik.
          </div>
        </AccordionItem>
        <AccordionItem title="Apakah semua data di PharmaCheck akurat dan sah?">
          <div className="font-header sm:text-2xl md:text-3xl text-lg mt-4">
            Kami bekerja keras untuk menjaga semuanya tetap akurat!
            Semua data yang Anda lihat di PharmaCheck berasal dari sumber resmi seperti BPOM
            (Badan Pengawas Obat dan Makanan) dan Kementerian Kesehatan.
            Selain itu, kami juga memverifikasinya dengan mitra kami dari rumah sakit dan apotek.
            Jadi ya - ini adalah obat yang sah. Tetapi jika Anda tidak yakin,
            selalu ada baiknya untuk memeriksa ulang dengan ahli kesehatan.
          </div>
        </AccordionItem>
        <AccordionItem title="Bagaimana cara menggunakan PharmaCheck?">
          <div className="font-header sm:text-2xl md:text-3xl text-lg mt-4">
            Sangat mudah! Cukup ketik nama obat - bisa nama merek, nama generik, atau bahkan nomor registrasinya - ke dalam pencarian,
            nama generik, atau bahkan nomor registrasi - ke dalam kolom pencarian.
            Anda akan langsung mendapatkan semua informasi yang Anda butuhkan, termasuk cara menggunakan obat tersebut,
            apa yang harus diwaspadai, dan apakah obat tersebut terdaftar secara resmi atau tidak.
            Tidak ada pendaftaran atau langkah-langkah yang rumit - cukup cari dan pergi.
          </div>
        </AccordionItem>
        <AccordionItem title="Siapa patner kerja PharmaCheck?">
          <div className="font-header sm:text-2xl md:text-3xl text-lg mt-4">
            PharmaCheck bekerja sama dengan lembaga-lembaga tepercaya seperti:
            <br />
            RS Hermina Podomoro (untuk validasi medis),
            <br />
            BPOM (Badan POM) - Otoritas obat dan makanan Indonesia,
            <br />
            Kementerian Kesehatan (Kemenkes RI).
            <br />
            Mitra kami membantu kami memastikan data yang akurat, terkini, dan benar-benar berguna bagi semua orang
          </div>
        </AccordionItem>
      </div>
      <Footer />
    </div>
  );
};