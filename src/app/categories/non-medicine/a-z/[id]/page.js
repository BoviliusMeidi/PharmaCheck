'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import AZTable from "@/components/AZTable";
import Product from "@/components/Product";
import SearchForm from "@/components/SearchForm";
import LoadingSpinner from "@/components/LoadingSpinner";

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
                .select('id, medicine_name, image_url')
                .ilike('medicine_name', `${keyword}%`)
                .eq('medicine_categories', 'non-medicine')

            if (error) {
                console.error('Error fetching medicines:', error.message);
            } else {
                setMedicines(data);
            }
            setLoading(false);
        };

        fetchMedicines();
    }, [keyword]);

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="p-12 bg-[url('/background/wave-left.svg')] bg-no-repeat bg-cover bg-center">
            <div className="flex flex-row gap-8">
                <div className="w-1/5">
                    <AZTable title={'Non Medicine'} />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="font-title text-7xl">{`Non-Medicine ${keyword.toUpperCase()} Alphabet`}</h1>
                    <SearchForm title={'Search'} />
                    <div className="grid grid-cols-4 gap-10 p-4">
                        {medicines.map((med) => (
                            <Product key={med.id} data={med} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}