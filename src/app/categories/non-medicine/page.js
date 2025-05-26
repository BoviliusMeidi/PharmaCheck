'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuBar from '@/components/MenuBar';

const nonMedicineCategories = [
  { key: 'a-z', label: 'Non-Medicine A-Z', icon: '/non-categories/a-z.svg' },
  { key: 'vitamins', label: 'Vitamins & Supplements', icon: '/non-categories/vitamin-suplement.svg' },
  { key: 'mom-child', label: 'Mom & Child', icon: '/non-categories/mom-child.svg' },
  { key: 'popular', label: 'Popular Search', icon: '/non-categories/popular.svg' },
  { key: 'beauty', label: 'Beauty & Self-care', icon: '/non-categories/beauty-selfcare.svg' },
  { key: 'fitness', label: 'Fitness', icon: '/non-categories/a-z.svg' },
  { key: 'wellness', label: 'Wellness', icon: '/non-categories/vitamin-suplement.svg' },
  { key: 'personal-care', label: 'Personal Care', icon: '/non-categories/mom-child.svg' },
  { key: 'hygiene', label: 'Hygiene', icon: '/non-categories/popular.svg' },
  { key: 'natural', label: 'Natural Remedies', icon: '/non-categories/beauty-selfcare.svg' },
];

const promoCards = [
  { id: 1, image: '/non-categories/image1.png', alt: 'Promo 1', link: '/promo/1' },
  { id: 2, image: '/non-categories/image2.png', alt: 'Promo 2', link: '/promo/2' },
  { id: 3, image: '/non-categories/image1.png', alt: 'Promo 3', link: '/promo/3' },
  { id: 4, image: '/non-categories/image2.png', alt: 'Promo 4', link: '/promo/4' },
  { id: 5, image: '/non-categories/image1.png', alt: 'Promo 5', link: '/promo/5' },
  { id: 6, image: '/non-categories/image2.png', alt: 'Promo 6', link: '/promo/6' },
  { id: 7, image: '/non-categories/image1.png', alt: 'Promo 7', link: '/promo/7' },
  { id: 8, image: '/non-categories/image2.png', alt: 'Promo 8', link: '/promo/8' },
  { id: 9, image: '/non-categories/image1.png', alt: 'Promo 9', link: '/promo/9' },
  { id: 10, image: '/non-categories/image2.png', alt: 'Promo 10', link: '/promo/10' },
];

export default function CategoriesPage() {
  const iconsPerPage = 5;
  const totalIconPages = Math.ceil(nonMedicineCategories.length / iconsPerPage);
  const [iconPage, setIconPage] = useState(0);

  const cardsPerPage = 2;
  const totalCardPages = Math.ceil(promoCards.length / cardsPerPage);
  const [cardPage, setCardPage] = useState(0);

  const handleIconPrev = () => setIconPage((p) => Math.max(p - 1, 0));
  const handleIconNext = () => setIconPage((p) => Math.min(p + 1, totalIconPages - 1));

  const visibleIcons = nonMedicineCategories.slice(
    iconPage * iconsPerPage,
    iconPage * iconsPerPage + iconsPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCardPage((prevPage) => (prevPage + 1) % totalCardPages);
    }, 2000);

    return () => clearInterval(interval);
  }, [totalCardPages]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCF7F8]">
      <MenuBar />
      <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto mt-0">
        <h1 className="font-title text-center text-[80px]">
          Non-Medicine Categories
        </h1>

        <div className="relative mt-10">
          <button onClick={handleIconPrev} disabled={iconPage === 0} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2">
            &#10094;
          </button>
          <div className="flex justify-between px-12">
            {visibleIcons.map((cat) => (
              <Link key={cat.key} href={`/categories/non-medicine/${cat.key}`}>  
                <div className="cursor-pointer flex flex-col items-center justify-between w-[140px] p-2">
                  <img src={cat.icon} alt={cat.label} className="w-[80px] h-[80px]" />
                  <span className="mt-2 text-[18px] text-center font-description break-words overflow-hidden">
                    {cat.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <button onClick={handleIconNext} disabled={iconPage === totalIconPages - 1} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
            &#10095;
          </button>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${cardPage * 100}%)` }}
            >
              {Array.from({ length: totalCardPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full flex justify-center space-x-6 px-2"
                >
                  {promoCards
                    .slice(pageIndex * cardsPerPage, pageIndex * cardsPerPage + cardsPerPage)
                    .map((card) => (
                      <Link key={card.id} href={card.link}>
                        <div className="w-[461px] h-[338px] rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                          <img
                            src={card.image}
                            alt={card.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalCardPages }).map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === cardPage ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
