import Ads from '@/Components/Common/Ads';
import Image from 'next/image'
import React from 'react'
import { AiFillAndroid } from 'react-icons/ai';


const Mobile = () => {

    const itemsPerRow = 5; // Number of items per row

    const rows = [];

    for (let i = 0; i < data.length; i += itemsPerRow) {
        rows.push(data.slice(i, i + itemsPerRow));
    }


    return (
        <section className='px-10 pb-16'>
            <div className='flex pb-10 justify-around items-center gap-3'>
                <div>
                    <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                </div>
                <p className='text-xl font-semibold whitespace-nowrap'>Featured Brands</p>
                <div>
                    <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                </div>
            </div>
            <div className='bg-white flex border py-3 px-2 mb-9'>
                <p className='px-4 cursor-pointer'>Prices</p>
                <p className='px-4 cursor-pointer'>Latest</p>
                <p className='px-4 cursor-pointer'>Coming Soon</p>
            </div>
            <div className="grid grid-cols-5 gap-5">
                {rows.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((item, itemIndex) => (
                            <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[220px]">
                                <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                <p className="text-center font-medium leading-5">{item.model}</p>
                                <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                    <span className="text-primary text-sm">{item.price}</span>
                                    <span className="pl-2"><AiFillAndroid /></span>
                                </div>
                            </div>
                        ))}
                        {((rowIndex + 1) % 3 === 0) && (
                            <div className="col-span-5">
                                <Ads />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Mobile;


const data = [
    {
        img: '/mobile1.png',
        model: 'Samsung Samsung Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile1.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
    {
        img: '/mobile2.png',
        model: 'Samsung',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
    },
]
