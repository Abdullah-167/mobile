import React, { useEffect, useState } from 'react'
import CatSideBar from '@/Components/Views/mobCat/CatSidebar'
import Ads from '@/Components/Common/Ads'
import FeaturedBrand from '@/Components/Views/Home/FeaturedBrand'
import HeroSlide from '@/Components/Views/Home/HeroSlide'
import LatestNews from '@/Components/Views/Home/LatestNews'
import MobileCompa from '@/Components/Views/Home/MobileCompa'
import Container from '@/Components/Layout/Container'
import MobSummary from './MobSummary'
import Mobile from './Mobile'
import Soon from './Soon'
import Popular from './Popular'
import WhichMobExpan from './WhichMobExpan'
import { BiCross } from 'react-icons/bi'
import { FaCross } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import Navbar from '@/Components/Layout/Navbar'
import MiniNav from '@/Components/Layout/SubNav'
import Footer from '@/Components/Layout/Footer'


const MobCat = () => {

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
            <Navbar />
            <MiniNav />
            <Container>
                <Ads />
                <MobSummary />
            </Container>
            <div className='md:flex w-full max-w-[1400px] mx-auto h-full'>
                <div className={`lg:hidden block bg-white bg-opacity-20 w-full max-w-[262px] h-full max-h-screen overflow-y-scroll fixed top-0 left-0 z-[1000] transition-all duration-500 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-[400px]'}`}>
                    <span onClick={toggleSidebar} className={`text-xl absolute cursor-pointer top-10 left-[210px] rounded-full p-1 border border-black ${isSidebarVisible ? ' opacity-100' : ' opacity-0'}`}><RxCross1 /></span>
                    {isSidebarVisible && <CatSideBar />}
                </div>
                <div className=' hidden lg:block'>
                    <CatSideBar />
                </div>
                <div className=' lg:mx-0 w-full  py-5'>
                    <Mobile toggleSidebar={toggleSidebar} />
                    <Soon />
                    <Popular />
                    <WhichMobExpan />
                    <div className='px-10'>
                        <FeaturedBrand />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default MobCat;


