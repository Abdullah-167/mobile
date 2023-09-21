import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import RightSide from '@/Components/Views/Home/RightSide'
import SideBar from '@/Components/Views/Home/SideBar'
import React from 'react'

const feedback = () => {
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
                                <h1 className=' text-center text-3xl sm:text-5xl text-primary font-semibold pt-10 pb-10'>Feedback </h1>
                                <p className='text-lg pb-6'>We value your feedback at Buymobile.com.pk and believe that your input can help us improve our services. Please take a moment to share your thoughts, suggestions, or concerns with us. Your feedback is essential in our continuous effort to enhance your experience on our website.</p>
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
                                <div className='bg-gray-100 px-5 py-7 mb-10'>
                                    <p className='text-sm pb-7'>{`Need to reach us? No problem. Just fill out the form below and we'll make sure your message reaches the right person.`}</p>
                                    <div>
                                        {formData.map((item, index) => {
                                            return (
                                                <div className={`flex sm:flex-nowrap flex-wrap pb-3 ${index > 2 ? '' : 'items-center'}`}
                                                    key={index}
                                                >
                                                    <label className='min-w-[100px]'>{item.text}</label>
                                                    <div className='flex-grow'>{item.input}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <button className=' bg-primary hover:bg-transparent hover:text-primary border-2 border-transparent hover:border-primary text-white px-5 py-1.5 transition-all duration-300 flex justify-center rounded-md mx-auto max-w-[120px]'>{`Submit >`}</button>
                                </div>
                                <p className='pb-2'>  <span className=' font-semibold pb-2'> Privacy Notice:</span> Your privacy is important to us. We will only use the information you provide to respond to your feedback and improve our services. For more details, please refer to our Privacy Policy. </p>
                                <p className='pb-2 text-lg sm:text-2xl font-semibold'>  <span className=' font-semibold pb-2'></span> Thank You for Your Feedback</p>
                                <p className='pb-2'>  <span className=' font-semibold pb-2'></span>We appreciate you taking the time to provide feedback and contribute to the Buymobile.com.pk community. Your valuable insights help us make our website a better resource for all mobile phone enthusiasts in Pakistan.</p>
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

export default feedback;

const data = [
    {
        heading: 'How to Provide Feedback',
        para: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>  General Feedback:</span> If you have general comments or suggestions about our website, content, or services, please use the form below to share your thoughts. </p>
        ),
        para2: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>Report Issues: </span> If you encounter technical issues or errors while using our website, please describe the problem in detail so that we can investigate and resolve it promptly. </p>
        ),
        para3: (
            <p className='pb-2'>  <span className=' font-semibold pb-2'>Content Contributions:</span> {`If you have user-generated content, such as mobile phone reviews or articles, that you'd like to contribute to our platform, please indicate your interest in the form. We'll provide guidelines on how to submit your content.`} </p>
        ),
    },

]




const formData = [
    {
        text: 'Subject',
        input: (
            <input type="text" className='bg-gray-200 border text-sm border-gray-400 outline-none rounded w-full text-black px-2 py-1' placeholder='Subject' />
        )
    },
    {
        text: 'Full Name*',
        input: (
            <input type="text" className='bg-gray-200 border text-sm border-gray-400 outline-none rounded w-full text-black px-2 py-1' placeholder='Enter Your Full Name' />
        )
    },
    {
        text: 'Email*',
        input: (
            <input type='email' className='bg-gray-200 border text-sm border-gray-400 outline-none rounded w-full text-black px-2 py-1' placeholder='Enter Your Valid Email Id' />
        )
    },
    {
        text: 'File*',
        input: (
            <input type="file" className='bg-gray-200 border text-sm border-gray-400 outline-none rounded w-full text-black px-2 py-1' />
        )
    },
    {
        text: 'Message',
        input: (
            <textarea className='bg-gray-200 border text-sm border-gray-400 outline-none rounded w-full text-black px-2 py-1 h-32' />
        )
    },
]