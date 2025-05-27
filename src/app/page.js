'use client';

import SearchForm from '@/components/SearchForm';
import Navbar from '@/components/Navbar';
import AccordionItem from '@/components/AccordionItem';


export default function HomePage ()  {
    return (
        <div className="flex flex-col bg-[#FCF7F8] p-0 m-0 w-full">
          <Navbar/>
          <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
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
          <div className="w-full flex justify-center items-center py-15">
            <div className="grid grid-cols-2 max-w-5xl w-full">
              <div className="h-[615px] w-[490px] bg-[url('/icon/vermed.png')] bg-[#fdfdfd] bg-no-repeat bg-top bg-[length:450px_450px] border-2 border-black rounded-[24px] p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-end justify-center group">
                <h2 className="font-lato text-[64px]  font-bold text-black transition-colors duration-300">
                  Verify Your Medicine
                </h2>
              </div>
              <div className="flex flex-col gap-8 justify-start items-center">
                <div className="h-[370px] w-[490px] bg-[url('/icon/medcat.png')] bg-[#fdfdfd] bg-no-repeat bg-top bg-[length:244.27px_256.52px] border-2 border-black rounded-[24px] p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-end justify-center group">
                  <h2 className="font-lato text-[45px] font-bold text-black transition-colors duration-300">
                    Medicine Categories
                  </h2>
                </div>
              <div className="h-[210px] w-[490px] bg-[url('/icon/nonmedcat.png')] bg-[#fdfdfd] bg-no-repeat bg-[position:80px_center]  bg-[length:137px_137px] border-2 border-black rounded-[24px] p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-end justify-end group">
                <h2 className="w-[180px] font-lato text-[40px] font-bold text-black transition-colors duration-300">
                  Non Medicine
                </h2>
              </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/background/green-wave.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
            <div className="flex-1 py-40 px-8  max-w-[1083px] mx-auto">
              <div className="text-black font-header font-bold text-[96px] max-w-[980px] leading-[100%] mb-8">
                Data Correctness? Glad You Asked!
              </div>
              <div className="text-[35px] font-description font-normal text-black text-justify mb-8 leading-[1.2]">
                The data is based on the truth and certainty of the BPOM and the Ministry of Health of Indonesia.
              </div>
              <div className="flex flex-row justify-between items-center w-full max-w-[1083px] gap-8">
                <div className="flex flex-col gap-8">
                  <img src="/aboutUs/Kemenkes Logo.png" alt="Kemenkes Logo" className="w-[617px] h-[162px] mb-8" />
                  <img src="/aboutUs/BPOM Logo.png" alt="BPOM Logo" className="w-[617px] h-[185px]" />
                </div>
                <img src="/aboutUs/RS Hermina Mitra Logo.png" alt="RS Hermina Logo" className="w-[371px] h-[371px]" />
              </div>
            </div>
          </div>
          <div className='h-full w-full flex flex-col gap-12 justify-center my-20 mb-32'>
            <AccordionItem title="What is Pharma Check?">
              <div
                className="font-header text-3xl mt-4"
              />
            </AccordionItem>
            <AccordionItem title="Are all information and data guaranteed to be correct?">
              <div
                className="font-header text-3xl mt-4"
              />
            </AccordionItem>
            <AccordionItem title="How to use Pharma Check?">
              <div
                className="font-header text-3xl mt-4"
              />
            </AccordionItem>
            <AccordionItem title="Who are the partners of Pharma Check?">
              <div
                className="font-header text-3xl mt-4"
              />
            </AccordionItem>
          </div>
        </div>
    );
};