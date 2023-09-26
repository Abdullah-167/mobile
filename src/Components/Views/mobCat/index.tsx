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
import SideBar from '../Home/SideBar'


const MobCat = () => {

    const [isSidebarVisible2, setSidebarVisible2] = useState(false);

    const toggleSidebar2 = () => {
        setSidebarVisible2(!isSidebarVisible2);
    };


    useEffect(() => {
        if (isSidebarVisible2) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isSidebarVisible2]);
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
            <div>
                <Navbar toggleSidebar={toggleSidebar} />

                <div className='mt-[72px]'>
                    <div className='lg:lg:block hidden'>
                        <MiniNav />
                    </div>
                </div>
            </div>
            <div className={`z-[50000] transition-all lg:hidden block duration-500 max-h-screen overflow-y-scroll ${isSidebarVisible ? 'lg:relative fixed h-full top-0 translate-x-0' : ' -translate-x-[400px]'}`}>
                {isSidebarVisible && <SideBar />}
                <div className='text-xl lg:hidden block rounded-full text-white border border-white p-2 max-w-[39px] z-[1100] top-3 absolute left-[170px] cursor-pointer'
                    onClick={toggleSidebar}
                >
                    <RxCross1 />
                </div>
            </div>
            <Container>
                <Ads />
                <MobSummary />
            </Container>
            <div className='md:flex w-full max-w-[1400px] mx-auto h-full'>
                <div className={`lg:hidden block bg-white bg-opacity-20 w-full max-w-[262px] h-full max-h-screen min-h-screen overflow-y-scroll fixed top-0 left-0 z-[55000] transition-all duration-500 ${isSidebarVisible2 ? 'translate-x-0' : '-translate-x-[400px]'}`}>
                    <span onClick={toggleSidebar2} className={`text-xl absolute cursor-pointer top-10 left-[210px] rounded-full p-1 border border-black ${isSidebarVisible2 ? ' opacity-100' : ' opacity-0'}`}><RxCross1 /></span>
                    {isSidebarVisible2 && <CatSideBar />}
                </div>
                <div className=' hidden lg:block'>
                    <CatSideBar />
                </div>
                <div className=' lg:mx-0 w-full  py-5'>
                    <Mobile toggleSidebar2={toggleSidebar2} />
                    <Soon />
                    <Popular />
                    <WhichMobExpan />
                    <div className=''>
                        <FeaturedBrand />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default MobCat;


