'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const VerifyPage = () => {
    const router = useRouter();
    const [inputCode, setInputCode] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputCode.trim()) {
            router.push(`/verify/${inputCode}`);
        }
    };

    return (
        <div className="bg-[url('/background/wave-left.svg')] bg-no-repeat bg-cover bg-center">
            <div className="h-screen flex flex-col justify-center items-center gap-[44]">
                <div className='flex flex-col gap-[16]'>
                    <h1 className='font-title text-center text-8xl'>Verify Your Medicine</h1>
                    <p className='font-description text-center text-2xl'>Verify all types of drugs using their codes, brand names, and generic names. Ensure <br /> authenticity and safety with verified information from BPOM and KEMENKES.</p>
                </div>
                <form onSubmit={handleSearch} className='font-description flex justify-between items-center max-w-4xl w-full h-[70] bg-base rounded-[40]'>
                    <input
                        className='w-full ml-12 text-2xl'
                        type="text"
                        placeholder="Type a medicine name, illness, or classification code..."
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                    />
                    <button type="submit" className='cursor-pointer text-[32px] bg-mint rounded-[40px] border w-[300] h-[70] font-[600] border-black'>Verify</button>
                </form>
            </div>
        </div>
    );
};

export default VerifyPage;