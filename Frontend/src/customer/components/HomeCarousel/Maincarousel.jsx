import React from 'react';
import { MaincarouselData } from './MaincarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Maincarousel = () => {
  const items = MaincarouselData.map((item) => (
    <img
      className='cursor-pointer'
      role='presentation'
      src={process.env.PUBLIC_URL + item.path}
      alt=''
    />
  ));

  return (
    <div className='relative'>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1500}
        infinite
      />
    </div>
  );
};

export default Maincarousel;
