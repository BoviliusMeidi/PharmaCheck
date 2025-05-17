'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';
import { fetchMedicineByCode } from '@/lib/fetchMedicine';
import { stripTags } from '@/lib/utils';

const VerifyProductPage = () => {
  const params = useParams();
  const code = params.id;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!code) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMedicineByCode(code);
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
    <div className="bg-[url('/background/wave-right.svg')] bg-no-repeat bg-cover bg-center">
      <div className="h-screen flex flex-col justify-center items-center gap-[44]">
        {product.api ? (
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-title text-center text-7xl'>Your Medicine is Valid and Legal</h1>
            <p className='font-description text-center text-2xl'>
              Here are the results of your search, make sure that the code, name, <br />
              or shape matches what you have. Make sure that the benefits and <br />
              dosage match the drug information you need.
            </p>
            <div className='flex flex-row mt-8 w-4xl justify-center items-center gap-8 rounded-[20px] bg-[#F4F4F4] p-12 shadow-custom'>
              <Image src={product.db?.image_url || '/Medicine.png'} width={product.db?.image_url ? 200 : 120}
                height={product.db?.image_url ? 200 : 120} alt='Valid Medicine' className="rotate-6 mx-8" />
              <div className='flex flex-col gap-4 items-start'>
                <h1 className='font-header text-left text-5xl font-extrabold'>{product.api.nama_dagang}</h1>
                <div
                  className="font-description text-2xl"
                  dangerouslySetInnerHTML={{ __html: stripTags(product.api.description) }}
                />
                <button className='font-description text-2xl text-blue-500'>Read More</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-[16] justify-center items-center'>
            <h1 className='font-title text-center text-7xl'>Your Medicine is Not <br /> Valid and Legal</h1>
            <p className='font-header text-center text-2xl'>
              Enter the code again correctly, or use another <br />
              generic name to ensure the correctness of the data.
            </p>
            <Image src="/NotSmile.png" width={250} height={250} alt='Not Valid and Legal' />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyProductPage;
