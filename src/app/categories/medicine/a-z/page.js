'use client';

import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

export default function AZPage() {
    return (
        <div className="relative bg-[#FCF7F8] m-0 min-h-screen flex flex-col">
            <div className="bg-[url('/background/wave-up.svg')] bg-no-repeat bg-contain flex flex-col bg-[#FCF7F8]">
                <MenuBar />
                <div className="flex-1 flex justify-center px-4 sm:px-6 md:px-8">
                    <div className="py-10 px-4 sm:px-6 md:px-8 w-full max-w-[1083px] text-center pb-5">
                        <h1 className="font-title text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight pb-5">
                            Kategori Obat A-Z
                        </h1>

                        <p className="font-description text-center sm:text-lg md:text-xl lg:text-2xl leading-relaxed pb-5 px-2 sm:px-0">
                            Informasi yang detail dan akurat disediakan untuk lebih dari 24.000
                            obat resep dan obat bebas untuk konsumen maupun tenaga kesehatan.
                        </p>

                        <div className="w-full max-w-4xl mx-auto flex justify-center">
                            <SearchForm title="Search" objective="product" />
                        </div>

                        <div className="mt-12">
                            <div className="text-left text-xl sm:text-2xl md:text-5xl font-semibold mb-4 px-2 sm:px-0">
                                Tekan dan Cari A-Z
                            </div>

                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-3 sm:gap-4 justify-center mx-auto mb-12 px-2 sm:px-0">
                                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                                    <Link href={`/categories/medicine/a-z/${letter}`} key={letter}>
                                        <div className="w-14 h-14 sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] bg-[#B8F3F3] rounded-3xl flex items-center justify-center text-black text-2xl sm:text-3xl md:text-6xl font-bold cursor-pointer hover:bg-[#a0e5e5] transition">
                                            {letter}
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