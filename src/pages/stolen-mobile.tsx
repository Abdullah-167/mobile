import Ads from '../Components/Common/Ads'
import Container from '../Components/Layout/Container'
import Footer from '../Components/Layout/Footer'
import Navbar from '../Components/Layout/Navbar'
import ProgressBtn from '..//Components/Layout/ProgressBtn'
import ProgressBar from '..//Components/Layout/ProgrssBar'
import MiniNav from '../Components/Layout/SubNav'
import RightSide from '../Components/Views/Home/RightSide'
import SideBar from '../Components/Views/Home/SideBar'
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import Image from 'next/image'


const StolenMobile = () => {

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
            <div className='md:flex w-full justify-between gap-6 max-w-[1400px] mx-auto relative overflow-hidden'>
                <div className={`z-[50000] transition-all lg:hidden block duration-500 max-h-screen overflow-y-scroll ${isSidebarVisible ? 'lg:relative fixed h-full top-0 translate-x-0' : ' -translate-x-[400px]'}`}>
                    {isSidebarVisible && <SideBar />}
                    <div className='text-xl lg:hidden block rounded-full text-white border border-white p-2 max-w-[39px] z-[1100] top-3 absolute left-[170px] cursor-pointer'
                        onClick={toggleSidebar}
                    >
                        <RxCross1 />
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className={`lg:block hidden`}>
                        <SideBar />
                    </div>
                    <Container>
                        <div className='flex-grow py-10'>
                            <div className='max-w-[700px] mx-auto'>
                                <h1 className='text-3xl pb-6 font-semibold text-primary'>How to Block a Lost or Stolen Mobile Phone</h1>
                                <div className='pb-6'>
                                    {data.map((item, index) => {
                                        return (
                                            <div className='pb-5' key={index}>
                                                <span className={`text-xl font-semibold  ${index === 1 || index === 2  || index === 5 || index === 6 ? ' border-b-[1.5px] border-black' : ''}`}>{item.heading}</span>
                                                <div className='pb-4'></div>
                                                {item.para}
                                                {item.para2}
                                                {item.para3}
                                                {item.para4}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='pb-10'>
                                    <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                                </div>
                                <p className='t'>The IMEI is an identification code for your mobile phone and is typically located beneath the battery or
                                    on the warranty card. You can also receive your phone&#39;s <span className='font-semibold'> IMEI by simply dialing{` *#06# `}on the device. </span></p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='lg:block hidden'>
                    <RightSide />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
            </div>
            <ProgressBtn />
            <Footer />
        </main >
    )
}

export default StolenMobile;



const data = [
    {
        para: `If you&#39;ve unfortunately lost your mobile phone or had it stolen, taking swift action to protect your
        device and data is essential. How to Block your Mobile phone and protect your data. Here&#39;s a step-by-
        step guide to help you block your lost or stolen mobile phone:`
    },
    {
        heading: '1. Online Reporting:',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'> </span>Visit the Citizen Police Liaison Committee (CPLC) website at <span className=' font-semibold'> https://web.cplc.app/online-complaint- </span>
                form/ and follow the online complaint instructions provided. </p>
        ),

    },
    {
        heading: '2. Phone Calls:',
        para: (<p className='pb-2'>  Contact the following authorities by phone: </p>),
        para2: (<li className='pb-2 ml-4'> CPLC (Citizen Police Liaison Committee) at 021-35662222.
        </li>),
        para3: (<li className='pb-2 ml-4'>Police (Rescue 15) at 15.
        </li>),
        para4: (<li className='pb-2 ml-4'>PTA (Pakistan Telecom Authority) at 0800-25625.
        </li>),

    },
    {
        heading: 'Providing Essential Information:',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>During your call, be ready to provide essential information, including details about the incident and, most important the IMEI (International Mobile Equipment Identity) number of your lost mobile device. The IMEI is a unique identifier code for your mobile phone and is usually found beneath the battery or on the warranty card. <span className=' font-semibold'> You can also obtain your phone&#39;s IMEI by dialing *#06# on the device. </span>
            </p>)
        ,
    },
    {
        heading: 'Requesting IMEI Block:',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>{`The authorities will use the information you provide to request all mobile operators to block your
phone&#39;s IMEI on their networks. This action effectively renders the stolen or lost phone useless on all
networks.`}
            </p>)
        ,
    },
    {
        heading: '3. Fax Option:',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>{`If you prefer, you can also fax your complaint to CPLC at 021-35683336.`}
            </p>)
        ,
    },
    {
        heading: '4. Email Reporting:',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>Another option is to send an email to the Pakistan Telecom Authority (PTA) at <span className=' font-semibold'> imei@pta.gov.pk,   </span>
                providing them with the necessary details and your IMEI number.
            </p>)
        ,
    },
]