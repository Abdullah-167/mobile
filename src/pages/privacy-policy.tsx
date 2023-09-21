import Ads from '@/Components/Common/Ads'
import RightSide from '@/Components/Views/Home/RightSide'
import SideBar from '@/Components/Views/Home/SideBar'
import React from 'react'

const privacyPolicy = () => {
    return (
        <main>
            <div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex w-full'>
                    <SideBar />
                    <div className='flex-grow'>
                        <div className='max-w-[700px] mx-auto'>
                            <h1 className=' text-center text-5xl text-primary font-semibold pt-10 pb-10'>Privacy Policy</h1>
                            <div>
                                {data.map((item, index) => {
                                    return (
                                        <div className='pb-5'>
                                            <h2 className='text-xl font-semibold pb-3'>{item.heading}</h2>
                                            {item.para}
                                            {item.para2}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSide />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
            </div>
        </main>
    )
}

export default privacyPolicy;



const data = [
    {
        heading: ' Introduction',
        para: 'Welcome to Buymobile.com.pk. At Buymobile.com.pk, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you visit our website.'
    },
    {
        heading: ' Information We Collect',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>a. Personal Information:</span>  We may collect personal information, such as your name, email address, and contact details, when you voluntarily provide it to us through forms, newsletter sign-ups, or other interactions on our website. </p>
        ),
        para2: (<p className='pb-2'>  <span className=' font-semibold pb-2'>b. Non-Personal Information:</span> We may also collect non-personal information, such as your IP address, browser type, and browsing habits, to enhance your experience on our website. </p>),
    },
    {
        heading: ' How We Use Your Information',
        para: (<p className='pb-2'>  <span className=' font-semibold pb-2'>a. Personal Information:</span> We may use your personal information to communicate with you, respond to your inquiries, send newsletters or updates, and improve our services. We will not sell, rent, or lease your personal information to third parties. </p>),
        para2: (<p className='pb-2'>
            <span className=' font-semibold'> b. Non-Personal Information:</span>  Non-personal information is used for statistical purposes and to improve the functionality and content of our website.
        </p>),
    },
    {
        heading: 'Cookies and Tracking Technologies',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'></span>We use cookies and similar tracking technologies to enhance your browsing experience on our website. You have the option to manage cookie preferences in your browser settings.
            </p>)
        ,
    },
    {
        heading: 'Third-Party Links',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'></span>Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>)
        ,
    },
    {
        heading: 'Data Security',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'></span>We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of online transmission or storage is completely secure, and we cannot guarantee the absolute security of your data.
            </p>)
        ,
    },
    {
        heading: `Children's Privacy`,
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'></span>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us, and we will promptly delete it. </p>)
        ,
    },
    {
        heading: `Changes to this Privacy Policy`,
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'></span>We may update this Privacy Policy periodically to reflect changes in our practices and services. We will notify you of any significant changes by posting an updated Privacy Policy on this page. </p>)
        ,
    },
    {
        heading: `Contact Us`,
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'></span>If you have any questions or concerns about this Privacy Policy or your personal information, please contact us through our Contact Us page. </p>)
        ,
    },
]