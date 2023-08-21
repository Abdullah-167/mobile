import Slider from 'rc-slider'
import React, { useState } from 'react'
import 'rc-slider/assets/index.css';
import useCheckboxList from '@/Components/hooks/useCheckboxList';
import Image from 'next/image';

const CatSideBar = () => {

    const [pricingRange, setPricingRange] = useState([0, 100000]);
    const { checkedIndices, handleDivClick } = useCheckboxList();
    const [searchBrand, setSearchBrand] = useState('');
    const refineCheckboxList = useCheckboxList();
    const featuredCheckboxList = useCheckboxList();
    const mobbrands = useCheckboxList();
    const markStatus = useCheckboxList();
    const launchedStatus = useCheckboxList();
    const ramStatus = useCheckboxList();
    const internal = useCheckboxList();
    const external = useCheckboxList();
    const screenSize = useCheckboxList();
    const pixelDensity = useCheckboxList();
    const screenFeatures = useCheckboxList();
    const refreshRate = useCheckboxList();
    const screenResolution = useCheckboxList();



    const handlePriceChange = (values: any) => {
        setPricingRange(values);
    };

    const handleSearchChange = (event: any) => {
        const query = event.target.value.toLowerCase();
        setSearchBrand(query);
    };

    const handleInputChange = (index: any, value: any) => {
        const newPricingRange = [...pricingRange];
        newPricingRange[index] = value;
        setPricingRange(newPricingRange);
    };

    const filteredBrands = mobileBrands.filter((brand) =>
        brand.brand.toLowerCase().includes(searchBrand)
    );


    return (
        <aside>
            <div className='bg-[#FFF] max-w-[260px] border h-full py-5 hidden lg:block'>
                <div className='pb-5 px-4  '>
                    <div className='flex justify-around pb-4'>
                        <span>Refine results</span>
                        <span className=' cursor-pointer border-b'>Clear All</span>
                    </div>
                    <input className='px-2 w-full mx-1 mb-4 outline-none outline-gray-200 focus:outline-gray-400 transition-all duration-500' type="text" />
                    <div className="px-2">
                        <Slider
                            min={0}
                            max={100000}
                            range
                            value={pricingRange}
                            onChange={handlePriceChange}
                            trackStyle={[{ backgroundColor: '#38a169', height: '6px', top: "7px" }]}
                            railStyle={{ backgroundColor: '#718096', top: "7px" }}
                            handleStyle={[{ backgroundColor: '#38a169', borderColor: '#38a169', width: '20px', height: '20px' }, { backgroundColor: '#38a169', borderColor: '#38a169', width: '20px', height: '20px' }]} // Customize handle color
                        />
                        <div className="flex gap-4 mt-4 mb-7">
                            <input
                                type="text"
                                className='border border-gray-300 px-2 py-1 w-1/2 outline-none active:outline-black transition-all duration-500'
                                value={pricingRange[0]}
                                onChange={(e) => handleInputChange(0, e.target.value)}
                            />
                            <span className="text-gray-500">To</span>
                            <input
                                type="text"
                                className='border border-gray-300 px-2 py-1 w-1/2 outline-none active:outline-black transition-all duration-500'
                                value={pricingRange[1]}
                                onChange={(e) => handleInputChange(1, e.target.value)}
                            />
                        </div>
                    </div>
                    {priceRange.map((item, index) => {
                        return (
                            <div className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                key={index} onClick={() => refineCheckboxList.handleDivClick(index)}>
                                <input type={item.type} checked={refineCheckboxList.checkedIndices.includes(index)} />
                                <p>{item.range}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-4'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Featured Searches</span>
                    </div>
                    {featured.map((item, index) => {
                        return (
                            <div className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-8'
                                key={index} onClick={() => featuredCheckboxList.handleDivClick(index)}>
                                <input type={item.type} checked={featuredCheckboxList.checkedIndices.includes(index)} />
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-5'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Brands</span>
                    </div>
                    <div className='px-4'>
                        <input
                            className='w-full mb-4 outline-none outline-gray-200 focus:outline-gray-400 transition-all duration-500'
                            placeholder='Search Brand e.g Apple'
                            type='text'
                            value={searchBrand}
                            onChange={handleSearchChange}
                        />
                        <div className='max-h-[200px] min-h-[200px] overflow-auto'>
                            {filteredBrands.map((item, index) => (
                                <div
                                    className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                    key={index}
                                    onClick={() => mobbrands.handleDivClick(index)}
                                >
                                    <input
                                        type='checkbox'
                                        checked={mobbrands.checkedIndices.includes(index)}
                                    // Add checkbox logic here
                                    />
                                    <p>{item.brand}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Market Status</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {marketStatus.map((item, index) => (
                                <div
                                    className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                    key={index}
                                    onClick={() => markStatus.handleDivClick(index)}
                                >
                                    <input
                                        type='checkbox'
                                        checked={markStatus.checkedIndices.includes(index)}
                                    />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Launched within</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {launched.map((item, index) => (
                                <div
                                    className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                    key={index}
                                    onClick={() => launchedStatus.handleDivClick(index)}
                                >
                                    <input
                                        type='checkbox'
                                        checked={launchedStatus.checkedIndices.includes(index)}
                                    />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Ram</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {ram.map((item, index) => (
                                <div
                                    className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                    key={index}
                                    onClick={() => ramStatus.handleDivClick(index)}
                                >
                                    <input
                                        type='checkbox'
                                        checked={ramStatus.checkedIndices.includes(index)}
                                    />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Ram</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {memory.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold pb-2'>{item.memStatus}</p>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.memStatus === 'Internal Memory') {
                                                    internal.handleDivClick(modelIndex);
                                                } else if (item.memStatus === 'External Memory') {
                                                    external.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.memStatus === 'Internal Memory'
                                                        ? internal.checkedIndices.includes(modelIndex)
                                                        : external.checkedIndices.includes(modelIndex)
                                                }
                                            />
                                            <p>{model.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Ram</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {display.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold pb-2'>{item.screenSize}</p>
                                    {item.screen.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-xs pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.screenSize === 'Screen Size') {
                                                    screenSize.handleDivClick(modelIndex);
                                                } else if (item.screenSize === 'Pixel Density (Sharpness)') {
                                                    pixelDensity.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Screen Features') {
                                                    screenFeatures.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Refresh Rate') {
                                                    refreshRate.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Screen Resolution') {
                                                    screenResolution.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.screenSize === 'Screen Size'
                                                        ? screenSize.checkedIndices.includes(modelIndex)
                                                        : item.screenSize === 'Pixel Density (Sharpness)'
                                                            ? pixelDensity.checkedIndices.includes(modelIndex)
                                                            : item.screenSize === 'Screen Features'
                                                                ? screenFeatures.checkedIndices.includes(modelIndex)
                                                                : item.screenSize === 'Refresh Rate'
                                                                    ? refreshRate.checkedIndices.includes(modelIndex)
                                                                    : item.screenSize === 'Screen Resolution'
                                                                        ? screenResolution.checkedIndices.includes(modelIndex)
                                                                        : false
                                                }
                                            />
                                            <p>{model.size}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default CatSideBar;




const priceRange = [
    {
        type: 'radio',
        range: 'Rs. 5,000 and below (200)'
    },
    {
        type: 'radio',
        range: 'Rs. 5,000 - Rs. 10,000 (213)'
    },
    {
        type: 'radio',
        range: 'Rs. 10,000 - Rs. 15,000 (102)'
    },
    {
        type: 'radio',
        range: 'Rs. 15,000 - Rs. 20,000 (204)'
    },
    {
        type: 'radio',
        range: 'Rs. 20,000 - Rs. 25,000 (216)'
    },
    {
        type: 'radio',
        range: 'Rs. 25,000 - Rs. 30,000 (218)'
    },
    {
        type: 'radio',
        range: 'Rs. 30,000 - Rs. 35,000 (180)'
    },
    {
        type: 'radio',
        range: 'Rs. 35,000 - Rs. 40,000 (190)'
    },
    {
        type: 'radio',
        range: 'Rs. 40,000 - Rs. 45,000 (199)'
    },
    {
        type: 'radio',
        range: 'Rs. 45,000 - Rs. 50,000 (120)'
    },
    {
        type: 'radio',
        range: 'Rs. 50,000 and above (112)'
    },
]

const featured = [
    {
        type: 'checkbox',
        text: '4 GB & above RAM (172) '
    },
    {
        type: 'checkbox',
        text: '128 GB & above Memory (172)  '
    },
    {
        type: 'checkbox',
        text: '5000 mAh & above (234) '
    },
    {
        type: 'checkbox',
        text: '64 MP & above Camera (119) '
    },
    {
        type: 'checkbox',
        text: '5G (176)'
    },
    {
        type: 'checkbox',
        text: 'Dual VoLTE (42) '
    },
    {
        type: 'checkbox',
        text: 'Quick Charging (419)  [+] '
    },
    {
        type: 'checkbox',
        text: 'Dual SIM (664) '
    },
]


const mobileBrands = [
    { "brand": "Apple", "type": "checkbox" },
    { "brand": "Samsung", "type": "checkbox" },
    { "brand": "Huawei", "type": "checkbox" },
    { "brand": "Xiaomi", "type": "checkbox" },
    { "brand": "Oppo", "type": "checkbox" },
    { "brand": "Vivo", "type": "checkbox" },
    { "brand": "OnePlus", "type": "checkbox" },
    { "brand": "Google", "type": "checkbox" },
    { "brand": "Sony", "type": "checkbox" },
    { "brand": "LG", "type": "checkbox" },
    { "brand": "Motorola", "type": "checkbox" },
    { "brand": "Nokia", "type": "checkbox" },
    { "brand": "HTC", "type": "checkbox" },
    { "brand": "Lenovo", "type": "checkbox" },
    { "brand": "ASUS", "type": "checkbox" },
    { "brand": "BlackBerry", "type": "checkbox" },
    { "brand": "Alcatel", "type": "checkbox" },
    { "brand": "ZTE", "type": "checkbox" },
    { "brand": "Honor", "type": "checkbox" },
    { "brand": "Realme", "type": "checkbox" },
    { "brand": "Infinix", "type": "checkbox" },
    { "brand": "TCL", "type": "checkbox" },
    { "brand": "Meizu", "type": "checkbox" },
    { "brand": "LeEco", "type": "checkbox" },
    { "brand": "Micromax", "type": "checkbox" },
    { "brand": "Panasonic", "type": "checkbox" },
    { "brand": "Gionee", "type": "checkbox" },
    { "brand": "Coolpad", "type": "checkbox" },
    { "brand": "Lava", "type": "checkbox" },
    { "brand": "Sharp", "type": "checkbox" },
    { "brand": "Nubia", "type": "checkbox" },
    { "brand": "Essential", "type": "checkbox" },
    { "brand": "CAT", "type": "checkbox" },
    { "brand": "Wiko", "type": "checkbox" },
    { "brand": "Kyocera", "type": "checkbox" },
    { "brand": "BLU", "type": "checkbox" },
    { "brand": "YotaPhone", "type": "checkbox" },
    { "brand": "Palm", "type": "checkbox" },
    { "brand": "ZUK", "type": "checkbox" },
    { "brand": "Razer", "type": "checkbox" },
    { "brand": "Tecno", "type": "checkbox" },
    { "brand": "Vertu", "type": "checkbox" }
]


const marketStatus = [
    {
        type: 'checkbox',
        text: 'Available In Stores (2093)'
    },
    {
        type: 'checkbox',
        text: 'Upcoming (159)'
    },
    {
        type: 'checkbox',
        text: 'Out of Stock (2858)'
    },
    {
        type: 'checkbox',
        text: 'Rumoured (529)'
    },
]


const launched = [
    {
        type: 'checkbox',
        text: 'Last 3 months (284)'
    },
    {
        type: 'checkbox',
        text: 'Last 6 months (579)'
    },
    {
        type: 'checkbox',
        text: 'Last 1 year (1035)'
    },
]

const ram = [
    {
        type: 'checkbox',
        text: '4 GB RAM (4167)'
    },
    {
        type: 'checkbox',
        text: '6 GB RAM (2692)'
    },
    {
        type: 'checkbox',
        text: '8 GB RAM (748)'
    },
    {
        type: 'checkbox',
        text: '12 GB RAM & above (112)'
    },
]


const memory = [
    {
        memStatus: 'Internal Memory',
        dataType: [
            { text: '8 GB (2676)', type: 'checkbox' },
            { text: '32 GB RAM (3689)', type: 'checkbox' },
            { text: '64 GB RAM (4675)', type: 'checkbox' },
            { text: '128 GB RAM (2692)', type: 'checkbox' },
            { text: '256 GB RAM (748)', type: 'checkbox' },
            { text: '512 GB RAM & above (112)', type: 'checkbox' },
        ],
    },
    {
        memStatus: 'External Memory',
        dataType: [
            { text: 'USB OTG (3676)', type: 'checkbox' },
            { text: 'Memory Card Slot (30689)', type: 'checkbox' },
        ],
    },
];


const display = [
    {
        screenSize: 'Screen Size',
        screen: [
            { type: "checkbox", size: 'Below 3 inch (1233)' },
            { type: "checkbox", size: '3.0 inch - 4.0 inch (689)' },
            { type: "checkbox", size: '4.1 inch - 4.9 inch (675)' },
            { type: "checkbox", size: '5.0 inch - 5.9 inch (692)' },
            { type: "checkbox", size: '6.0 inch - 6.9 inch (748)' },
            { type: "checkbox", size: '7.0 inch - 8.9 inch (112)' },
        ]
    },
    {
        screenSize: 'Pixel Density (Sharpness)',
        screen: [
            { type: "checkbox", size: '400 ppi & above (376)' },
            { type: "checkbox", size: '500 ppi & above (80)' },

        ]
    },
    {
        screenSize: 'Screen Features',
        screen: [
            { type: "checkbox", size: 'Gorilla Glass (269)  [+]' },
            { type: "checkbox", size: 'AMOLED (161)' },
            { type: "checkbox", size: 'Super AMOLED (401)' },

        ]
    },
    {
        screenSize: 'Refresh Rate',
        screen: [
            { type: "checkbox", size: '90 Hz (46)' },
            { type: "checkbox", size: '120 Hz (97)' },
        ]
    },
    {
        screenSize: 'Screen Resolution',
        screen: [
            { type: "checkbox", size: 'Full HD Screen (65)' },
            { type: "checkbox", size: '2K (QHD) (28)' },
            { type: "checkbox", size: '4K (UHD) (1)' },
        ]
    },
]