'use client';

import SearchForm from '@/components/SearchForm';
import Navbar from '@/components/Navbar';

export default function VerifyPage() {
    return (
        <div className="bg-[url('/background/wave-left.svg')] bg-[#FCF7F8] bg-no-repeat bg-cover bg-center">
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center gap-[44]">
                <div className='flex flex-col gap-[16]'>
                    <h1 className='font-title text-center text-8xl'>Verifikasi Obat Anda</h1>
                    <p className='font-description text-center text-2xl'>Verifikasi semua jenis obat dengan menggunakan kode, nama merek, dan nama generiknya. Memastikan <br /> keaslian dan keamanan dengan informasi terverifikasi dari BPOM dan KEMENKES.</p>
                </div>
                <div className='w-full max-w-4xl'>
                    <SearchForm title={"Verify"} objective={"verify"}/>
                </div>
            </div>
        </div>
    );
};