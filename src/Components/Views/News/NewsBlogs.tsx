import Image from 'next/image'
import React from 'react'

const NewsBlogs = () => {
    return (
        <section>
            <div>
                <div>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mt-14 mb-5'>{item.mainheading}</h2>
                                <div className='grid grid-cols-3 gap-5'>
                                    {item.innerData.map((newItem, idx) => {
                                        return (
                                            <div className='blog-heading overflow-hidden'>
                                                <Image className=' cursor-pointer transition-all duration-500 hover:scale-105 max-h-[302px] pb-3 object-cover' src={newItem.bigImage} alt={'card-image'} width={1000} height={1000} />
                                                <p className=' font-semibold pb-1'>{newItem.heading}</p>
                                                <span className=' text-sm text-gray-500'>{newItem.author} - {newItem.date}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default NewsBlogs

const data = [
    {
        mainheading: 'News',
        innerData: [
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
        ]
    },
    {
        mainheading: 'Stories That Matter',
        innerData: [
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
        ]
    },
    {
        mainheading: 'Reviews',
        innerData: [
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
        ]
    },
    {
        mainheading: 'Entertainment',
        innerData: [
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
            {
                bigImage: '/imgfour.png',
                heading: 'Thumbnail PlayStation Plus subscription price in India hiked, here’s how much it costs now',
                author: 'Rehan Shah',
                date: getCurrentDate(),
            },
        ]
    },
]

function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
}