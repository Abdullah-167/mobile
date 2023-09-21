import Container from '@/Components/Layout/Container';
import Image from 'next/image'
import React from 'react'

const WhichMobExpan = () => {
    return (
        <section>
            <Container>
                <div className='flex pb-10 justify-around items-center gap-3'>
                    <div>
                        <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                        <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    </div>
                    <p className='text-xl font-semibold whitespace-nowrap'>Samsung Mobile Phones Price in Pakistan 2023</p>
                    <div>
                        <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                        <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
                <div>
                    {data.map((section, sectionIndex) => {
                        return (
                            <div key={sectionIndex}>
                                {section.headings.map((heading, headingIndex) => {
                                    return (
                                        <div className=' ' key={headingIndex}>
                                            <table className='w-full'>
                                                <thead className=''>
                                                    <tr className=' text-primary text-lg font-semibold flex justify-between text-center pb-5'>
                                                        <td>{heading.headingOne}</td>
                                                        <td className='pl-10'>{heading.headingTwo}</td>
                                                        <td className='pl-20'>{heading.headingThree}</td>
                                                        <td>{heading.headingFour}</td>
                                                    </tr>
                                                </thead>
                                                <tbody className=''>
                                                    {heading.subHeading.map((item, index) => (
                                                        <tr className='border-b border-b-[#C1C1C1] flex justify-between pb-1 mb-2'
                                                            key={index}>
                                                            <td className=' cursor-pointer'>{item.mobile}</td>
                                                            <td className=' cursor-pointer'>{item.price}</td>
                                                            <td className=' cursor-pointer'>{`${item.ram}`}</td>
                                                            <td className=' cursor-pointer'>{`${item.storage}`}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    )
}

export default WhichMobExpan;


const data = [
    {
        headings: [
            {
                headingOne: 'Samsung Mobiles Price',
                headingTwo: 'Price',
                headingThree: 'List',
                headingFour: 'RAM Storage',
                subHeading: [
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                    {
                        mobile: `Samsung Galaxy A51`,
                        price: 'Rs. 54,999',
                        ram: '4GB',
                        storage: '128GB'
                    },
                ]
            },
        ]
    }
]