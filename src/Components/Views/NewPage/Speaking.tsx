import Image from 'next/image';
import React from 'react'

const Speaking = () => {
    return (
        <section className='container'>
            <div className='py-10'>
                <h2 className=' text-3xl  md:text-4xl font-semibold text-center pb-16'>Speaking Your Languages Since 2015</h2>
                <div className='flex flex-wrap lg:flex-nowrap lg:justify-between gap-20 max-w-[900px] mx-auto'>
                    {data.map((item, index) => {
                        return (
                            <div className=''
                                key={index}>
                                <Image className='min-h-[120px] mx-auto flex justify-center pb-4' src={item.img} alt={'images'} width={70} height={70} />
                                <div>
                                    <h3 className='text-3xl font-semibold pb-2 text-center'>{item.number}</h3>
                                    <p className='sm:text-xl font-semibold text-center'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Speaking;

const data = [
    {
        img: '/xl.svg',
        number: '50,000',
        text: '100% customisable platform'
    },
    {
        img: '/x2.svg',
        number: '28',
        text: '4.7/5 Reviews.io        '
    },
    {
        img: '/x3.svg',
        number: '72',
        text: 'interpreter 10+ years experience         '
    },
    {
        img: '/x4.svg',
        number: '72',
        text: 'ISO Certified platform'
    },
]