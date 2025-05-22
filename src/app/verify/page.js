'use client';

import SearchForm from '@/components/SearchForm';

export default function VerifyPage() {
    return (
        <div className="bg-[url('/background/wave-left.svg')] bg-no-repeat bg-cover bg-center">
            <div className="h-screen flex flex-col justify-center items-center gap-[44]">
                <div className='flex flex-col gap-[16]'>
                    <h1 className='font-title text-center text-8xl'>Verify Your Medicine</h1>
                    <p className='font-description text-center text-2xl'>Verify all types of drugs using their codes, brand names, and generic names. Ensure <br /> authenticity and safety with verified information from BPOM and KEMENKES.</p>
                </div>
                <div className='w-full max-w-4xl'>
                    <SearchForm title={"Verify"} objective={"verify"}/>
                </div>
            </div>
        </div>
    );
};