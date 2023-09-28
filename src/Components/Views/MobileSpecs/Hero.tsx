import React, { MutableRefObject, useState } from "react"
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { AiFillFacebook, AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai"
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
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 1, spacing: 5 },
            },
        },
        slides: {
            perView: 1.5,
            spacing: 10,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
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

    const [rating, setRating] = useState(0);

    const handleStarClick = (index: any) => {
        setRating(index + 1);
    };


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
            <div className="flex flex-wrap justify-evenly lg:flex-nowrap pt-8 pb-14">
                <div className="relative max-w-[800px] mx-auto sm:mx-0">
                    <div ref={sliderRef} className="keen-slider max-w-[300px] lg:max-w-[300px] mx-auto">
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
                    {loaded && instanceRef.current && (
                        <div className=''>
                            <span className="absolute -left-7 top-40  z-[2000]">
                                <Arrow
                                    left
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />
                            </span>
                            <span className="absolute -right-7 top-40  z-[2000]">
                                <Arrow
                                    onClick={(e: any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </span>
                        </div>
                    )}
                </div>
                <div>
                    <div className=" hidden lg:block border border-primary max-w-[500px] px-4 py-4 mb-10">
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
                        <div className='flex gap-1'>
                            {stars.map((item, index) => (
                                <span
                                    key={index}
                                    className='text-[#fee86d] text-2xl cursor-pointer'
                                    onClick={() => handleStarClick(index)}
                                >
                                    {index < rating ? <AiFillStar /> : <AiOutlineStar />}
                                </span>
                            ))}
                        </div>
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



const stars = [
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
    {
        star: <AiOutlineStar />
    },
]


function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <div
            onClick={props.onClick}
            className={` rounded-full p-3 cursor-pointer  ${props.left ? "arrow--left " : "arrow--right "
                } ${disabeld}`}
        >
            {props.left && (
                <Image src={'/arrowleft.svg'} alt="" width={30} height={30} />
            )}
            {!props.left && (
                <Image src={'/arrowright.svg'} alt="" width={30} height={30} />
            )}
        </div>
    )
}