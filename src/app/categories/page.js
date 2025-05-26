import Navbar from '@/components/Navbar';

export default function CategoriesPage() {
    return (
        <div className="flex bg-[#FCF7F8] m-0">
            <Navbar />
            <div className="h-screen flex-1 py-12 px-8 max-w-[1083px] mx-auto mt-24 ">
                <div className='font-title text-center text-[80px]'>Medicine Categories</div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-40">
                    <div className="w-[476px] h-[441px] rounded-3xl rounded-lg shadow-lg bg-[#F4F4F4] p-6 text-center">
                        <h2 className="text-[50px] font-description font-bold mb-10">Medicine</h2>
                        <img src="/medicine.png" alt="Medicine" className="w-[130px] h-[260px] mx-auto h-40" />
                    </div>
                    <div className="w-[476px] h-[441px] rounded-3xl shadow-lg bg-[#F4F4F4] p-6 text-center">
                        <h2 className="text-[50px] font-description font-bold mb-10">Non Medicine</h2>
                        <img src="/medicine.png" alt="Non Medicine" className="w-[130px] h-[260px] mx-auto h-40" />
                    </div>
                </div>
            </div>
        </div>
    )
}