import React, { MutableRefObject, useState } from "react"
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { AiFillFacebook, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsappSquare, FaYoutube } from "react-icons/fa"
import { FiLink2 } from "react-icons/fi"
import Link from "next/link"


function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default function App() {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 1.5,
            spacing: 5,
        },
    })
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 5,
                spacing: 5,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <header>
            <div className='flex gap-3 justify-between items-center pb-5'>
                <span className='text-[#019943] cursor-pointer'>
                    {`Mobile Prices >`}
                </span>
                <div className='flex gap-2 text-3xl items-center'>
                    <span className='text-sm cursor-pointer'>Share On</span>
                    <span className='cursor-pointer'>  <FiLink2 /> </span>
                    <span className='text-blue-500 cursor-pointer'>
                        <AiFillFacebook />
                    </span>
                    <span className='text-green-500 cursor-pointer'>
                        <FaWhatsappSquare />
                    </span>
                </div>
            </div>
            <h1 className='text-primary text-3xl font-semibold'>Samsung Galaxy Z Fold 3</h1>
            <div className="flex flex-wrap  lg:flex-nowrap pt-8 pb-14">
                <div className="max-w-[600px] mx-auto">
                    <div ref={sliderRef} className="keen-slider max-w-[300px] lg:max-w-[600px] mx-auto">
                        {imageArray.map((imageUrl, index) => (
                            <div key={index} className="keen-slider__slide flex justify-center">
                                <Image width={300} height={300} src={imageUrl} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>
                    <div ref={thumbnailRef} className="keen-slider thumbnail max-w-[300px] lg:max-w-[400px] justify-center mx-auto">
                        {imageArray.map((imageUrl, index) => (
                            <div key={index} className="keen-slider__slide ">
                                <Image className=" object-contain flex justify-center mx-auto items-center pt-1" src={imageUrl} width={30} height={30} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className=" hidden lg:block border border-primary max-w-[470px] px-4 py-4 mb-10">
                        <Image src={"/mainlogo.svg"} alt={"logo"} width={300} height={300} />
                        <p className="pb-20 text-[#676767] pl-2">1,059,108 Followers</p>
                        <div className="flex gap-3">
                            {socialicons.map((item, index) => {
                                return (
                                    <Link href={item.link} target="_blank" key={index}>
                                        <div className="flex gap-2 items-center border py-0.5 px-2 cursor-pointer"
                                            key={index}>
                                            <span
                                                style={{
                                                    color: item.color
                                                }}
                                            >{item.icon}</span>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>

                                )
                            })}
                        </div>
                    </div>
                    <div className="text-[#676767] pt-10 lg:pt-0">
                        <Image className=" cursor-pointer pb-3" src={"/rating.svg"} alt={"logo"} width={100} height={100} />
                        <p className=" text-lg font-semibold">Price</p>
                        <p>USD $1098</p>
                        <p>Rs 314,999</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </header>
    )
}



const imageArray = [
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
    '/samsungfold.svg',
];



const socialicons = [
    {
        icon: <FaFacebook />,
        name: 'FaceBook',
        link: 'https://www.facebook.com/',
        color: 'blue'
    },
    {
        icon: <FaYoutube />,
        name: 'Youtube',
        link: 'https://www.youtube.com/',
        color: 'red'
    },
    {
        icon: <FaInstagram />,
        name: 'Instagram',
        link: 'instagram.com',
        color: 'red'
    },
    {
        icon: <FaTiktok />,
        name: 'Tiktok',
        link: 'https://www.tiktok.com/en/ ',
        color: 'black'
    },
]

