import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import HeroSlide from './HeroSlide'
import Container from '../../Layout/Container'
import Ads from '@/Components/Common/Ads'
import Pricing from './Pricing'
import ComingSoon from './ComingSoon'
import Under50 from './Under50'
import Under40 from './Under40'
import Under35 from './Under35'
import Under30 from './Under30'
import Under25 from './Under25'
import Under20 from './Under20'
import Under15 from './Under15'
import Under10 from './Under10'
import FeaturedBrand from './FeaturedBrand'
import LatestNews from './LatestNews'
import MobileCompa from './MobileCompa'
import RightSide from './RightSide'
import BestByPrice from './BestByPrice'
import UnderRange from './UnderRange'
import Navbar from '@/Components/Layout/Navbar'
import MiniNav from '@/Components/Layout/SubNav'
import Footer from '@/Components/Layout/Footer'
import { RxCross1 } from 'react-icons/rx'

const Home = () => {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        if (isSidebarVisible) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isSidebarVisible]);



    return (
        <main>
            <Navbar toggleSidebar={toggleSidebar} />
            <MiniNav />
            <div className='md:flex w-full justify-between gap-6 max-w-[1400px] mx-auto relative overflow-hidden'>
                <div className={`z-[1000] transition-all lg:hidden block duration-500 max-h-screen overflow-y-scroll ${isSidebarVisible ? 'lg:relative fixed h-full top-0 translate-x-0' : ' -translate-x-[400px]'}`}>
                    {isSidebarVisible && <SideBar />}
                    <div className='text-xl lg:hidden block rounded-full text-white border border-white p-2 max-w-[39px] z-[1100] top-3 absolute left-[170px] cursor-pointer'
                        onClick={toggleSidebar}
                    >
                        <RxCross1 />
                    </div>
                </div>
                <div className={`lg:block hidden`}>
                    <SideBar />
                </div>
                <div className='max-w-[900px] lg:max-w-[800px] px-5 mx-auto lg:mx-0 w-full'>
                    <HeroSlide />
                    <div className=''>
                        <Ads />
                    </div>
                    <Pricing />
                    <ComingSoon />
                    <Under50 />
                    <Under40 />
                    <Under35 />
                    <Under30 />
                    <Under25 />
                    <Under20 />
                    <Under15 />
                    <Under10 />
                </div>
                <div className='hidden lg:block'>
                    <RightSide />
                </div>
            </div>
            <FeaturedBrand />
            <LatestNews />
            <MobileCompa />
            <BestByPrice />
            <UnderRange />
            <Footer />
        </main>
    )
}

export default Home


