'use client';

import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import MenuBar from '@/components/MenuBar';

export default function AZPage() {
    return (
        <div className="relative bg-[#FCF7F8] m-0 min-h-screen flex flex-col">
            <MenuBar />
            <div className="flex-1 flex justify-center px-8">
                <div className="py-10 px-8 max-w-[1083px] text-center">
                    <div className='font-title text-[80px]'>Medicine A-Z</div>
                    <div className="text-black mx-auto font-description text-[25px] font-normal mb-16 leading-[1.2]">
                        Detailed and accurate information is provided on over 24,000 prescription and over-the-counter medicines for both consumers and healthcare professionals.
                    </div>
                    <div className="w-full mx-auto flex justify-center">
                        <SearchForm title={"Search"} objective={"product"}/>
                    </div>
                    <div className="mt-12">
                        <div className="text-left text-[40px] font-normal mb-4">Browse A-Z</div>
                        <div className="grid grid-cols-9 gap-[20px] justify-center mx-auto">
                            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                                <Link href={`/categories/medicine/a-z/${letter}`} key={letter}>
                                    <div className="w-[89px] h-[89px] bg-[#B8F3F3] rounded-3xl flex items-center justify-center text-black text-[60px] font-bold shadow-xl cursor-pointer hover:bg-[#a0e5e5]">
                                        {letter}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};