import React, { useEffect, useState } from 'react';
import { hero1, hero2, hero3, logo1 } from '../../assets/images';

const heroImage = [hero1, hero1, logo1, logo1];

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? heroImage.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === heroImage.length - 1 ? 0 : curr + 1));
  console.log(curr);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="">
      {/* <div
        className="flex transition-transform ease-out duration-500 h-[750px] relative "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      > */}
      <div className="overflow-hidden relative h-[750px]">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {heroImage.map((j) => (
            <img src={j} alt="" className="h-full w-full" />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev}>left</button>
        <button onClick={next}>right</button>
      </div>
      <div className="flex items-center absolute bg-transparent h-[733px] inset-1 max-w-full lg:max-w-[1180px] 2xl:min-w-[1320px] xl:mx-auto mx-6 ">
        <div className="md:w-[570px] 2xl:min-w-[570px] max-w-full">
          {/* <div className=""> */}
          <div className="mobile-h1-medium lg:text-[44px]">
            Infrastruktur Teknologi
          </div>
          <div className="body-2-regular text-white text-justify lg:text-[24px] mt-7 mb-7">
            Salah satu komponen terpenting infrastruktur teknologi Indonesia,
            yang memiliki potensi signifikan bagi pengembangan softwere.
          </div>
          <div className="flex flex-wrap">
            <button className="button-primary-dark-normal body-medium mr-[16px] lg:mr-[30px] mb-4 ">
              Bergabung
            </button>
            <button className="button-secondary-dark-normal body-medium">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 right-0 left-0 mb-[100px] ">
        <div className="flex items-center justify-center gap-2 ">
          {heroImage.map((_, i) => (
            <div
              className={`
              transition-all w-[10px] h-[10px] bg-button 
              ${curr === i ? 'p-2' : 'bg-secondary'}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
