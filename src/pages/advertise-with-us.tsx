import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import RightSide from '@/Components/Views/Home/RightSide'
import SideBar from '@/Components/Views/Home/SideBar'
import React from 'react'

const advertise = () => {
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
                                <h1 className=' text-center text-5xl text-primary font-semibold pt-10 pb-10'>Advertise With Us</h1>
                                <p className='text-lg pb-6'>Welcome to Buymobile.com.pk, the premier platform for information about mobile phones in Pakistan. We offer unique advertising opportunities for businesses and brands looking to connect with our tech-savvy and engaged audience.</p>
                                <div>
                                    {data.map((item, index) => {
                                        return (
                                            <div className='pb-5' key={index}>
                                                <h2 className='text-xl font-semibold pb-3'>{item.heading}</h2>
                                                {item.para}
                                                {item.para2}
                                                {item.para3}
                                                {item.para4}
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

export default advertise;



const data = [
    {
        heading: 'Why Advertise With Buymobile.com.pk?',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>Targeted Audience:</span> Our website attracts a diverse audience, including tech enthusiasts, mobile phone shoppers, and individuals seeking the latest information on mobile technology. Your advertisements will reach a highly relevant audience. </p>
        ),
        para2: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Trusted Resource:</span>  Buymobile.com.pk is a trusted and respected source for mobile phone information in Pakistan. Associating your brand with us enhances your credibility and brand recognition.
        </p>),
        para3: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Cost-Effective Solutions:</span>  We offer a range of advertising options to fit your budget. Whether you are a small business or a large corporation, we have options to suit your needs.</p>),
        para4: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Customized Campaigns:</span>  We work closely with our advertisers to create customized advertising campaigns that align with your goals and target audience.</p>),
    },
    {
        heading: 'Advertising Opportunities',
        para: (<p className='pb-2'>  <span className=' font-semibold pb-2'>Display Ads: </span>{`Place visually appealing banner ads on our website's pages. Choose from various sizes and positions to maximize visibility.`} </p>),
        para2: (<p className='pb-2'>
            <span className=' font-semibold'>  Sponsored Content: </span>Collaborate with us to create informative and engaging sponsored articles that highlight your products or services.
        </p>),
        para3: (<p className='pb-2'>
            <span className=' font-semibold'> Newsletter Advertising: </span> Reach our subscribers with targeted messages in our newsletter.
        </p>),
        para4: (<p className='pb-2'>
            <span className=' font-semibold'> Social Media Promotion:</span> {` Leverage our social media presence to increase your brand's reach and engagement.`}
        </p>),
    },
    {
        heading: 'Contact Us for Advertising Inquiries',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>To discuss advertising opportunities and request a media kit, please contact our advertising team through our Contact Us page. We look forward to partnering with you to achieve your advertising goals.
            </p>)
        ,
    },
]

