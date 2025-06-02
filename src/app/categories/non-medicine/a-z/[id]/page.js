'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import AZTable from "@/components/AZTable";
import Product from "@/components/Product";
import SearchForm from "@/components/SearchForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from '@/components/Footer';
import MenuBar from "@/components/MenuBar";

export default function AZ() {
    const params = useParams();
    const keyword = params.id;
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMedicines = async () => {
            if (!keyword || keyword.length !== 1) return;
            setLoading(true);

            const { data, error } = await supabase
                .from('medicines')
                .select(`*, Sub_Sub_Sub_Categories(Name, Sub_Sub_Categories (Name, Sub_Categories (Name, Main_Categories (Name))))`)
                .ilike('medicine_name', `${keyword}%`);

            const filteredData = data?.filter(
                (item) =>
                    item.Sub_Sub_Sub_Categories &&
                    item.Sub_Sub_Sub_Categories.Sub_Sub_Categories &&
                    item.Sub_Sub_Sub_Categories.Sub_Sub_Categories.Sub_Categories &&
                    item.Sub_Sub_Sub_Categories.Sub_Sub_Categories.Sub_Categories.Main_Categories &&
                    item.Sub_Sub_Sub_Categories.Sub_Sub_Categories.Sub_Categories.Main_Categories.Name === 'Non-Medicine'
            );

            if (error) {
                console.error('Error fetching medicines:', error.message);
            } else {
                setMedicines(filteredData);
            }
            setLoading(false);
        };

        fetchMedicines();
    }, [keyword]);

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="bg-[#FCF7F8] flex flex-col min-h-screen justify-between">
            <MenuBar />
            <div className="p-6 sm:p-10 md:p-20 bg-[url('/background/wave-up.svg')] bg-no-repeat z-10 bg-contain flex flex-col">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/5">
                        <AZTable title={'Non-Obat'} objective={'non-medicine'} />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col gap-5 w-full">
                        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                            {`Non-Obat ${keyword.toUpperCase()} Alfabet`}
                        </h1>
                        <div className='w-full max-w-4xl'>
                            <SearchForm title={"Search"} objective={"product"} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-2">
                            {medicines.map((med) => (
                                <div key={med.id} className="min-w-0">
                                    <Product data={med} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}