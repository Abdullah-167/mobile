import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import NewsBlogs from './NewsBlogs'
import Navbar from '@/Components/Layout/Navbar'
import MiniNav from '@/Components/Layout/SubNav'
import Footer from '@/Components/Layout/Footer'
import { RxCross1 } from 'react-icons/rx'
import SideBar from '../Home/SideBar'
import ProgressBtn from '@/Components/Layout/ProgressBtn'   
  import ProgressBar from '@/Components/Layout/ProgrssBar'


const NewsPage = () => {
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
            <div className={`z-[1000] transition-all lg:hidden block duration-500 max-h-screen overflow-y-scroll ${isSidebarVisible ? 'lg:relative fixed h-full top-0 translate-x-0' : ' -translate-x-[400px]'}`}>
                {isSidebarVisible && <SideBar />}
                <div className='text-xl lg:hidden block rounded-full text-white border border-white p-2 max-w-[39px] z-[1100] top-3 absolute left-[170px] cursor-pointer'
                    onClick={toggleSidebar}
                >
                    <RxCross1 />
                </div>
            </div>
            <Container>
                <Ads />
                <Hero />
                <NewsBlogs />
            </Container>
            <ProgressBtn />
            <Footer />
        </main>
    )
}

export default NewsPage