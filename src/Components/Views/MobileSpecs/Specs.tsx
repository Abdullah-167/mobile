import Image from 'next/image'
import React from 'react'
import { HiOutlineHandThumbDown, HiOutlineHandThumbUp } from 'react-icons/hi2';

const Specs = () => {

    return (
        <section>
            <div className=''>
                <div className='flex  gap-2 items-center bg-white border border-[#C1C1C1] py-2 px-3 lg:px-20 justify-between rounded'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex gap-2 items-center cursor-pointer'
                                key={index}
                            >
                                <Image src={item.img} alt='images' width={20} height={20} />
                                <p>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-gray-100 px-5 py-10 my-10 rounded'>
                    <h2 className='text-3xl font-semibold pb-3'>Samsung Galaxy Z Fold 3 price in Pakistan</h2>
                    <p>Samsung Galaxy Z Fold 3 price in Pakistan is Rs. 314,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.</p>
                    <ul className='pb-8'>
                        <li className='list-disc ml-5'>Price of Samsung Galaxy Z Fold 3 in Pakistan is Rs. 314,999.</li>
                        <li className='list-disc ml-5'>Price of Samsung Galaxy Z Fold 3 in Pakistan is Rs. 314,999.</li>
                    </ul>
                    <h2 className='text-3xl font-semibold pb-3'>Samsung Galaxy Z Fold 3</h2>
                    <p className='pb-5'>Samsung is launching a new Galaxy Z that has got the moniker Fold 3 at the end. The company has been experimenting with the folding form factor for over a year now. The first Galaxy Fold was a proof of concept more than anything but the new Samsung Galaxy Z Fold 2 added more polish to it, tweaked the design, and made the original Fold into something practical, not just a gimmicky party trick. </p>

                    {prosData.map((pro, index) => (
                        <div key={index} className='pb-7'>
                            <div className='flex gap-2 text-primary'>
                                <span className='text-3xl pt-1'>{pro.icon}</span>
                                <h2 className='text-3xl font-semibold pb-3'>{pro.heading}</h2>
                            </div>
                            <ul>
                                {pro.text.map((item, idx) => (
                                    <li className=' list-disc ml-4' key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {consData.map((pro, index) => (
                        <div key={index}>
                            <div className='flex gap-2 text-primary'>
                                <span className='text-3xl pt-1'>{pro.icon}</span>
                                <h2 className='text-3xl font-semibold pb-3'>{pro.heading}</h2>
                            </div>
                            <ul>
                                {pro.text.map((item, idx) => (
                                    <li className=' list-disc ml-4' key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='flex pb-10 justify-around items-center gap-3'>
                    <div>
                        <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                        <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    </div>
                    <p className='text-xl font-semibold whitespace-nowrap'>Samsung Galaxy Z Fold 3 Detailed Specifications</p>
                    <div>
                        <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                        <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    </div>
                </div>
                <div className=' hidden lg:block'>
                    {specs.map((spec, index) => (
                        <div key={index} className=" rounded flex bg-[#E5F9DB] ">
                            <div className='px-2 min-w-[230px] specs-heading-bg'>
                                <h2 className="text-xl font-semibold pt-2">{spec.mainheading}</h2>
                                {spec.screenShot && (
                                    <div className="">
                                        <span className='text-sm cursor-pointer'>{spec.screenShot[0].text}</span>
                                        <div className="flex gap-2">
                                            {spec.screenShot[0].Images.map((image, imageIndex) => (
                                                <Image key={imageIndex} src={image} alt="screenshot" width={50} height={50} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {spec.specs.map((specItem, specIndex) => (
                                    <div key={specIndex} className="flex items-center ">
                                        <p className="font-semibold text-[#676767] min-w-[160px] border py-1 px-2 border-primary">{specItem}</p>
                                        <p className='border py-1 px-2'>{spec.specsAns[specIndex]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Specs;

const data = [
    {
        img: '/opinion.svg',
        text: 'OPINIONS',
    },
    {
        img: '/compare.svg',
        text: 'Compare',
    },
    {
        img: '/picture.svg',
        text: 'Picture',
    },
]


const prosData = [
    {
        icon: <HiOutlineHandThumbUp />,
        heading: 'Pros',
        text: [
            'Sturdy and water-resistant build',
            'Smooth performance and good cameras',
            'Under-display camera makes viewing immersive',
            'Useful software features'
        ]
    }
];


const consData = [
    {
        icon: <HiOutlineHandThumbDown />,
        heading: 'Cons',
        text: [
            'Heavy and bulky',
            'Cover screen feels cramped',
            'Still needs to handled carefully',
            'Pricey'
        ]
    }
];



const specs = [
    {
        mainheading: 'General',
        screenShot: [
            {
                text: 'Screen Shot',
                Images: [
                    '/samsungfold.svg',
                    '/samsungfold.svg',
                    '/samsungfold.svg',
                ]
            }
        ],
        specs: [
            'Launch Date',
            'OS',
            'UI',

        ],
        specsAns: [
            'August 24, 2021 (Official Date)',
            'Android v11OS',
            'Samsung One UI 3.5'
        ]
    },
    {
        mainheading: 'Key Specifications',
        specs: [
            'RAM',
            'Processor',
            'Back Camera',
            'Display',
        ],
        specsAns: [
            'Octa core (2.84 GHz, Single core, Kryo 680 + 2.42 GHz, Tri core, Kryo 680 + 1.8 GHz, Quad core, Kryo 680)',
            '12 MP + 12 MP + 12 MP',
            '7.6 inches (19.3 cm)'
        ]
    },
    {
        mainheading: 'Display',
        specs: [
            'Display Type',
            'Screen Size',
            'Resolution',
            'Aspect Ratio',
        ],
        specsAns: [
            'Dynamic AMOLED',
            '7.6 inches (19.3 cm)',
            '1768 x 2208 pixels',
            '22.5:18'
        ]
    },
    {
        mainheading: 'Design',
        specs: [
            'Height',
            'Width',
            'Weight',
            'Thickness',
        ],
        specsAns: [
            '158.2 mm',
            '128.1 mm',
            '271 grams',
            '6.4 mm'
        ]
    },
    {
        mainheading: 'Camera',
        screenShot: [
            {
                text: 'View All Screen Shots',
                Images: [
                    '/samsungfold.svg',
                    '/samsungfold.svg',
                    '/samsungfold.svg',
                ]
            }
        ],
        specs: [
            'Camera Setup',
            'Touch Screen',
            'HDR+ support'
        ],
        specsAns: [
            'Yes',
            'Yes, Capacitive Touchscreen, Multi-touch',
            '1200 nits'
        ]
    },
    {
        mainheading: 'Battery',
        specs: [
            'Height',
            'Width',
            'Weight',
            'Thickness',
        ],
        specsAns: [
            '158.2 mm',
            '128.1 mm',
            '271 grams',
            '6.4 mm'
        ]
    },
]