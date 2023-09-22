import Ads from '@/Components/Common/Ads';
import Image from 'next/image'
import React from 'react'
import { AiFillAndroid } from 'react-icons/ai';
import { VscListFilter } from 'react-icons/vsc';


const Mobile = ({ toggleSidebar }: any) => {

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
            <div className='bg-white flex  md:flex-nowrap flex-wrap justify-between border py-3 px-2 mb-9'>
                <div className='flex flex-wrap ga-2 md:pb-0 pb-3'>
                    <p className='px-4 cursor-pointer'>Prices</p>
                    <p className='px-4 cursor-pointer'>Latest</p>
                    <p className='px-4 cursor-pointer'>Coming Soon</p>
                </div>
                <span
                    className='border-2 border-primary mx-3 px-2 lg:hidden rounded cursor-pointer font-medium flex gap-2 items-center'
                    onClick={toggleSidebar} // Call the toggleSidebar function on click
                >
                    Filter All <span className='text-lg'> <VscListFilter /> </span>
                </span>            </div>
            <div className=" hidden lg:grid grid-cols-5 gap-5">
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
            <div className=" lg:hidden hidden md:grid grid-cols-3 gap-5">
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
                        {((rowIndex + 2) % 2 === 0) && (
                            <div className="col-span-3">
                                <Ads />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className=" md:hidden grid grid-cols-2 gap-5">
                {rows.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((item, itemIndex) => (
                            <div key={itemIndex} className=" relative  bg-white cursor-pointer rounded py-3 border hover:border-primary transition-all duration-500 min-h-[250px] md:min-h-[220px]">
                                <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                                <p className="text-center font-medium leading-5">{item.model}</p>
                                <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                    <span className="text-primary text-sm">{item.price}</span>
                                    <span className="pl-2"><AiFillAndroid /></span>
                                </div>
                            </div>
                        ))}
                        {((rowIndex + 2) % 3 === 0) && (
                            <div className="col-span-2">
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
