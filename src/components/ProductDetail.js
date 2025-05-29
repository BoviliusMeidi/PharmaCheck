'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import AccordionItem from '@/components/AccordionItem';
import LoadingSpinner from './LoadingSpinner';
import { fetchMedicineAuto } from '@/lib/fetchMedicine';
import { stripTags, capitalizeWords } from '@/lib/utils';

export default function ProductDetailResult () {
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
          <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='font-header text-7xl font-extrabold normal-case mb-12'>{capitalizeWords(product.api.nama_dagang)}</h1>
            <Image src={product.db?.image_url || '/Medicine.png'} width={product.db?.image_url ? 350 : 160}
              height={product.db?.image_url ? 350 : 160} alt='Valid Medicine' className="rotate-6 mb-6" />
            <div className='w-full flex flex-row justify-between px-16'>
              <div className='flex flex-col gap-1'>
                <h3 className='font-header text-3xl'>Generic Name : {capitalizeWords(product.api.atc_l5.name)}</h3>
                <h3 className='font-header text-3xl'>Brand Names : {capitalizeWords(product.api.nama_dagang)}</h3>
                <h3 className='font-header text-3xl'>Medicine Class : {capitalizeWords(product.api.atc_l3.name)}</h3>
              </div>
              <Image src="/Logo.png" width={300} height={200} alt='Logo Pharma Check' className="" />
            </div>
          </div>
          <div className='h-full w-full flex flex-col gap-12 justify-center my-20 mb-32'>
            <AccordionItem title="Description">
              <div
                className="font-header text-3xl mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.description) }}
              />
            </AccordionItem>
            <AccordionItem title="Dosage">
              {Array.isArray(product.api.dosage_usage) &&
                product.api.dosage_usage.map((item, index) => (
                  <div
                    key={index}
                    className="font-header text-3xl mt-4"
                    dangerouslySetInnerHTML={{ __html: stripTags(item.name) }}
                  />
                ))}
            </AccordionItem>
            <AccordionItem title="Side Effects">
              <div
                className="font-header text-3xl mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.side_effect) }}
              />
            </AccordionItem>
            <AccordionItem title="Warnings">
              <div
                className="font-header text-3xl mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.warning) }}
              />
            </AccordionItem>
            <AccordionItem title="Interaction">
              <div
                className="font-header text-3xl mt-4"
                dangerouslySetInnerHTML={{ __html: stripTags(product.api.indication) }}
              />
            </AccordionItem>
          </div>
        </div>
      ) : (
        <p>Tidak ada data yang ditemukan atau mencari...</p>
      )}
    </div>
  );
};
