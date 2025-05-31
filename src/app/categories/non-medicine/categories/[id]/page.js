'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import CategoryTable from "@/components/CategoryTable";
import Category from "@/components/Category";
import SearchForm from "@/components/SearchForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import MenuBar from '@/components/MenuBar';
import CategoryTable2 from "@/components/CategoryTable2";

export default function CategoriesResult() {
    const params = useParams();
    const keyword = params.id;
    const categoryTitle = decodeURIComponent(keyword);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!categoryTitle) return;
            setLoading(true);

            const { data: subCatData, error: subCatError } = await supabase
                .from('Sub_Sub_Categories')
                .select(`Sub_Sub_Sub_Categories(*)`)
                .eq('Name', categoryTitle);

            if (subCatError) {
                console.error('Error fetching sub sub categories:', subCatError.message);
            }

            if (subCatData && subCatData.length > 0) {
                const flatData = subCatData.flatMap(item => item.Sub_Sub_Sub_Categories || []);
                setCategories(flatData);
                setMode('category');
                setLoading(false);
                return;
            }

            const { data: productData, error: productError } = await supabase
                .from('medicines')
                .select(`*, Sub_Sub_Sub_Categories(Name, Sub_Sub_Categories (Name, Sub_Categories (Name, Main_Categories (Name))))`)
                .eq('Sub_Sub_Sub_Categories.Name', categoryTitle)
                .eq('Sub_Sub_Sub_Categories.Sub_Sub_Categories.Sub_Categories.Main_Categories.Name', 'Medicine')
                .not('Sub_Sub_Sub_Categories', 'is', null);

            if (productError) {
                console.error('Error fetching products:', productError.message);
            }

            if (productData && productData.length > 0) {
                setProducts(productData);
                setMode('product');
            }

            setLoading(false);
        };

        fetchData();
    }, [categoryTitle]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="bg-[#FCF7F8] flex flex-col min-h-screen justify-between">
            <MenuBar />
            <div className="p-20 bg-[url('/background/wave-up.svg')] bg-no-repeat z-10 bg-contain flex flex-col">
                <div className="flex flex-row gap-8">
                    <div className="w-1/3">
                        <CategoryTable2 title={'Kategori Non-Obat'} />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="font-title text-7xl">{categoryTitle}</h1>
                        <SearchForm title={'Search'} />

                        {mode === 'category' && (
                            <div className="grid grid-cols-4 gap-10 p-4">
                                {categories.map(cat => (
                                    <Category key={cat.Sub_Sub_Sub_ID} data={cat} />
                                ))}
                            </div>
                        )}

                        {mode === 'product' && (
                            <div className="grid grid-cols-4 gap-10 p-4">
                                {products.map(prod => (
                                    <Product key={prod.id} data={prod} />
                                ))}
                            </div>
                        )}

                        {mode === null && (
                            <p className="text-red-500 text-lg font-semibold mt-4">Data tidak ditemukan.</p>
                        )}
                    </div>
                </div>
            
            </div>
        <Footer />
        </div>
    );
}
