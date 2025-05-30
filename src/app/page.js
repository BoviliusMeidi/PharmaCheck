'use client';

import SearchForm from '@/components/SearchForm';
import Navbar from '@/components/Navbar';
import AccordionItem from '@/components/AccordionItem';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function HomePage ()  {
    return (
        <div className="flex flex-col bg-[#FCF7F8] p-0 m-0 w-full">
          <Navbar/>
          <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
            <div className="h-screen flex flex-col justify-center items-center gap-[44]">
                <div className='flex flex-col gap-[16]'>
                    <h1 className='font-title text-center text-8xl'>Temukan Obat Anda</h1>
                    <p className='font-description text-center text-2xl'>Temukan informasi obat yang lengkap dan akurat! Gunakan pencarian ini untuk mendapatkan penjelasan terperinci, <br></br>memverifikasi keaslian, dan memastikan keamanan obat di seluruh dunia dari sumber tepercaya.</p>
                </div>
                <div className='w-full max-w-4xl'>
                    <SearchForm title={"Search"} objective={"product"}/>
                </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center py-15">
            <div className="grid grid-cols-2 max-w-5xl w-full">
              <Link href="/verify">
                <div className="h-[615px] w-[490px] bg-[url('/icon/vermed.png')] bg-[#fdfdfd] bg-no-repeat bg-top bg-[length:450px_450px] border-2 border-black rounded-[24px] p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-end justify-center group">
                  <h2 className="font-lato text-[64px]  font-bold text-black transition-colors duration-300">
                    Verifikasi Obat Anda
                  </h2>
                </div>
              </Link>
              
              <div className="flex flex-col gap-8 justify-start items-center">
                <Link href="/categories/medicine">
                  <div className="h-[370px] w-[490px] bg-[url('/icon/medcat.png')] bg-[#fdfdfd] bg-no-repeat bg-top bg-[length:244.27px_256.52px] border-2 border-black rounded-[24px] p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-end justify-center group">
                    <h2 className="font-lato text-[45px] font-bold text-black transition-colors duration-300">
                      Kategori Obat
                    </h2>
                  </div>
                </Link>

                <Link href="/categories/non-medicine">
                  <div className="h-[210px] w-[490px] bg-[url('/icon/nonmedcat.png')] bg-[#fdfdfd] bg-no-repeat bg-[position:80px_center]  bg-[length:137px_137px] border-2 border-black rounded-[24px] p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-end justify-end group">
                    <h2 className="w-[180px] font-lato text-[30px] font-bold text-black transition-colors duration-300">
                      Bukan Obat-obatan
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[url('/background/green-wave.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
            <div className="flex-1 py-40 px-8  max-w-[1083px] mx-auto">
              <div className="text-black font-header font-bold text-[96px] max-w-[980px] leading-[100%] mb-8">
                Kebenaran Data? Senang Anda Bertanya!
              </div>
              <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
                Data tersebut didasarkan pada kebenaran dan kepastian dari BPOM dan Kementerian Kesehatan Indonesia.
              </div>
              <div className="flex flex-row justify-between items-center w-full max-w-[1083px] gap-8">
                <div className="flex flex-col gap-8">
                  <Image 
                    src="/aboutUs/Kemenkes Logo.png" 
                    alt="Kemenkes Logo" 
                    width={617}
                    height={162}
                    className="object-contain" 
                  />
                  <Image 
                    src="/aboutUs/BPOM Logo.png" 
                    alt="BPOM Logo" 
                    width={617}
                    height={185}
                    className="object-contain" />
                </div>
                <Image 
                  src="/aboutUs/RS Hermina Mitra Logo.png" 
                  alt="RS Hermina Logo" 
                  width={371}
                  height={371}
                  className="object-contain" />
              </div>
            </div>
          </div>
          <div className='h-full w-full flex flex-col gap-12 justify-center my-20 mb-32'>
            <AccordionItem title="Apa itu PharmaCheck?">
              <div className="font-header text-3xl mt-4">
                PharmaCheck adalah alat sederhana dan praktis yang membantu Anda menemukan informasi lengkap dan tepercaya tentang 
                obat-obatan legal di Indonesia. Baik Anda pengguna biasa, apoteker, atau bahkan dokter - Anda bisa mencari 
                obat apa pun dan mendapatkan detailnya seperti nama, bahan, kegunaan, efek samping, dan banyak lagi. 
                Kami di sini untuk memastikan semua orang memahami obat-obatan mereka dengan lebih baik.
              </div>
            </AccordionItem>

            <AccordionItem title="Apakah semua data di PharmaCheck akurat dan sah?">
              <div className="font-header text-3xl mt-4">
                Kami bekerja keras untuk menjaga semuanya tetap akurat! 
                Semua data yang Anda lihat di PharmaCheck berasal dari sumber resmi seperti BPOM 
                (Badan Pengawas Obat dan Makanan) dan Kementerian Kesehatan. 
                Selain itu, kami juga memverifikasinya dengan mitra kami dari rumah sakit dan apotek. 
                Jadi ya - ini adalah obat yang sah. Tetapi jika Anda tidak yakin, 
                selalu ada baiknya untuk memeriksa ulang dengan ahli kesehatan.
              </div>
            </AccordionItem>
            
            <AccordionItem title="Bagaimana cara menggunakan PharmaCheck?">
              <div className ="font-header text-3xl mt-4">
                Sangat mudah! Cukup ketik nama obat - bisa nama merek, nama generik, atau bahkan nomor registrasinya - ke dalam pencarian, 
                nama generik, atau bahkan nomor registrasi - ke dalam kolom pencarian. 
                Anda akan langsung mendapatkan semua informasi yang Anda butuhkan, termasuk cara menggunakan obat tersebut, 
                apa yang harus diwaspadai, dan apakah obat tersebut terdaftar secara resmi atau tidak. 
                Tidak ada pendaftaran atau langkah-langkah yang rumit - cukup cari dan pergi.
              </div>
            </AccordionItem>

            <AccordionItem title="Siapa patner kerja PharmaCheck?">
              <div className="font-header text-3xl mt-4">
                PharmaCheck bekerja sama dengan lembaga-lembaga tepercaya seperti:
                <br/>
                RS Hermina Podomoro (untuk validasi medis),
                <br/>
                BPOM (Badan POM) - Otoritas obat dan makanan Indonesia,
                <br/>
                Kementerian Kesehatan (Kemenkes RI).
                <br/>
                Mitra kami membantu kami memastikan data yang akurat, terkini, dan benar-benar berguna bagi semua orang
              </div>
            </AccordionItem>
          </div>
          <Footer/>
        </div>
    );
};