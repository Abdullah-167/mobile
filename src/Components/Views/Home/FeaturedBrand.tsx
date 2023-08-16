import Image from 'next/image'
import React from 'react'

const FeaturedBrand = () => {
    return (
        <section>
            <div className='py-10 px-5'>
                <div className='flex pb-10 justify-around items-center gap-3'>
                    <div>
                        <Image className='pb-1' src={'/line1.png'} alt={''} width={1000} height={1000} />
                        <Image src={'/line2.png'} alt={''} width={1000} height={1000} />
                    </div>
                    <p className='text-xl font-semibold whitespace-nowrap'>Featured Brands</p>
                    <div>
                        <Image className='pb-1' src={'/line1.png'} alt={''} width={1000} height={1000} />
                        <Image src={'/line2.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center max-w-[1000px] mx-auto'>
                    {brands.map((item, index) => {
                        return (
                            <Image key={index} className='pb-1 cursor-pointer' src={item.img} alt={'mobile-brnads'} width={200} height={200} />
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
        img: '/apple.png'
    },
    {
        img: '/google.png'
    },
    {
        img: '/samsung.png'
    },
    {
        img: '/huawei.png'
    },
    {
        img: '/oppo.png'
    },
    {
        img: '/vivo.png'
    },
    {
        img: '/oneplus.png'
    },
    {
        img: '/mi.png'
    },
    {
        img: '/lenovo.png'
    },
    {
        img: '/nokia.png'
    },
    {
        img: '/microsoft.png'
    },
    {
        img: '/motorola.png'
    },
]


