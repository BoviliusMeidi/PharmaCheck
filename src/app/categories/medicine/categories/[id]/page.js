'use client'

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import CategoryTable from "@/components/CategoryTable";
import Category from "@/components/Category";
import SearchForm from "@/components/SearchForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import Product from "@/components/Product";

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
                .from('sub_categories')
                .select(`sub_sub_categories(*)`)
                .eq('name', categoryTitle);

            if (subCatError) {
                console.error('Error fetching sub categories:', subCatError.message);
            }

            if (subCatData && subCatData.length > 0) {
                const flatData = subCatData.flatMap(item => item.sub_sub_categories || []);
                console.log(flatData);
                setCategories(flatData);
                setMode('category');
                setLoading(false);
                return;
            }

            const { data: productData, error: productError } = await supabase
                .from('medicines')
                .select(`*, sub_sub_categories (name, sub_categories (name, main_categories (name)))`)
                .eq('sub_sub_categories.name', categoryTitle)
                .eq('sub_sub_categories.sub_categories.main_categories.name', 'medicine')
                .not('sub_sub_categories', 'is', null);

            if (productError) {
                console.error('Error fetching products:', productError.message);
            }

            if (productData && productData.length > 0) {
                console.log(productData)
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
        <div className="p-12 bg-[url('/background/wave-left.svg')] bg-no-repeat bg-cover bg-center">
            <div className="flex flex-row gap-8">
                <div className="w-1/3">
                    <CategoryTable title={'Med & Treatment'} />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="font-title text-7xl">{categoryTitle}</h1>
                    <SearchForm title={'Search'} />

                    {mode === 'category' && (
                        <div className="grid grid-cols-4 gap-10 p-4">
                            {categories.map(cat => (
                                <Category key={cat.id} data={cat} />
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
    );
}
