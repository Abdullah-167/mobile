import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import RightSide from '@/Components/Views/Home/RightSide'
import SideBar from '@/Components/Views/Home/SideBar'
import React from 'react'

const aboutus = () => {
    return (
        <main>
            <div className='flex justify-between w-full'>
                <div className='flex w-full'>
                    <SideBar />
                    <Container>
                        <div className='flex-grow'>
                            <div className='max-w-[700px] mx-auto'>
                                <h1 className=' text-center text-5xl text-primary font-semibold pt-10 pb-10'>About Us</h1>
                                <p className='text-lg pb-6'>Welcome to Buymobile.com.pk, your trusted source for all things related to mobile phones in Pakistan.</p>
                                <div>
                                    {data.map((item, index) => {
                                        return (
                                            <div className='pb-5' key={index}>
                                                <h2 className='text-xl font-semibold pb-3'>{item.heading}</h2>
                                                {item.para}
                                                {item.para2}
                                                {item.para3}
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
        </main >
    )
}

export default aboutus;



const data = [
    {
        heading: 'Our Mission',
        para: 'At Buymobile.com.pk, we are on a mission to provide you with up-to-date, reliable, and unbiased information about mobile phones available in the Pakistani market. Our goal is to empower you, the consumer, with the knowledge and insights needed to make informed decisions when it comes to choosing your next mobile device.'
    },
    {
        heading: 'What We Offer',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>Comprehensive Information: </span> We offer a wealth of information about the latest smartphones, their features, specifications, and prices. Our detailed product reviews and comparisons are designed to assist you in finding the perfect mobile phone that suits your needs and budget. </p>
        ),
        para2: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Latest Updates: </span>{`Stay in the know with our regularly updated content. We keep you informed about new product releases, software updates, and industry trends so that you're always one step ahead in the fast-paced world of mobile technology.`} </p>),
        para3: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Community Engagement:</span> {`Buymobile.com.pk is not just a website; it's a community of tech enthusiasts, buyers, and sellers. Join our forums, read user reviews, and engage with others who share your passion for mobile devices.`}</p>),
    },
    {
        heading: 'Why Choose Us?',
        para: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Reliability: </span> We take pride in providing accurate and reliable information. Our team of experts rigorously researches and tests mobile phones to ensure you get the most trustworthy insights. </p>),
        para2: (<p className='pb-2'>
            <span className=' font-semibold'>  User-Centric:</span> Your needs are at the heart of what we do. We are committed to helping you find the best mobile phone for your unique requirements.
        </p>),
        para3: (<p className='pb-2'>
            <span className=' font-semibold'>  Transparency: </span> We maintain transparency in our reviews and recommendations. You can trust that our information is unbiased and free from commercial influence.
        </p>)
    },
    {
        heading: 'Contact Us',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> Have questions or feedback? </span>{`We'd love to hear from you. Feel free to contact us for inquiries, suggestions, or partnerships. Your input helps us continually improve and serve you better`}
            </p>)
        ,

        para2: (<p>   <span className=' font-semibold'>Thank you for choosing Buymobile.com.pk</span> as your go-to resource for all things mobile in Pakistan. We look forward to being your trusted companion on your mobile phone journey. </p>)

    },
]