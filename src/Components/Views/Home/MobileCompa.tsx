import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { AiFillAndroid } from 'react-icons/ai';
import Container from "@/Components/Layout/Container"

const MobileCompa = () => {

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
        <section className="relative py-8">
            <div className="max-w-[1000px] mx-auto px-5">
                <h2 className='text-3xl font-semibold text-center pb-6'>Featured Mobile Comparisons</h2>
                <div ref={sliderRef} className="keen-slider">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="latest-newsCards keen-slider__slide cursor-pointer border border-[#949191] p-1">
                                <Image className=" flex justify-center mx-auto pb-2 max-h-[150px] min-h-[150px] object-contain" src={item.img} alt={"comparison-mobile-images"} width={1000} height={1000} />
                                <div className="flex text-sm font-semibold text-[#292929] gap-2 justify-around">
                                    <p>{item.mobOneName}</p>
                                    <p>{item.mobTwoName}</p>
                                </div>
                                <div className="flex text-sm font-semibold text-[#292929] gap-2 justify-around pb-4">
                                    <p>{item.priceOne}</p>
                                    <p>{item.priceTwo}</p>
                                </div>
                                <button className="relative left-[85px] sm:left-12 md:left-14 flex items-center justify-center px-5 py-[1px] overflow-hidden font-bold group mb-1">
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative w-full text-center mx-auto flex justify-center text-primary transition-colors duration-200 ease-in-out group-hover:text-white">{item.compBtn}</span>
                                    <span className="absolute inset-0 border-[1.5px] border-primary"></span>
                                </button>
                            </div>
                        )
                    })}
                </div>
                {loaded && instanceRef.current && (
                    <div className="relative">
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
                    </div>
                )}
            </div>
        </section>
    )
}

export default MobileCompa;




const data = [
    {
        img: '/compmobile.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile2.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile3.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile2.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile3.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile2.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
    {
        img: '/compmobile3.png',
        priceOne: 'Rs. 20,000',
        priceTwo: 'Rs. 35.000',
        mobOneName: 'Oppo',
        mobTwoName: 'Infinix',
        compBtn: 'Compare'
    },
]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`max-w-[40px] bg-gray-500 bg-opacity-50 sm:flex hidden rounded-full p-3 cursor-pointer absolute ${props.left ? "arrow--left -top-[160px] sm:-top-[140px] lg:-top-[145px] -left-4 z-[1000]" : "arrow--right -top-[160px] sm:-top-[140px] lg:-top-[145px] -right-4 z-[1000]"
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
