import React from 'react'
import { useRouter } from 'next/router';

const SideBar = () => {

    const router = useRouter();

    let maxSidebarHeight = 'max-h-full';

    if (router.pathname === '/contact') {
        maxSidebarHeight = 'max-h-[1670px] overflow-y-scroll';
    } else if (router.pathname === '/aboutus') {
        maxSidebarHeight = 'max-h-[1200px] overflow-y-scroll';
    }
    else if (router.pathname === '/privacy-policy') {
        maxSidebarHeight = 'max-h-[1500px] overflow-y-scroll';
    }
    else if (router.pathname === '/terms-conditions') {
        maxSidebarHeight = 'max-h-[1500px] overflow-y-scroll';
    }
    else if (router.pathname === '/disclaimer') {
        maxSidebarHeight = 'max-h-[1300px] overflow-y-scroll';
    }
    else if (router.pathname === '/advertise-with-us') {
        maxSidebarHeight = 'max-h-[1200px] overflow-y-scroll';
    }
    else if (router.pathname === '/feedback') {
        maxSidebarHeight = 'max-h-[1400px] overflow-y-scroll';
    }

    return (
        <aside>
            <div
                className={`bg-[#008339] max-w-[220px]  min-w-[220px]  h-full px-4 mt-[22px] text-white py-5 z-[150] hidden lg:block ${maxSidebarHeight}`}
            >
                <div className='pb-3'>
                    <h1 className='text-xl font-bold pb-3 cursor-pointer text-center'>News</h1>
                    <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white'>Latest News</p>
                    <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white'>Reviews</p>
                    <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white'>Gadges Reviews</p>
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Brand</h2>
                    {byBrand.map((item, index) => {
                        return (
                            <div className='flex flex-col' key={index}>
                                <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Price</h2>
                    {byPrice.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.price}</p>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Memory</h2>
                    {memory.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.text}</p>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Ram</h2>
                    {ram.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.ram}</p>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Storage</h2>
                    {storage.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.storage}</p>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Storage</h2>
                    {storage.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.storage}</p>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Screen</h2>
                    {screen.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.screen}</p>
                        )
                    })}
                </div>
                <div className='pb-3'>
                    <h2 className='text-xl font-bold text-white pb-3 text-center'>Search By Os</h2>
                    {os.map((item, index) => {
                        return (
                            <p className='text-[15px] text-center mb-2.5 cursor-pointer border border-transparent hover:border-white' key={index}>{item.os}</p>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}

export default SideBar;



const byBrand = [
    {
        text: 'Samsung Mobile'
    },
    {
        text: 'Oppo Mobile'
    },
    {
        text: 'Vivo Mobile'
    },
    {
        text: 'Huawei Mobile'
    },
    {
        text: 'Realme Mobile'
    },
    {
        text: 'Honor Mobile'
    },
    {
        text: 'Apple Iphone'
    },
    {
        text: 'Xiaomi Mobile'
    },
    {
        text: 'Infinix Mobile'
    },
    {
        text: 'Tecno Mobile'
    },
    {
        text: 'Poco Mobile'
    },
    {
        text: 'Digit Mobile'
    },
    {
        text: 'Itel Mobile'
    },
    {
        text: 'Dcode Mobile'
    },
    {
        text: 'Lenovo Mobile'
    },
    {
        text: 'Sony Mobile'
    },
    {
        text: 'LG Mobile'
    },
    {
        text: 'Oneplus Mobile'
    },
    {
        text: 'Htc Mobile'
    },
    {
        text: 'Microsoft Mobile'
    },
    {
        text: 'Motorola Mobile'
    },
    {
        text: 'Sparx Mobile '
    },
    {
        text: 'E Tachi Mobile'
    },
    {
        text: 'Gfive Mobile'
    },
    {
        text: 'Jazz Digit Mobile'
    },
    {
        text: 'Haier Mobile'
    },
    {
        text: 'Mobilink JazzX'
    },
    {
        text: 'Telenor Mobile'
    },
    {
        text: 'Voice Mobile'
    },
    {
        text: 'BlackBerry '
    },
    {
        text: 'Nokia Mobile'
    },
    {
        text: 'Meizo Mobile'
    },
    {
        text: 'Calme Mobile'
    },
    {
        text: 'GRight Mobile'
    },
    {
        text: 'OPhone Mobile'
    },
    {
        text: 'Rivo Mobile'
    },

]


const byPrice = [
    {
        price: 'Greater Than 50,000'
    },
    {
        price: 'Mobile Under 50,000'
    },
    {
        price: 'Mobile Under 45,000'
    },
    {
        price: 'Mobile Under 40,000'
    },
    {
        price: 'Mobile Under 35,000'
    },
    {
        price: 'Mobile Under 30,000'
    },
    {
        price: 'Mobile Under 25,000'
    },
    {
        price: 'Mobile Under 20,000'
    },
    {
        price: 'Mobile Under 15,000'
    },
    {
        price: 'Mobile Under 10,000'
    },
    {
        price: 'Mobile Under 5,000'
    },
    {
        price: 'Prices  > 50,000'
    },
    {
        price: '45,001 - 50,000'
    },
    {
        price: '40,001 - 45,000'
    },
    {
        price: '35,001 - 40,000'
    },
    {
        price: '30,001 - 35,000'
    },
    {
        price: '25,001 - 30,000'
    },
    {
        price: '20,001 - 25,000'
    },
    {
        price: '15,001 - 20,000'
    },
    {
        price: '10,001 - 15,000'
    },
    {
        price: '5,000 - 10,000'
    },
]


const memory = [
    {
        text: '2/16 GB RAM'
    },
    {
        text: '2/32 GB RAM'
    },
    {
        text: '3/32 GB RAM'
    },
    {
        text: '3/64 GB RAM'
    },
    {
        text: '4/64 GB RAM'
    },
    {
        text: '4/128 GB RAM'
    },
    {
        text: '4/256 GB RAM'
    },
    {
        text: '6/128 GB RAM'
    },
    {
        text: '6/256 GB RAM'
    },
    {
        text: '8/128 GB RAM'
    },
    {
        text: '8/256 GB RAM'
    },
    {
        text: '8/512 GB RAM'
    },
    {
        text: '12/128 GB RAM'
    },
]


const ram = [
    {
        ram: '2GB RAM'
    },
    {
        ram: '3GB RAM'
    },
    {
        ram: '4GB RAM'
    },
    {
        ram: '6GB RAM'
    },
    {
        ram: '8GB RAM'
    },
    {
        ram: '12GB RAM'
    },
]


const storage = [
    {
        storage: '16GB '
    },
    {
        storage: '32GB '
    },
    {
        storage: '64GB '
    },
    {
        storage: '128GB '
    },
    {
        storage: '256GB '
    },
    {
        storage: '512GB '
    },
    {
        storage: '1TB '
    },
]

const screen = [
    {
        screen: 'Less Then 3 Inches'
    },
    {
        screen: '3.0 inch - 4.0 inch'
    },
    {
        screen: '4.1 inch - 4.9 inch'
    },
    {
        screen: '5.0 inch - 6.9 inch'
    },
    {
        screen: '7.0 inch - 8.9 inch'
    },
]

const type = [
    {
        type: 'PTA Approved'
    },
    {
        type: 'Non PTA Approved'
    },
    {
        type: 'Wireless LAN'
    },
    {
        type: '1 Year Warranty'
    },
    {
        type: 'Bluetooth Mobiles'
    },
    {
        type: 'Camera Mobiles'
    },
    {
        type: 'Video Recording'
    },
    {
        type: 'Memory Card'
    },
    {
        type: 'MP3 Playback'
    },
    {
        type: 'Single SIM Support'
    },
    {
        type: 'Dual SIM Support'
    },
]

const os = [
    {
        os: 'Android Phones'
    },
    {
        os: 'Windows Phones'
    },
    {
        os: 'Apple Iphones'
    },
]