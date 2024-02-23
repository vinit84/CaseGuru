import React from 'react';

const BannerLink = () => {
  const redirectToCaseGuru = () => {
    window.location.href = 'https://www.caseguru.co.in';
  };

  return (
    <div className="flex-col lg:flex-row justify-start items-start inline-flex">
      <div className="self-stretch h-50 rounded-xl flex-col justify-start items-start flex lg:pt-[50px] lg:pl-[50px] lg:pr-[15px] p-[15px]">
        <img src={process.env.PUBLIC_URL + '/assets/images/Link.png'} className="rounded-2xl" />
        <div className="w-96 h-96 absolute">
          <div className="pr-90 left-[25.39px] lg:left-[41.39px] top-[30.19px] lg:top-[40.19px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-white text-1xl lg:text-3xl font-bold font-['Gilroy'] lg:leading-10">Thousands of<br />free templates</div>
          </div>
          <div className="left-[25.39px] lg:left-[41.39px] top-[90.78px] lg:top-[130.78px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-zinc-100  text-[15px] lg:text-lg font-medium font-['Gilroy'] lg:leading-7 ">Free and easy way to bring<br />your ideas to life</div>
          </div>
          <button className="px-6 left-[35.39px] top-[215.56px] absolute bg-orange-500 hover:bg-orange-600 transition-all duration-200 rounded-xl font-bold pt-[15px] py-[19px] pb-[14.19px] gap-[7.66px] items-center text-white text-[16px] leading-[19.2px] inline-flex hide-on-mobile">Explore More
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M0.769531 5.91992C0.769531 5.76758 0.825195 5.63574 0.936523 5.52441C1.04785 5.41309 1.17969 5.35742 1.33203 5.35742H13.707C13.8594 5.35742 13.9912 5.41309 14.1025 5.52441C14.2139 5.63574 14.2695 5.76758 14.2695 5.91992C14.2695 6.07227 14.2139 6.2041 14.1025 6.31543C13.9912 6.42676 13.8594 6.48242 13.707 6.48242H1.33203C1.17969 6.48242 1.04785 6.42676 0.936523 6.31543C0.825195 6.2041 0.769531 6.07227 0.769531 5.91992ZM8.24023 0.453125C8.35742 0.347656 8.49219 0.294922 8.64453 0.294922C8.79688 0.294922 8.93164 0.347656 9.04883 0.453125L14.1113 5.51562C14.2168 5.63281 14.2695 5.76758 14.2695 5.91992C14.2695 6.07227 14.2168 6.20703 14.1113 6.32422L9.04883 11.3867C8.93164 11.4922 8.79688 11.5449 8.64453 11.5449C8.49219 11.5449 8.35742 11.4922 8.24023 11.3867C8.13477 11.2695 8.08203 11.1348 8.08203 10.9824C8.08203 10.8301 8.13477 10.6953 8.24023 10.5781L12.916 5.91992L8.24023 1.26172C8.13477 1.14453 8.08203 1.00977 8.08203 0.857422C8.08203 0.705078 8.13477 0.570312 8.24023 0.453125Z" fill="white"/>
          </svg>

          </button>
        </div>
      </div>
      <div className="self-stretch h-96 rounded-xl flex-col justify-start items-start flex lg:pt-[50px] lg:pr-[50px] lg:pl-[15px] p-[15px]">
        <img src={process.env.PUBLIC_URL + '/assets/images/Link2.png'} className="rounded-2xl" />
        <div className="w-96 h-96 absolute">
          <div className="pr-90 left-[25.39px] lg:left-[41.39px] top-[30.19px] lg:top-[40.19px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-white text-1xl lg:text-3xl font-bold font-['Gilroy'] lg:leading-10">Create your<br />unique style</div>
          </div>
          <div className="left-[25.39px] lg:left-[41.39px] top-[90.78px] lg:top-[130.78px] absolute flex-col justify-start items-start inline-flex">
            <div className="text-zinc-100  text-[15px] lg:text-lg font-medium font-['Gilroy'] lg:leading-7 ">Free and easy way to create<br />your ideas to life</div>
          </div>
          <button className="px-6 left-[35.39px] top-[215.56px] absolute bg-orange-500 hover:bg-orange-600 transition-all duration-200 rounded-xl font-bold pt-[15px] py-[19px] pb-[14.19px] gap-[7.66px] items-center text-white text-[16px] leading-[19.2px] inline-flex hide-on-mobile">Explore More
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M0.769531 5.91992C0.769531 5.76758 0.825195 5.63574 0.936523 5.52441C1.04785 5.41309 1.17969 5.35742 1.33203 5.35742H13.707C13.8594 5.35742 13.9912 5.41309 14.1025 5.52441C14.2139 5.63574 14.2695 5.76758 14.2695 5.91992C14.2695 6.07227 14.2139 6.2041 14.1025 6.31543C13.9912 6.42676 13.8594 6.48242 13.707 6.48242H1.33203C1.17969 6.48242 1.04785 6.42676 0.936523 6.31543C0.825195 6.2041 0.769531 6.07227 0.769531 5.91992ZM8.24023 0.453125C8.35742 0.347656 8.49219 0.294922 8.64453 0.294922C8.79688 0.294922 8.93164 0.347656 9.04883 0.453125L14.1113 5.51562C14.2168 5.63281 14.2695 5.76758 14.2695 5.91992C14.2695 6.07227 14.2168 6.20703 14.1113 6.32422L9.04883 11.3867C8.93164 11.4922 8.79688 11.5449 8.64453 11.5449C8.49219 11.5449 8.35742 11.4922 8.24023 11.3867C8.13477 11.2695 8.08203 11.1348 8.08203 10.9824C8.08203 10.8301 8.13477 10.6953 8.24023 10.5781L12.916 5.91992L8.24023 1.26172C8.13477 1.14453 8.08203 1.00977 8.08203 0.857422C8.08203 0.705078 8.13477 0.570312 8.24023 0.453125Z" fill="white"/>
          </svg>

          </button>
        </div>
      </div>

      
    </div>
  );
};

export default BannerLink;
