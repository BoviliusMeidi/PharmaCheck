'use client';

import SearchForm from '@/components/SearchForm';
import Navbar from '@/components/Navbar';

export default function HomePage ()  {
    return (
        <div className="bg-[url('/background/wave-left.svg')] bg-[#FCF7F8] bg-no-repeat bg-cover bg-center">
            <Navbar />
            <div className="h-screen flex flex-col justify-center items-center gap-[44]">
                <div className='flex flex-col gap-[16]'>
                    <h1 className='font-title text-center text-8xl'>Find Your Medicine</h1>
                    <p className='font-description text-center text-2xl'>Find complete and accurate drug information! Use this search to get detailed explanations, <br></br>verify authenticity, and ensure the safety of drugs worldwide from trusted sources.</p>
                </div>
                <div className='w-full max-w-4xl'>
                    <SearchForm title={"Search"} objective={"product"}/>
                </div>
            </div>
        </div>
    );
};