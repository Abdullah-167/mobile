import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { AiFillAndroid } from 'react-icons/ai';
import Container from "@/Components/Layout/Container"

const LatestNews = () => {

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
                <div className="flex justify-between items-center pb-5">
                    <h2 className='text-xl font-extrabold'>Latest News</h2>
                    <p className="flex gap-3 items-center cursor-pointer">Read More
                        <span className="">
                            <svg className=" w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </p>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="latest-newsCards max-h-[220px] mx-2  keen-slider__slide cursor-pointer border border-[#949191] p-1">
                                <Image className=" flex justify-center mx-auto pb-2" src={item.img} alt={"slider-images"} width={1000} height={1000} />
                                <p className="text-xs text-[#707070] pb-1">{item.author}</p>
                                <p className="text-[13px] leading-[16px] pb-0.5">{item.description}</p>
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

export default LatestNews;




const data = [
    {
        img: '/newsmob1.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob2.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob3.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob1.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob2.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob3.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob1.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob2.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
    {
        img: '/newsmob3.png',
        author: 'By Rehan Shah',
        description: 'Latest News on Galaxy A05 in pakistan for the 2023 loungh'
    },
]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`max-w-[40px] z-[200] bg-gray-500 bg-opacity-50 rounded-full p-3 sm:flex hidden cursor-pointer absolute ${props.left ? "arrow--left -top-[160px] sm:-top-[140px] lg:-top-[125px] -left-4 " : "arrow--right -top-[160px] sm:-top-[140px] lg:-top-[125px] -right-4 "
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
