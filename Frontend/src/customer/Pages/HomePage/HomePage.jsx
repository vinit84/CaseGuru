import React from 'react';
import Maincarousel from '../../components/HomeCarousel/Maincarousel';
import Category from '../../components/CategoryCards/Category';
import BannerLink from '../../components/CardLink/BannerLink';
import TrendingProducts from '../../components/ProductListing/TrendingProducts';
import PremiumProducts from '../../components/ProductListing/PremiumProducts';
import "@ptkdev/webcomponent-instagram-widget";

const HomePage = () => {
    return (
        <div>
            <Maincarousel/>
            <div>
            <div className="text-orange-600 text-3xl font-bold font-['Gilroy'] leading-10 pl-[40px] mb-5 mt-5">Shopping by Categories</div>
                <Category/>
            </div>

            <div>
                <BannerLink/>        
            </div>

            <div className=''>
                <TrendingProducts/>
                <PremiumProducts/>
            </div>

            <div className='shine-effect rounded-xl mr-[10px] ml-[10px] mb-[10px] banner-hide'>
                <img src={process.env.PUBLIC_URL + '/assets/images/homebanner.png'} alt='' />
            </div>       
            
        </div>
    )

}

export default HomePage;