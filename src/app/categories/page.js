import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function CategoriesPage() {
  return (
    <div className="bg-[url('/background/wave-up.svg')] bg-no-repeat bg-contain flex flex-col bg-[#FCF7F8] min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 max-w-[1083px] mx-auto w-full">
        <div className="w-full">
          <div className="font-title text-center text-[40px] sm:text-[60px] md:text-[80px] mt-56 sm:mt-12">
            Kategori Obat
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 justify-items-center">
            <Link href="/categories/medicine" className="w-full max-w-[476px]">
              <div className="w-full h-[300px] sm:h-[441px] rounded-3xl shadow-lg bg-[#F4F4F4] p-9 text-center border-2 border-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col items-center justify-between">
                <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-description font-bold">
                  Obat-obatan
                </h2>
                <div className="relative w-[150px] sm:w-[200px] md:w-[250px] aspect-square">
                  <Image 
                    src="/icon/medcat.png" 
                    alt="Medicine" 
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 250px"
                  />
                </div>
              </div>
            </Link>

            <Link href="/categories/non-medicine" className="w-full max-w-[476px]">
              <div className="w-full h-[300px] sm:h-[441px] rounded-3xl shadow-lg bg-[#F4F4F4] p-9 text-center border-2 border-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col items-center justify-between">
                <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-description font-bold">
                  Non Obat
                </h2>
                <div className="relative w-[140px] sm:w-[180px] md:w-[200px] aspect-[4/5]">
                  <Image 
                    src="/icon/nonmedcat.png" 
                    alt="Non Medicine" 
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 200px"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
