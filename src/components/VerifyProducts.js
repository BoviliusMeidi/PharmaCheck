'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';
import { fetchMedicineAuto } from '@/lib/fetchMedicine';
import { stripTags, capitalizeWords } from '@/lib/utils';
import MenuBar from './MenuBar';

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
    <div
      className={`bg-no-repeat bg-cover bg-center ${product.api
        ? "bg-[url('/background/wave-bottom.svg')]"
        : "bg-[url('/background/wave-up.svg')]"
        }`}
    >
      <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-8 gap-8">
        <MenuBar />
        {product.api ? (
          <div className="flex flex-col justify-center items-center max-w-7xl w-full">
            <h1 className="font-title text-center text-4xl sm:text-5xl lg:text-7xl">
              Obat Anda Sah dan Legal
            </h1>
            <p className="font-description text-center sm:text-lg md:text-xl lg:text-2xl mt-4">
              Berikut adalah hasil pencarian Anda, pastikan kode, nama, <br className="hidden sm:block" />
              atau bentuknya sesuai dengan yang Anda miliki. Pastikan bahwa manfaat dan <br className="hidden sm:block" />
              dosis sesuai dengan informasi obat yang Anda butuhkan.
            </p>

            <div className="flex flex-col lg:flex-row mt-8 w-full justify-center items-center gap-8 rounded-[20px] bg-[#F4F4F4] p-6 sm:p-12 shadow-custom">
              <Image
                src={product.db?.image_url || '/Medicine.png'}
                width={product.db?.image_url ? 200 : 120}
                height={product.db?.image_url ? 200 : 120}
                alt="Valid Medicine"
                className="rotate-6 mx-8"
              />
              <div className="flex flex-col gap-4 items-start text-left w-full max-w-2xl">
                <h1 className="font-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                  {capitalizeWords(product.api.nama_dagang)}
                </h1>
                <div
                  className="font-description sm:text-lg md:text-xl lg:text-2xl"
                  dangerouslySetInnerHTML={{ __html: stripTags(product.api.description) }}
                />
                <button className="font-description text-lg sm:text-xl md:text-2xl text-blue-500">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center max-w-4xl text-center">
            <h1 className="font-title text-4xl sm:text-5xl lg:text-7xl">
              Obat Anda Tidak <br className="hidden sm:block" /> Sah dan Legal
            </h1>
            <p className="font-header sm:text-lg md:text-xl lg:text-2xl">
              Masukkan kode lagi dengan benar, atau gunakan kode lain <br className="hidden sm:block" />
              nama generik untuk memastikan kebenaran data.
            </p>
            <Image src="/NotSmile.png" width={200} height={200} alt="Not Valid and Legal" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyProductPage;
