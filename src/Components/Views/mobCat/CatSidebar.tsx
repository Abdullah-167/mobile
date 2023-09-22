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
    const processorSpeed = useCheckboxList();
    const systemOnChip = useCheckboxList();
    const numberOfRearCameras = useCheckboxList();
    const mainCamera = useCheckboxList();
    const numberOfFront = useCheckboxList();
    const frontCamera = useCheckboxList();
    const mainCameraSensor = useCheckboxList();
    const mainCameraFeatures = useCheckboxList();
    const frontCameraFeatures = useCheckboxList();
    const frontCameraSensorBrand = useCheckboxList();
    const videoRecordingFeatures = useCheckboxList();
    const batteryCapacity = useCheckboxList();
    const batteryOther = useCheckboxList();
    const networkType = useCheckboxList();
    const simSupport = useCheckboxList();
    const connectivityMore = useCheckboxList();
    const operatingSystemFun = useCheckboxList();
    const designFun = useCheckboxList();
    const unknownfun = useCheckboxList();


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
            <div className='bg-[#FFF] max-w-[260px] min-w-[260px] border h-full pt-20 sm:py-5'>
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
                            <div className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                            <div className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-8'
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
                                    className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                                    className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                                    className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                                    className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                        <span>Memory</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {memory.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold pb-2'>{item.memStatus}</p>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                                    <p className='font-bold mb-2 border-b-2'>{item.screenSize}</p>
                                    {item.screen.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
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
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Processor</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {processor.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold pb-2'>{item.memStatus}</p>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.memStatus === 'Processor Speed') {
                                                    processorSpeed.handleDivClick(modelIndex);
                                                } else if (item.memStatus === 'System on Chip') {
                                                    systemOnChip.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.memStatus === 'Processor Speed'
                                                        ? processorSpeed.checkedIndices.includes(modelIndex)
                                                        : systemOnChip.checkedIndices.includes(modelIndex)
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
                        <span>Camera</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {camera.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold mb-2 border-b-2'>{item.screenSize}</p>
                                    {item.screen.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.screenSize === 'Number of Rear Cameras') {
                                                    numberOfRearCameras.handleDivClick(modelIndex);
                                                } else if (item.screenSize === 'Main Camera Resolution') {
                                                    mainCamera.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Number of Front Cameras') {
                                                    numberOfFront.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Front Camera Resolution') {
                                                    frontCamera.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Main Camera Sensor Brand') {
                                                    mainCameraSensor.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Main Camera Features') {
                                                    mainCameraFeatures.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Front Camera Features') {
                                                    frontCameraFeatures.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Front Camera Sensor Brand') {
                                                    frontCameraSensorBrand.handleDivClick(modelIndex);
                                                }
                                                else if (item.screenSize === 'Video Recording Features') {
                                                    videoRecordingFeatures.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.screenSize === 'Number of Rear Cameras'
                                                        ? numberOfRearCameras.checkedIndices.includes(modelIndex)
                                                        : item.screenSize === 'Main Camera Resolution'
                                                            ? mainCamera.checkedIndices.includes(modelIndex)
                                                            : item.screenSize === 'Number of Front Cameras'
                                                                ? numberOfFront.checkedIndices.includes(modelIndex)
                                                                : item.screenSize === 'Front Camera Resolution'
                                                                    ? frontCamera.checkedIndices.includes(modelIndex)
                                                                    : item.screenSize === 'Main Camera Sensor Brand'
                                                                        ? mainCameraSensor.checkedIndices.includes(modelIndex)
                                                                        : item.screenSize === 'Main Camera Features'
                                                                            ? mainCameraFeatures.checkedIndices.includes(modelIndex)
                                                                            : item.screenSize === 'Front Camera Features'
                                                                                ? frontCameraFeatures.checkedIndices.includes(modelIndex)
                                                                                : item.screenSize === 'Front Camera Sensor Brand'
                                                                                    ? frontCameraSensorBrand.checkedIndices.includes(modelIndex)
                                                                                    : item.screenSize === 'Video Recording Features'
                                                                                        ? videoRecordingFeatures.checkedIndices.includes(modelIndex)
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
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Battery</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {battery.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold mb-2 border-b-2'>{item.memStatus}</p>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.memStatus === 'Battery Capacity') {
                                                    batteryCapacity.handleDivClick(modelIndex);
                                                } else if (item.memStatus === 'Other') {
                                                    batteryOther.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.memStatus === 'Battery Capacity'
                                                        ? batteryCapacity.checkedIndices.includes(modelIndex)
                                                        : batteryOther.checkedIndices.includes(modelIndex)
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
                        <span>Network Technology</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {networkTechnology.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className='font-bold mb-2 border-b-2'>{item.memStatus}</p>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.memStatus === 'Network Type') {
                                                    networkType.handleDivClick(modelIndex);
                                                } else if (item.memStatus === 'SIM Support') {
                                                    simSupport.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.memStatus === 'Network Type'
                                                        ? networkType.checkedIndices.includes(modelIndex)
                                                        : simSupport.checkedIndices.includes(modelIndex)
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
                        <span>Connectivity & More</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {connectivity.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                connectivityMore.handleDivClick(modelIndex);
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    connectivityMore.checkedIndices.includes(modelIndex)
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
                        <span>Operating System</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {operatingSystem.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                operatingSystemFun.handleDivClick(modelIndex);
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    operatingSystemFun.checkedIndices.includes(modelIndex)
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
                        <span>Design</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {design.map((item, brandIndex) => (
                                <div key={brandIndex}>
                                    <p className={` ${brandIndex > 0 ? 'font-bold mb-2 border-b-2' : 'hidden'}`}>{item.memStatus}</p>
                                    {item.dataType.map((model, modelIndex) => (
                                        <div
                                            className='flex gap-3 items-center text-[13px] pb-[6px] cursor-pointer px-4'
                                            key={modelIndex}
                                            onClick={() => {
                                                if (item.memStatus === 'unknown') {
                                                    designFun.handleDivClick(modelIndex);
                                                } else if (item.memStatus === 'Notch') {
                                                    unknownfun.handleDivClick(modelIndex);
                                                }
                                            }}
                                        >
                                            <input
                                                type='checkbox'
                                                checked={
                                                    item.memStatus === 'unknown'
                                                        ? designFun.checkedIndices.includes(modelIndex)
                                                        : unknownfun.checkedIndices.includes(modelIndex)
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
                        <span>5G Mobile Price List</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {fiveGMoboile.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>By Feature</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {byFeature.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>By Brand</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {byBrand.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>By Mobile Price</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {byMobilePrice.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Popular Upcoming List</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {upcomingMob.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Related Links</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {relatedLinks.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pb-5'>
                    <div className='flex gap-2 items-center bg-[#EAEAEA] px-4 py-1 mb-3'>
                        <Image src={'/sign.svg'} alt='sign-img' width={20} height={20} />
                        <span>Featured Links</span>
                    </div>
                    <div className='px-4'>
                        <div className='overflow-auto'>
                            {featuredLinks.map((item, index) => (
                                <p className='text-[13px] pb-[6px] px-4 text-[#0165BC] cursor-pointer'
                                    key={index}
                                >{item.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default CatSideBar;


const camera = [
    {
        screenSize: 'Number of Rear Cameras',
        screen: [
            { type: "checkbox", size: 'Cameras' },
            { type: "checkbox", size: 'Quad Cameras (134)' },
        ]
    },
    {
        screenSize: 'Main Camera Resolution',
        screen: [
            { type: "checkbox", size: '108 MP Mobiles & above (34)' },
            { type: "checkbox", size: '64 MP Mobiles & above (119)' },
            { type: "checkbox", size: '48 MP Mobiles & above (255)' },
            { type: "checkbox", size: '20 MP Mobiles & above (275)' },
            { type: "checkbox", size: '13 MP Mobiles & above (100)' },
            { type: "checkbox", size: '8 MP Mobiles & above (198)' },
            { type: "checkbox", size: '5 MP Mobiles & above (212)' },
            { type: "checkbox", size: '3 MP Mobiles & above (201)' },
            { type: "checkbox", size: '2 MP Mobiles & above (198)' },
            { type: "checkbox", size: '1 MP Mobiles & above (198)' },
            { type: "checkbox", size: 'Without Camera & above (19)' },
        ]
    },
    {
        screenSize: 'Number of Front Cameras',
        screen: [
            { type: "checkbox", size: 'Dual Camera (20)' },
        ]
    },
    {
        screenSize: 'Front Camera Resolution',
        screen: [
            { type: "checkbox", size: '12 MP & above (274)' },
            { type: "checkbox", size: '16 MP & above (205)' },
            { type: "checkbox", size: '32 MP & above (121)' },
            { type: "checkbox", size: '44 MP & above (10)' },
        ]
    },
    {
        screenSize: 'Main Camera Sensor Brand',
        screen: [
            { type: "checkbox", size: 'Sony (40)' },
            { type: "checkbox", size: 'Samsung (82)' },
            { type: "checkbox", size: 'Omni Vision (0)' },
        ]
    },
    {
        screenSize: 'Main Camera Features',
        screen: [
            { type: "checkbox", size: 'Optical Image Stabilization (172)' },
            { type: "checkbox", size: 'Wide-angle (293)' },
            { type: "checkbox", size: 'Macro (145)' },
            { type: "checkbox", size: 'Depth Sensor (200)' },
            { type: "checkbox", size: 'Fast Auto Focus (880)' },
            { type: "checkbox", size: 'Flash (881)' },
            { type: "checkbox", size: 'Portrait mode (67)' },
            { type: "checkbox", size: 'Optical Zoom (Telephoto lens) (97)' },
        ]
    },
    {
        screenSize: 'Front Camera Features',
        screen: [
            { type: "checkbox", size: 'Front Flash (63)' },
            { type: "checkbox", size: 'Front Auto Focus (60)' },
            { type: "checkbox", size: 'Pop-up Camera (1)' },
            { type: "checkbox", size: 'Portrait (9)' },
            { type: "checkbox", size: 'Wide-angle (196)' },
        ]
    },
    {
        screenSize: 'Front Camera Sensor Brand',
        screen: [
            { type: "checkbox", size: 'Samsung (24)' },
            { type: "checkbox", size: 'Sony (26)' },
        ]
    },
    {
        screenSize: 'Video Recording Features',
        screen: [
            { type: "checkbox", size: 'Full-HD Resolution (333)' },
            { type: "checkbox", size: '4K Resolution (179)' },
            { type: "checkbox", size: 'Slow motion (40)' },
            { type: "checkbox", size: 'Super slow motion (48)' },
        ]
    },
]

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


const processor = [
    {
        memStatus: 'Processor Speed',
        dataType: [
            { text: '2.3 Hz & above (287)', type: 'checkbox' },
            { text: '3 Hz & above (40)', type: 'checkbox' },
        ],
    },
    {
        memStatus: 'System on Chip',
        dataType: [
            { text: 'Snapdragon (312) [+]', type: 'checkbox' },
            { text: 'Mediatek (78) [+]', type: 'checkbox' },
            { text: 'Exynos (317)', type: 'checkbox' },
        ],
    },
];


const battery = [
    {
        memStatus: 'Battery Capacity',
        dataType: [
            { text: '4000 mAh - 5000 mAh (212)', type: 'checkbox' },
            { text: '5000 mAh - 6000 mAh (145)', type: 'checkbox' },
            { text: '6000 mAh - 7000 mAh (100)', type: 'checkbox' },
            { text: '7000 mAh & above (12)', type: 'checkbox' },
        ],
    },
    {
        memStatus: 'Other',
        dataType: [
            { text: 'Quick Charging (419) [+]', type: 'checkbox' },
            { text: 'USB Type-C (419)', type: 'checkbox' },
            { text: 'Wireless Charging (130)', type: 'checkbox' },
        ],
    },
];


const networkTechnology = [
    {
        memStatus: 'Network Type',
        dataType: [
            { text: '5G (176)', type: 'checkbox' },
            { text: '4G (453)', type: 'checkbox' },
            { text: 'VoLTE (469)', type: 'checkbox' },
        ],
    },
    {
        memStatus: 'SIM Support',
        dataType: [
            { text: 'Dual SIM (664)', type: 'checkbox' },
            { text: '4G + 4G (385)', type: 'checkbox' },
            { text: 'Dual VoLTE (42)', type: 'checkbox' },
        ],
    },
];

const connectivity = [
    {
        memStatus: '',
        dataType: [
            { text: 'NFC (307)', type: 'checkbox' },
            { text: 'Fingerprint scanner (485)', type: 'checkbox' },
            { text: 'In-display fingerprint scanner (153)', type: 'checkbox' },
            { text: 'Face unlock (410)', type: 'checkbox' },
            { text: 'Side-mounted fingerprint scanner (152)', type: 'checkbox' },
        ],
    },

];

const operatingSystem = [
    {
        memStatus: '',
        dataType: [
            { text: 'Android (843) [+]', type: 'checkbox' },
            { text: 'Feature Phones (233) [+]', type: 'checkbox' },
            { text: 'In-display fingerprint scanner (153)', type: 'checkbox' },
            { text: 'Windows (42 ) [+]', type: 'checkbox' },
            { text: 'iOS (0) [+] ', type: 'checkbox' },
        ],
    },

];

const design = [
    {
        memStatus: 'unknown',
        dataType: [
            { text: 'Slim (<8.5 mm) (283)', type: 'checkbox' },
            { text: 'Waterproof (143)', type: 'checkbox' },
            { text: 'Punch-hole (207)', type: 'checkbox' },
        ],
    },
    {
        memStatus: 'Notch',
        dataType: [
            { text: 'Notch (179)', type: 'checkbox' },
            { text: 'Water drop notch (61)', type: 'checkbox' },
        ],
    },

];


const fiveGMoboile = [
    {
        text: 'Vivo 5G Mobile Phones'
    },
    {
        text: 'Oppo 5G Mobile Phones'
    },
    {
        text: 'Samsung 5G Mobile Phones'
    },
    {
        text: 'Infinix 5G Mobile Phones'
    },
    {
        text: 'Realme 5G Mobile Phones'
    },
    {
        text: 'LG 5G Mobile Phones'
    },
    {
        text: 'Huawei 5G Mobile Phones'
    },
    {
        text: 'Nokia 5G Mobile Phones'
    },
    {
        text: 'China 5G Mobile Phones'
    },
]

const byFeature = [
    {
        text: 'New 5G Mobiles In Pakistan'
    },
]

const byBrand = [
    {
        text: 'Poco Mobile Price In Pakistan'
    },
    {
        text: 'Samsung Mobile Price In Pakistan'
    },
    {
        text: 'Vivo Mobile Price In Pakistan'
    },
    {
        text: 'Oppo mobile price in pakistan'
    },
    {
        text: 'Infinix mobile price in pakistan'
    },
    {
        text: 'Huawei mobile price in pakistan'
    },
    {
        text: 'Realme mobile price in pakistan'
    },
    {
        text: 'Xiaomi mobile price in pakistan'
    },
    {
        text: 'Tecno mobile price in pakistan'
    },
    {
        text: 'Redmi mobile price in pakistan'
    },
    {
        text: 'Itel mobile price in pakistan'
    },
    {
        text: 'Nokia mobile price in pakistan'
    },
    {
        text: 'All mobile price in pakistans'
    },
    {
        text: 'Qmobile mobile price in pakistan'
    },
    {
        text: 'Digit mobile price in pakistan'
    },
]


const byMobilePrice = [
    {
        text: 'Best mobile phones under 50000'
    },
    {
        text: 'Best mobile phones under 40000'
    },
    {
        text: 'Best mobile phones under 35000'
    },
    {
        text: 'Best mobile phones under 30000'
    },
    {
        text: 'Best mobile phones under 25000'
    },
    {
        text: 'Best mobile phones under 20000'
    },
    {
        text: 'Best mobile phones under 15000'
    },
    {
        text: 'Best mobile phones under 10000'
    },
    {
        text: 'Best mobile phones under 5000'
    },

]

const upcomingMob = [
    {
        text: 'Upcoming 5G Mobiles'
    },
    {
        text: 'Upcoming Xiaomi Mobiles'
    },
    {
        text: 'Upcoming Samsung Mobiles'
    },
    {
        text: 'Upcoming OnePlus Mobiles'
    },
    {
        text: 'Vivo Upcoming Mobiles'
    },
    {
        text: 'Infinix Upcoming Mobiles'
    },
    {
        text: 'Oppo Upcoming Mobiles'
    },
    {
        text: 'Nokia Upcoming Mobiles'
    },
]

const relatedLinks = [
    {
        text: 'Samsung Phones Under 50000'
    },
    {
        text: 'Samsung Phones Under 30000'
    },
    {
        text: 'Samsung Phones Under 20000'
    },
    {
        text: 'Samsung Phones Under 15000'
    },
    {
        text: 'Best Samsung Mobiles Under 5,000'
    },
    {
        text: 'Best Samsung Mobiles Under 10,000'
    },
    {
        text: 'Best Samsung Galaxy Series Mobiles'
    },
]

const featuredLinks = [
    {
        text: 'Samsung Phones Under 50000'
    },
    {
        text: 'Samsung Phones Under 30000'
    },
    {
        text: 'Samsung Phones Under 20000'
    },
    {
        text: 'Samsung Phones Under 15000'
    },
    {
        text: 'Best Samsung Mobiles Under 5,000'
    },
    {
        text: 'Best Samsung Mobiles Under 10,000'
    },
    {
        text: 'Best Samsung Galaxy Series Mobiles'
    },
    {
        text: 'Samsung Phones Under 50000'
    },
]

