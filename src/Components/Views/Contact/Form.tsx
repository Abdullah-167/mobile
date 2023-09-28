import React from 'react'
import { MdMail } from 'react-icons/md'

const Form = () => {
    return (
        <section>
            <h1 className='sm:px-10 px-0 pt-12 text-2xl sm:text-3xl font-semibold text-gray-600 pb-7 sm:pb-12 text-center text-primary'>Contact BuyMobile<span className='text-base'>.com.pk </span></h1>
            <div className=' max-w-[600px] mx-auto'>
                <div className='flex md:flex-nowrap flex-wrap md:justify-center gap-10'>
                    <div>
                        {address.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2 className='text-lg font-semibold pb-5'>{item.heading}</h2>
                                    <p className='text-sm text-gray-600 max-w-[300px]'>{item.address}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className=''>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2 className='text-lg font-semibold pb-3'>{item.heading}</h2>
                                    <div>
                                        {item.innerData.map((innerItem, idx) => {
                                            return (
                                                <div className='pb-3' key={idx}>
                                                    <h2 className='font-medium pb-1'>{innerItem.heading}</h2>
                                                    <div className='flex items-center gap-1'>
                                                        <span className=' text-primary text-2xl'>
                                                            <MdMail />
                                                        </span>
                                                        <p className='text-gray-600 cursor-pointer text-sm'>{innerItem.text}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className='text-sm max-w-[600px] mx-auto pb-10'> <span className=' font-semibold underline'> Please Note: </span>  buymobile.com.pk only provides information about mobile phones. We do not sell mobile phones.</p>
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
            </div>
        </section>
    )
}



export default Form;


const address = [
    {
        heading: 'Registered Office',
        address: '91DIGITAL WEB PRIVATE LIMITED H.NO. B-23 F/F BLOCK-B, SECTOR-12, DWARKA, NEW DELHI 110077, INDIA',
    }
]



const data = [
    {
        heading: 'Contact Information',
        innerData: [
            {
                heading: 'For media promotions:',
                text: 'advertise@91mobiles.com'
            },
            {
                heading: 'For website feedback::',
                text: 'advertise@91mobiles.com'
            },
            {
                heading: 'For affiliate/merchant partnerships::',
                text: 'advertise@91mobiles.com'
            },
            {
                heading: 'For cashback::',
                text: 'advertise@91mobiles.com'
            },
        ]
    }
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