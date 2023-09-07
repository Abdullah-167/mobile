import Image from 'next/image';
import React from 'react'

const Hero = () => {

    const data = [
        {
            bigImage: '/imgfour.png',
            heading: 'Watch: Google mocks Apple’s late switch to USB-C with iPhone 15 series',
            author: 'Rehan Shah',
            date: getCurrentDate(),
            sideCards: [
                {
                    bigImage: '/imgfour.png',
                    heading: 'Watch: Google mocks Apple’s late switch to USB-C with iPhone 15 series',
                },
                {
                    bigImage: '/imgfour.png',
                    heading: 'Watch: Google mocks Apple’s late switch to USB-C with iPhone 15 series',
                },
            ]
        },
    ]

    function getCurrentDate(): string {
        const currentDate: Date = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString(undefined, options);
    }

    return (
        <header>
            <div>
                <h1 className='text-5xl font-semibold pt-10 pb-5'>News</h1>
                <div className='w-full'>
                    {data.map((item, index) => {
                        return (
                            <div className='grid grid-cols-4 gap-3 w-full'>
                                <div className='relative shadow-md col-span-3 max-h-[490px] overflow-hidden cursor-pointer' key={index}>
                                    <Image className=' transition-all duration-500 hover:scale-105 w-full max-h-[490px] object-cover' src={item.bigImage} alt={'card-image'} width={1000} height={1000} />
                                    <div className=' absolute bottom-7 left-7  text-white '>
                                        <p className='text-3xl max-w-[600px] font-semibold pb-4'>{item.heading}</p>
                                        <span>{item.author} - {item.date}</span>
                                    </div>
                                </div>
                                <div className=''>
                                    {item.sideCards.map((newitem, idx) => {
                                        return (
                                            <div className='shadow-md max-w-[300px] mb-2 overflow-hidden cursor-pointer' key={idx}>
                                                <Image className='w-full  transition-all duration-500 hover:scale-105 max-h-[185px] object-cover pb-2' src={newitem.bigImage} alt={'card-image'} width={300} height={300} />
                                                <p className='text-sm max-w-[600px] font-semibold pb-4 px-2'>{newitem.heading}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Hero;

