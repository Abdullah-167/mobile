import Image from 'next/image'
import React from 'react'

const FeaturedBrand = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto py-10'>
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
                            <div className='border-[1.2px] border-[#C1C1C1] hover:border-[#004F22] transition-all duration-500 cursor-pointer px-20 py-5 min-h-[200px] max-h-[200px] flex justify-center items-center'>
                                <Image key={index} className='pb-1 ' src={item.img} alt={'mobile-brnads'} width={200} height={200} />
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
        img: '/apple.svg'
    },
    {
        img: '/google.svg'
    },
    {
        img: '/samsung.svg'
    },
    {
        img: '/huwaie.svg'
    },
    {
        img: '/oppo.svg'
    },
    {
        img: '/vivo.svg'
    },
    {
        img: '/oneplus.svg'
    },
    {
        img: '/mi.svg'
    },
    {
        img: '/lenovo.svg'
    },
    {
        img: '/nokia.svg'
    },
    {
        img: '/microsoft.svg'
    },
    {
        img: '/motorola.svg'
    },
]


