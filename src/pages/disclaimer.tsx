import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import Contact from '@/Components/Views/Contact'
import RightSide from '@/Components/Views/Home/RightSide'
import SideBar from '@/Components/Views/Home/SideBar'
import React from 'react'

const disclaimer = () => {
    return (
        <main>
            <div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex w-full'>
                    <SideBar />
                    <Container>
                        <div className='flex-grow'>
                            <div className='max-w-[700px] mx-auto'>
                                <h1 className=' text-center text-3xl sm:text-5xl text-primary font-semibold pt-10 pb-10'>Disclaimer</h1>
                                <div>
                                    {data.map((item, index) => {
                                        return (
                                            <div className='pb-5' key={index}>
                                                <h2 className='text-xl font-semibold pb-3'>{item.heading}</h2>
                                                {item.para}
                                            </div>
                                        )
                                    })}
                                </div>
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
        </main>
    )
}

export default disclaimer;

const data = [
    {
        heading: 'Accuracy of Information',
        para: 'Buymobile.com.pk (the "Website") is a platform that provides information about mobile phones in Pakistan. We make every effort to ensure the accuracy and reliability of the information presented on our website, including mobile phone prices and specifications. However, we cannot guarantee that the information/prices of mobile phones on this page are 100% correct.'
    },
    {
        heading: 'Possibility of Human Error',
        para: 'Please be aware that human error can occur when compiling and updating the information on our website. While we strive to maintain up-to-date and accurate data, there may be occasional inaccuracies or discrepancies in the information provided.'
    },
    {
        heading: 'Visit Your Local Shop for Exact Prices',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'></span> To obtain the most accurate and current information about mobile phone prices and rates, we strongly recommend visiting your local mobile phone shop or authorized dealer. Prices can vary based on location, promotions, and other factors, and it is always advisable to confirm the cost and availability of a mobile phone in person. </p>
        ),
    },
    {
        heading: 'Online Mobile Phone Sales',
        para: (<p className='pb-2'>  <span className=' font-semibold pb-2'></span> Please note that Buymobile.com.pk does not engage in the online sale of mobile phones. Our website is purely an informational resource designed to help you research and compare mobile devices before making a purchase from a local retailer or online marketplace. </p>),
    },
    {
        heading: 'Limitation of Liability',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> Have questions or feedback? </span>Buymobile.com.pk and its administrators, authors, and affiliates shall not be held liable for any damages or losses, whether direct, indirect, consequential, or incidental, arising from the use of our website or reliance on the information presented here.
            </p>)
        ,
    },
    {
        heading: 'Changes to Disclaimer',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>We reserve the right to update or modify this Disclaimer at any time. Any changes will be posted on this page with the last updated date.
            </p>)
        ,
    },
    {
        heading: 'Contact Us',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>If you have any questions or concerns about this Disclaimer, please contact us through our Contact Us page.
            </p>)
        ,
    },
]