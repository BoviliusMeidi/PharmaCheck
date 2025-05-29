'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';
import { fetchMedicineAuto } from '@/lib/fetchMedicine';
import { stripTags, capitalizeWords } from '@/lib/utils';

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
    <div className={`bg-no-repeat bg-cover bg-center ${product.api
        ? "bg-[url('/background/wave-bottom.svg')]"
        : "bg-[url('/background/wave-up.svg')]"
      }`}>
      <div className="h-screen flex flex-col justify-center items-center gap-[44]">
        {product.api ? (
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-title text-center text-7xl'>Obat Anda Sah dan Legal</h1>
            <p className='font-description text-center text-2xl'>
              Berikut adalah hasil pencarian Anda, pastikan kode, nama, <br />
              atau bentuknya sesuai dengan yang Anda miliki. Pastikan bahwa manfaat dan <br />
              dosis sesuai dengan informasi obat yang Anda butuhkan.
            </p>
            <div className='flex flex-row mt-8 w-4xl justify-center items-center gap-8 rounded-[20px] bg-[#F4F4F4] p-12 shadow-custom'>
              <Image src={product.db?.image_url || '/Medicine.png'} width={product.db?.image_url ? 200 : 120}
                height={product.db?.image_url ? 200 : 120} alt='Valid Medicine' className="rotate-6 mx-8" />
              <div className='flex flex-col gap-4 items-start'>
                <h1 className='font-header text-left text-5xl font-extrabold'>{capitalizeWords(product.api.nama_dagang)}</h1>
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
            <h1 className='font-title text-center text-7xl'>Obat Anda Tidak <br /> Sah dan Legal</h1>
            <p className='font-header text-center text-2xl'>
              Masukkan kode lagi dengan benar, atau gunakan kode lain <br />
              nama generik untuk memastikan kebenaran data.
            </p>
            <Image src="/NotSmile.png" width={250} height={250} alt='Not Valid and Legal' />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyProductPage;
