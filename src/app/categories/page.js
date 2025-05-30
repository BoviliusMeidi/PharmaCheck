import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function CategoriesPage() {
  return (
    <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain flex flex-col bg-[#FCF7F8] h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-8 max-w-[1083px] mx-auto">
        <div className="w-full">
          <div className="font-title text-center text-[80px] mt-12">Kategori Obat</div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-20 justify-items-center">
            <Link href="/categories/medicine">
              <div className="w-[476px] h-[441px] rounded-3xl shadow-lg bg-[#F4F4F4] p-6 text-center border-2 border-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <h2 className="text-[50px] font-description font-bold ">Obat-obatan</h2>
                <Image 
                    src="/icon/medcat.png" 
                    alt="Medicine" 
                    className="object-contain mx-auto"
                    width={250}
                    height={250} />
              </div>
            </Link>
            <Link href="/categories/non-medicine">
              <div className="w-[476px] h-[441px] rounded-3xl shadow-lg bg-[#F4F4F4] p-6 text-center border-2 border-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <h2 className="text-[50px] font-description font-bold mb-10">Non Obat</h2>
                <Image
                    src="/icon/nonmedcat.png" 
                    alt="Non Medicine" 
                    className="object-contain mx-auto"
                    width={200}
                    height={260} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
