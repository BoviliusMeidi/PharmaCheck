'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import AccordionItem from '@/components/AccordionItem';
import LoadingSpinner from './LoadingSpinner';
import { fetchMedicineAuto } from '@/lib/fetchMedicine';
import { stripTags, capitalizeWords } from '@/lib/utils';
import FooterProduct from '@/components/FooterProduct';
import MenuBar from './MenuBar';

export default function ProductDetailResult() {
  const params = useParams();
  const code = params.id;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMedicineAuto(code);
        setProduct(result);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };


    fetchData();
  }, [code]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      {product.api ? (
        <div>
          <MenuBar />
          <div className="bg-white min-h-screen flex flex-col justify-center items-center px-4 py-8">
            <h1 className="font-header text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold normal-case mb-10 text-center">
              {capitalizeWords(product.api.nama_dagang)}
            </h1>

            <Image
              src={product.db?.image_url || '/Medicine.png'}
              width={product.db?.image_url ? 350 : 160}
              height={product.db?.image_url ? 350 : 160}
              alt="Valid Medicine"
              className="rotate-6 mb-6"
            />

            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 px-4 sm:px-10 md:px-16">
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <h3 className="font-header text-xl sm:text-2xl md:text-3xl">
                  Generic Name: {capitalizeWords(product.api.atc_l5.name)}
                </h3>
                <h3 className="font-header text-xl sm:text-2xl md:text-3xl">
                  Brand Names: {capitalizeWords(product.api.nama_dagang)}
                </h3>
                <h3 className="font-header text-xl sm:text-2xl md:text-3xl">
                  Medicine Class: {capitalizeWords(product.api.atc_l3.name)}
                </h3>
              </div>

              <Image
                src="/Logo.png"
                width={200}
                height={100}
                alt="Logo Pharma Check"
                className="w-[200px] h-auto"
              />
            </div>
          </div>
          <div className='bg-white h-full w-full flex flex-col gap-12 justify-center'>
            <AccordionItem title="Deskripsi">
              <div
                className="font-header sm:text-2xl md:text-3xl text-lg mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.description) }}
              />
            </AccordionItem>
            <AccordionItem title="Dosis">
              {Array.isArray(product.api.dosage_usage) &&
                product.api.dosage_usage.map((item, index) => (
                  <div
                    key={index}
                    className="font-header sm:text-2xl md:text-3xl text-lg mt-4"
                    dangerouslySetInnerHTML={{ __html: stripTags(item.name) }}
                  />
                ))}
            </AccordionItem>
            <AccordionItem title="Efek Samping">
              <div
                className="font-header sm:text-2xl md:text-3xl text-lg mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.side_effect) }}
              />
            </AccordionItem>
            <AccordionItem title="Peringatan Penggunaan">
              <div
                className="font-header sm:text-2xl md:text-3xl text-lg mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.warning) }}
              />
            </AccordionItem>
            <AccordionItem title="Interaksi Obat">
              <div
                className="font-header sm:text-2xl md:text-3xl text-lg mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.indication) }}
              />
            </AccordionItem>
          </div>

        </div>
      ) : (
        <div className="bg-white h-screen flex flex-col justify-center items-center text-center gap-12 px-4">
          <h1 className="font-title text-7xl">
            Obat Yang Anda Cari Belum <br /> Memiliki Informasi yang Lengkap
          </h1>
          <p className="font-header text-2xl">
            Silahkan tunggu perkembangannya dan gunakan pencarian obat informasi yang lain<br />
            Gunakan nama obat, kode, atau bentuk lainnya untuk mencari informasi yang lebih lengkap.
          </p>
          <Image src="/NotSmile.png" width={250} height={250} alt="Not Valid and Legal" />
        </div>
      )}
      <FooterProduct />
    </div>
  );
};
