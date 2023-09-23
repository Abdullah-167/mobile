import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import Image from 'next/image'
import React from 'react'

const BlogData = () => {
    return (
        <div>
            <Container>
                <Ads />
                <div className='flex lg:flex-nowrap flex-wrap justify-between gap-5'>
                    <div>
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold pb-2'>Redmi Note 13 Pro tipped to launch as POCO phone globally</h1>
                        <p className=' text-sm text-gray-500 mb-4'>{`Rehan Shah`} - {getCurrentDate()}</p>
                        <Image src={'/whiteMob.webp'} alt={'blog-image'} width={600} height={600} />
                    </div>
                    <div className='flex flex-wrap lg:flex-nowrap gap-12 lg:max-w-[360px]'>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mb-5'>Trending News</h2>
                            <div className='lg:block grid grid-cols-1 md:grid-cols-2 gap-5 '>
                                {trendingNews.map((item, index) => {
                                    return (
                                        <div className='flex blog-heading overflow-hidden pb-3 md:max-w-[360px]'
                                            key={index}>
                                            <div>
                                                <p className='text-sm font-semibold '>{item.heading}</p>
                                                <span className=' text-[10px] text-gray-500'>{item.author} - {item.date}</span>
                                            </div>
                                            <Image className=' cursor-pointer transition-all duration-500 hover:scale-105 max-h-[100px] rounded-md min-w-[140px]  pb-3 object-cover' src={item.bigImage} alt={'card-image'} width={100} height={100} />
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mt-14 mb-5'>Popular Phones</h2>
                                <div className='lg:block grid grid-cols-2 sm:grid-cols-3 gap-5 '>
                                    {popularPhones.map((item, index) => {
                                        return (
                                            <li className=' font-semibold list-disc hover:text-primary cursor-pointer pb-2 text-xs sm:text-sm ml-4' key={index}>{item.mobiles}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <Ads />
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mt-14 mb-5'>Latest Reviews</h2>
                                <div className='lg:block grid grid-cols-1 md:grid-cols-2 gap-5 '>
                                    {latestReviews.map((item, index) => {
                                        return (
                                            <div className='flex blog-heading overflow-hidden pb-3 md:max-w-[360px]'
                                                key={index}>
                                                <div>
                                                    <p className='text-sm font-semibold '>{item.heading}</p>
                                                    <span className=' text-[10px] text-gray-500'>{item.author} - {item.date}</span>
                                                </div>
                                                <Image className=' cursor-pointer transition-all duration-500 hover:scale-105 max-h-[100px] rounded-md min-w-[140px]  pb-3 object-cover' src={item.bigImage} alt={'card-image'} width={100} height={100} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mt-14 mb-5'>List</h2>
                                <div className=''>
                                    {list.map((item, index) => {
                                        return (
                                            <div className='flex justify-center  blog-heading overflow-hidden pb-3'
                                                key={index}>
                                                <div>
                                                    <p className='text-sm font-semibold '>{item.heading}</p>
                                                    <span className=' text-[10px] text-gray-500'>{item.author} - {item.date}</span>
                                                </div>
                                                <Image className=' cursor-pointer transition-all duration-500 hover:scale-105 max-h-[100px] rounded-md min-w-[140px]  pb-3 object-cover' src={item.bigImage} alt={'card-image'} width={100} height={100} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mt-14 mb-5'>Popular Phones</h2>
                                <div className='lg:block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                                    {mobileList.map((item, index) => {
                                        return (
                                            <li className=' font-semibold list-disc hover:text-primary cursor-pointer pb-2 text-sm ml-4' key={index}>{item.mobile}</li>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <h2 className='text-3xl font-semibold text-primary border-b-2 border-b-primary pb-1 mt-14 mb-5'>Updates</h2>
                                <div className='lg:block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                                    {updates.map((item, index) => {
                                        return (
                                            <li className=' font-semibold list-disc hover:text-primary cursor-pointer pb-2 text-sm ml-4' key={index}>{item.mobile}</li>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BlogData




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


const latestArticle = [
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

const trendingNews = [
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


const popularPhones = [
    {
        mobiles: ' Nothing Phone 2'
    },
    {
        mobiles: '  realme C53'
    },
    {
        mobiles: ' realme 11 Pro'
    },
    {
        mobiles: '  vivo V27'
    },
    {
        mobiles: ' iQOO Neo 7 Pro'
    },
    {
        mobiles: 'realme C55'
    },
    {
        mobiles: 'OPPO Reno10 5G'
    },
    {
        mobiles: 'realme 10 Pro 5G'
    },
    {
        mobiles: 'OnePlus 11R'
    },
    {
        mobiles: 'Motorola Edge 40'
    },
    {
        mobiles: ' Infinix Note 30 5G'
    },
    {
        mobiles: ' realme Narzo 60 5G'
    },
    {
        mobiles: '  Infinix GT 10 Pro'
    },
    {
        mobiles: ' Lava Agni 2 5G'
    },
    {
        mobiles: '  realme Narzo N53'
    },
    {
        mobiles: '   OnePlus Nord CE 3 5G'
    },
    {
        mobiles: ' vivo T2x'
    },
    {
        mobiles: ' POCO F5'
    },
    {
        mobiles: ' Xiaomi Redmi 12 5G'
    },
    {
        mobiles: '  Samsung Galaxy A14 5G'
    },
    {
        mobiles: ' iQOO Z7'
    },
    {
        mobiles: '  OnePlus Nord 2T 5G'
    },
    {
        mobiles: '  Moto G14'
    },
    {
        mobiles: '   Samsung Galaxy M34'
    },
    {
        mobiles: ' Samsung Galaxy S21 FE'
    },
    {
        mobiles: ' POCO M6 Pro 5G'
    },
    {
        mobiles: ' Apple iPhone 14 Pro Max'
    },
    {
        mobiles: ' Samsung Galaxy A54 5G'
    },
    {
        mobiles: ' Apple iPhone 13'
    },
    {
        mobiles: '  Tecno Camon 20 Pro'
    },
]

const latestReviews = [
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
]
const howTo = [
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
]
const list = [
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
    {
        bigImage: '/imgfour.png',
        heading: 'Thumbnail PlayStation Plus subscription price in India hiked',
        author: 'Rehan Shah',
        date: getCurrentDate(),
    },
]


const mobileList = [
    {
        mobile: 'Best Phones Under 10000'
    },
    {
        mobile: 'Best Phones Under 15000'
    },
    {
        mobile: 'Best Phones Under 20000'
    },
    {
        mobile: 'Best Camera Phones'
    },
    {
        mobile: '5G Mobiles'
    },
    {
        mobile: 'Latest Mobiles'
    },
    {
        mobile: 'Best Mobiles'
    },
    {
        mobile: 'Best Gaming Phones'
    },
    {
        mobile: 'Samsung Mobiles'
    },
    {
        mobile: 'Xiaomi Mobiles'
    },
    {
        mobile: 'Realme Mobiles'
    },
    {
        mobile: 'OnePlus Mobiles'
    },
    {
        mobile: 'Vivo Mobiles'
    },
    {
        mobile: 'Apple Mobiles'
    },
    {
        mobile: 'OPPO Mobiles'
    },
    {
        mobile: 'IQOO Mobiles'
    },
    {
        mobile: 'POCO Mobiles'
    },
    {
        mobile: 'Moto Mobiles'
    },
]


const updates = [
    {
        mobile: 'Best Phones Under 10000'
    },
    {
        mobile: 'Best Phones Under 15000'
    },
    {
        mobile: 'Best Phones Under 20000'
    },
    {
        mobile: 'Best Camera Phones'
    },
    {
        mobile: '5G Mobiles'
    },
    {
        mobile: 'Latest Mobiles'
    },
    {
        mobile: 'Best Mobiles'
    },
    {
        mobile: 'Best Gaming Phones'
    },
    {
        mobile: 'Samsung Mobiles'
    },
    {
        mobile: 'Xiaomi Mobiles'
    },
    {
        mobile: 'Realme Mobiles'
    },
    {
        mobile: 'OnePlus Mobiles'
    },
    {
        mobile: 'Vivo Mobiles'
    },
    {
        mobile: 'Apple Mobiles'
    },
    {
        mobile: 'OPPO Mobiles'
    },
    {
        mobile: 'IQOO Mobiles'
    },
    {
        mobile: 'POCO Mobiles'
    },
    {
        mobile: 'Moto Mobiles'
    },
]


function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
}