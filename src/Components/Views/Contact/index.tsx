import React from 'react'
import Form from './Form'
import SideBar from '../Home/SideBar'
import RightSide from '../Home/RightSide'
import Faq from '@/Components/Common/Faq'
import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import Navbar from '@/Components/Layout/Navbar'
import MiniNav from '@/Components/Layout/SubNav'
import Footer from '@/Components/Layout/Footer'

const Contact = () => {

    return (
        <div>
            <Navbar />
            <MiniNav />
            <div className='flex justify-between w-full'>
                <div className='flex w-full'>
                    <SideBar />
                    <Container>
                        <div className='flex-grow'>
                            <Form />
                            <div className='max-w-[600px] mx-auto'>
                                <Faq faq={faq} />
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
            <Footer />
        </div>
    )
}

export default Contact;

const faq = [{
    question: '1. What is Buymobile.com.pk?',
    answer: 'Buymobile.com.pk is a platform dedicated to providing comprehensive information about mobile phones available in Pakistan. We offer detailed specifications, reviews, and pricing information to help you make informed decisions when purchasing a mobile device.'
},
{
    question: '2. Do you sell mobile phones on your website?',
    answer: 'No, Buymobile.com.pk does not sell mobile phones online. We are solely an information resource, offering valuable insights to assist you in your purchasing journey. You can use our platform to research and compare mobile phones before making a purchase from a local retailer or online marketplace'
}, {
    question: '3. How can I contact Buymobile.com.pk?',
    answer: 'You can reach out to us through our Contact Us page. Whether you have questions, feedback, or partnership inquiries, we welcome your messages and will respond as promptly as possible.'
}, {
    question: '4. Are your reviews and information unbiased?',
    answer: 'Yes, our reviews and information are conducted with the utmost transparency and impartiality. We do not favor any specific brand or manufacturer. Our aim is to provide objective and accurate information to help you make the best choice based on your preferences and requirements.'
},
{
    question: '5. Can I contribute to Buymobile.com.pk?',
    answer: 'We value contributions from our users. If you have a review, opinion, or insight to share about a mobile phone, you can submit it for consideration. Please visit our Contribute page for more information on how to share your knowledge'
},
{
    question: '6. Is the information on your website up to date?',
    answer: 'We make every effort to keep our information current. Mobile phone specifications, prices, and availability can change frequently, so we strive to update our content regularly. However, we recommend double-checking with the manufacturer or retailer for the most up-to-date information before making a purchase.'
},
{
    question: '7. Do you provide information about mobile phone accessories and apps?',
    answer: 'While our primary focus is on mobile phones, we do occasionally cover accessories and apps that are relevant to the mobile technology ecosystem. You can find this information in our articles and guides.'
},
{
    question: '8. How do I stay updated with the latest content from Buymobile.com.pk?',
    answer: 'You can stay informed about the latest mobile phone releases, reviews, and industry updates by subscribing to our newsletter or by following us on our social media channels.'
},
]
