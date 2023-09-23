import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { AiFillAndroid } from 'react-icons/ai';

const BestByPrice = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 3, spacing: 5 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 15 },
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

    return (
        <section className="max-w-[1000px] mx-auto relative py-8 px-5 ">
            <h2 className="text-3xl font-semibold text-center pb-10">Best Mobiles by Price</h2>
            <div ref={sliderRef} className="keen-slider relative">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="keen-slider__slide cursor-pointer rounded my-1 pt-2 border border-transparent hover:border-primary duration-100"
                            style={{
                                backgroundColor: item.bgColor
                            }}
                        >
                            <div className="flex justify-center gap-4 py-8">
                                <Image className="" src={item.img} alt={"slider-images"} width={30} height={30} />
                                <div className=" ">
                                    <span className=" text-white text-lg font-semibold  pb-1.5">{item.text}</span>
                                    <p className=" text-white text-lg font-semibold  pb-1.5 text-center">{item.price}</p>
                                </div>
                            </div>
                            <button className="bg-[#E9E9E9] text-sm py-1 text-center w-full">
                                {item.btn}
                            </button>
                        </div>
                    )
                })}

            </div>
            {loaded && instanceRef.current && (
                <>
                    <span className="max-w-[30px]">
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />
                    </span>

                    <Arrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </>
            )}
        </section>
    )
}

export default BestByPrice;



const data = [
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 10,000',
        btn: 'View Details',
        bgColor: '#17594A'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 15,000',
        btn: 'View Details',
        bgColor: '#0B666A'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 20,000',
        btn: 'View Details',
        bgColor: '#138C48'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 25,000',
        btn: 'View Details',
        bgColor: '#17594A'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 10,000',
        btn: 'View Details',
        bgColor: '#0B666A'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 30,000',
        btn: 'View Details',
        bgColor: '#138C48'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 35,000',
        btn: 'View Details',
        bgColor: '#17594A',
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 40,000',
        btn: 'View Details',
        bgColor: '#0B666A'
    },
    {
        img: '/minimob.svg',
        text: 'Best Mobile Under',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 45,000',
        btn: 'View Details',
        bgColor: '#138C48'
    },
]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`max-w-[40px] z-[200] bg-gray-500 bg-opacity-50 sm:flex hidden rounded-full p-3 cursor-pointer absolute ${props.left ? "arrow--left top-[170px] left-1" : "arrow--right top-[170px]  right-1"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path fill="white" d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path fill="white" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}