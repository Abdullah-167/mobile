import Image from 'next/image'
import React from 'react'

const FeaturedBrand = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto py-10'>
                <div className='flex pb-10 justify-around items-center gap-3'>
                    <div>
                        <Image className='min-h-[10px] max-h-[8px] mb-0.5' src={'/line1.png'} alt={''} width={1000} height={1000} />
                        <Image className='min-h-[3px] max-h-[3px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    </div>
                    <p className='text-xl font-semibold whitespace-nowrap'>Featured Brands</p>
                    <div>
                        <Image className='min-h-[10px] max-h-[8px] mb-0.5' src={'/line1.png'} alt={''} width={1000} height={1000} />
                        <Image className='min-h-[3px] max-h-[3px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center max-w-[1000px] mx-auto px-5'>
                    {brands.map((item, index) => {
                        return (
                            <div className=' flex justify-center items-center' key={index}>
                                <div className='border-[1.2px] border-[#C1C1C1] rounded hover:border-[#004F22] min-h-[200px] max-h-[200px] px-8 sm:px-16 py-5  transition-all duration-500 cursor-pointer'>
                                    <Image className='min-w-[100px] min-h-[140px]' src={item.img} alt={''} width={100} height={100} />
                                    <p className='text-center'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturedBrand;


const brands = [
    {
        img: '/apple.svg',
        text: 'Apple'
    },
    {
        img: '/google.svg',
        text: 'Google'
    },
    {
        img: '/samsung.svg',
        text: 'Samsung'
    },
    {
        img: '/huawie.svg',
        text: 'Huawei'
    },
    {
        img: '/oppo.svg',
        text: 'Oppo'
    },
    {
        img: '/vivo.svg',
        text: 'Vivo'
    },
    {
        img: '/oneplus.svg',
        text: 'One Plus'
    },
    {
        img: '/mi.svg',
        text: 'Xiaomi'
    },
    {
        img: '/lenovo.svg',
        text: 'Lenovo'
    },
    {
        img: '/nokia.svg',
        text: 'Nokia'
    },
    {
        img: '/microsoft.svg',
        text: 'Microsoft'
    },
    {
        img: '/motorola.svg',
        text: 'Motorola'
    },
]


