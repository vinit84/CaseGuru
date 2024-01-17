import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CategoryCard = ({ imgSrc, title, count }) => (
  
  <div className="w-full sm:w-60 flex-col justify-start items-center inline-flex transition-transform transform hover:scale-105">
    
    <div className="px-6 pb-[50px] flex-col justify-start items-center gap-5 flex">
      
      <img
        className="rounded-full border mobile-category hover:shadow-lg"
        src={imgSrc}
        alt={title}
      />
      <div className="w-16 h-7 relative">
      <div className="left-[-0.20px] top-0 absolute text-center text-black text-xl font-bold font-['Gilroy'] leading-7">{title}</div>
    {/* <div className="left-[68.71px] top-[-6px] absolute text-center text-zinc-500 text-base font-semibold font-['Plus Jakarta Sans'] leading-tight">{count}</div> */}
      </div>
    </div>
  </div>
);

const Category = ({ category }) => {
  const categories = [
    { imgSrc: process.env.PUBLIC_URL + '/assets/images/c1.webp', title: 'Elitebrand', count: 15 },
    { imgSrc: process.env.PUBLIC_URL + '/assets/images/c2.webp', title: 'Anime', count: 15 },
    { imgSrc: process.env.PUBLIC_URL + '/assets/images/c3.webp', title: 'Marvel', count: 15 },
    { imgSrc: process.env.PUBLIC_URL + '/assets/images/c4.webp', title: 'Stellar', count: 15 },
    { imgSrc: process.env.PUBLIC_URL + '/assets/images/c5.webp', title: 'Aesthetic', count: 15 },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-10 sm:flex-row sm:justify-center">
    {isMobile ? (
      <div style={{ maxWidth: '100vw' }}>
        <Carousel showThumbs={false} showStatus={false} showArrows={false}>
          {categories.map((category, index) => (
            <div key={index}>
              <CategoryCard {...category} />
            </div>
          ))}
        </Carousel>
      </div>
    ) : (
      categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))
    )}
  </div>
  );
};

export default Category;