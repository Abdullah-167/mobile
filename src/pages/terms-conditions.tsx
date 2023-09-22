import Ads from '@/Components/Common/Ads'
import RightSide from '@/Components/Views/Home/RightSide'
import SideBar from '@/Components/Views/Home/SideBar'
import React from 'react'

const termsconditions = () => {
    return (
        <main>
            <div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex w-full'>
                    <SideBar />
                    <div className='flex-grow'>
                        <div className='max-w-[700px] mx-auto'>
                            <h1 className=' text-center text-5xl text-primary font-semibold pt-10 pb-10'>Terms & Conditions</h1>
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

export default termsconditions;



const data = [
    {
        heading: 'Acceptance of Terms',
        para: 'By accessing or using Buymobile.com.pk (the "Website"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using our website.'
    },
    {
        heading: ' Use of the Website',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>1- Content: </span>The content on Buymobile.com.pk is provided for informational purposes only. We do not endorse or guarantee the accuracy, completeness, or suitability of any information on this website. </p>
        ),
        para2: (<p className='pb-2'>  <span className=' font-semibold pb-2'>2- User Accounts:</span> If you create an account on our website, you are responsible for maintaining the security of your account and ensuring that your login credentials are kept confidential.
        </p>),
        para3: (<p className='pb-2'>  <span className=' font-semibold pb-2'>3- Prohibited Activities:</span>  You agree not to engage in any illegal, harmful, or disruptive activities on our website. This includes but is not limited to hacking, spamming, and attempting to access restricted areas of the site.</p>),
    },
    {
        heading: 'Intellectual Property',
        para: (<p className='pb-2'>  <span className=' font-semibold pb-2'>1- Content Ownership: </span>The content on this website, including text, images, graphics, logos, and trademarks, is the property of Buymobile.com.pk and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our explicit permission. </p>),
        para2: (<p className='pb-2'>
            <span className=' font-semibold'>  2-  User-Generated Content:</span> If you submit user-generated content, such as reviews or comments, you grant Buymobile.com.pk a non-exclusive, royalty-free, and worldwide license to use, modify, and display that content on our website.
        </p>),
    },
    {
        heading: 'Limitation of Liability',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>{`Buymobile.com.pk is provided "as is," and we make no warranties, express or implied, regarding the website's availability, functionality, or accuracy. We shall not be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use or inability to use our website.`}
            </p>)
        ,
    },
    {
        heading: 'External Links',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or reliability of these external sites. Visiting these sites is at your own risk.
            </p>)
        ,
    },
    {
        heading: 'Changes to Terms and Conditions',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page with the last updated date. Your continued use of our website after such modifications constitutes your acceptance of the updated terms.
            </p>)
        ,
    },
    {
        heading: 'Governing Law',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Pakistan.
            </p>)
        ,
    },
    {
        heading: 'Contact Us',
        para: (
            <p className='pb-2'>
                <span className=' font-semibold'> </span>If you have any questions or concerns about these Terms and Conditions, please contact us through our Contact Us page.
            </p>)
        ,
    },
]