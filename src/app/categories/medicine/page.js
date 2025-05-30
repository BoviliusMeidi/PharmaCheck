'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

const MedicineCategories = [
  { key: 'a-z', label: 'Medicine A-Z', icon: '/categories/a-z.svg' },
  { key: 'popular', label: 'Popular Search', icon: '/categories/popular.svg' },
  { key: 'bydisease', label: 'By Disease', icon: '/categories/bydisease.svg' },
  { key: 'heart-health', label: 'Heart Health', icon: '/categories/heart-health.svg' },
  { key: 'routine-medicine', label: 'Routine Medicine', icon: '/categories/routine-medicine.svg' },
  { key: 'diabetes', label: 'Diabetes', icon: '/categories/diabetes.svg' },
  { key: 'oncology-immune', label: 'Oncology and Immunosuppressants', icon: '/categories/oncology-immune.svg' },
  { key: 'asthma', label: 'Asthma', icon: '/categories/asthma.svg' },
];

const promoCards = [
  { id: 1, image: '/categories/image1.png', alt: 'Promo 1', link: '' },
  { id: 2, image: '/categories/image2.png', alt: 'Promo 2', link: '' },
  { id: 3, image: '/categories/image1.png', alt: 'Promo 3', link: '' },
  { id: 4, image: '/categories/image2.png', alt: 'Promo 4', link: '' },
  { id: 5, image: '/categories/image1.png', alt: 'Promo 5', link: '' },
  { id: 6, image: '/categories/image2.png', alt: 'Promo 6', link: '' },
  { id: 7, image: '/categories/image1.png', alt: 'Promo 7', link: '' },
  { id: 8, image: '/categories/image2.png', alt: 'Promo 8', link: '' },
  { id: 9, image: '/categories/image1.png', alt: 'Promo 9', link: '' },
  { id: 10, image: '/categories/image2.png', alt: 'Promo 10', link: '' },
];

export default function CategoriesPage() {
  const iconsPerPage = 4;
  const totalIconPages = Math.ceil(MedicineCategories.length / iconsPerPage);
  const [iconPage, setIconPage] = useState(0);

  const cardsPerPage = 2;
  const totalCardPages = Math.ceil(promoCards.length / cardsPerPage);
  const [cardPage, setCardPage] = useState(0);
  const autoPlayRef = useRef();

  const handleIconPrev = () => setIconPage((p) => Math.max(p - 1, 0));
  const handleIconNext = () => setIconPage((p) => Math.min(p + 1, totalIconPages - 1));

  const visibleIcons = MedicineCategories.slice(
    iconPage * iconsPerPage,
    iconPage * iconsPerPage + iconsPerPage
  );

  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = () => {
      setCardPage((prev) => (prev + 1) % totalCardPages);
    };
  });
  useEffect(() => {
    const id = setInterval(() => autoPlayRef.current(), 3000);
    return () => clearInterval(id);
  }, [totalCardPages]);

  const nextPage = () => setCardPage((prev) => (prev + 1) % totalCardPages);
  const prevPage = () => setCardPage((prev) => (prev - 1 + totalCardPages) % totalCardPages);

  return (
    <div className="flex flex-col bg-[#FCF7F8]">
      <div className="bg-[url('/background/wave-up.svg')] bg-[#FCF7F8] bg-no-repeat bg-contain">
        <MenuBar />
        <div className="flex-1 py-12 px-8 max-w-[1083px] mx-auto">
          <h1 className="font-title text-center text-[80px]">
            Medicine Categories
          </h1>

          {/* Icon Slider */}
          <div className="relative mt-10">
            <button
              onClick={handleIconPrev}
              disabled={iconPage === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
            >
              &#10094;
            </button>
            <div className="flex justify-between px-12">
              {visibleIcons.map((cat) => (
                <Link key={cat.key} href={`/categories/medicine/${cat.key}`}>
                  <div className="cursor-pointer flex flex-col items-center justify-between w-[140px] p-2">
                    <Image
                      src={cat.icon}
                      alt={cat.label}
                      className="object-contain"
                      width={80}
                      height={80}
                    />
                    <span className="mt-2 text-[18px] text-center font-description break-words overflow-hidden">
                      {cat.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <button
              onClick={handleIconNext}
              disabled={iconPage === totalIconPages - 1}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
            >
              &#10095;
            </button>
          </div>

          {/* Promo Carousel */}
          <div className="relative mt-16">
            {/* Slider Window */}
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
                          <div className="relative w-[461px] h-[338px] rounded-3xl overflow-hidden">
                            <Image
                              src={card.image}
                              alt={card.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow Controls */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-colors z-20"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition-colors z-20"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {Array.from({ length: totalCardPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCardPage(idx)}
                  className={`
                    rounded-full transition-all
                    ${idx === cardPage
                      ? 'bg-gray-800 w-5 h-5'
                      : 'bg-gray-300 w-4 h-4 hover:bg-gray-500'}
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
