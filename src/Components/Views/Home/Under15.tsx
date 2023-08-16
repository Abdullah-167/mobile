import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { AiFillAndroid } from 'react-icons/ai';

const Under15 = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        // breakpoints: {
        //     "(min-width: 1024px)": {
        //         slides: 4,
        //     },
        //     "(min-width: 480px)": {
        //         slides: 2,
        //     },
        // },

        slides: {
            perView: 4,
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
            <div className="flex justify-between items-center pb-5">
                <h2 className='text-xl font-extrabold pb-5 text-[#787878]'>Mobiles Under 15,000 Rs.</h2>
                <p className="flex gap-3 items-center cursor-pointer">View All
                    <span className="">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                </p>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {data.map((item, index) => {
                    return (
                        <div key={index} className=" 
shadow-md keen-slider__slide cursor-pointer rounded-md max-h-[200px]">
                            <Image className=" flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                            <p className="text-center font-medium ">{item.model}</p>
                            <div className="flex gap-1 justify-center items-center pb-4">
                                <span className=" text-primary font-semibold text-sm">{item.price}</span>
                                <span className="text-xs">{item.expected}</span>
                                <span className="pl-2">{item.androidIcon}</span>
                            </div>
                            <button className="bg-[#E9E9E9] text-sm py-1.5 text-center w-full">
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

export default Under15;



const data = [
    {
        img: '/mobile1.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile1.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile2.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile1.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile2.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile1.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile2.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile1.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
    {
        img: '/mobile2.png',
        model: 'Best Overall',
        androidIcon: <AiFillAndroid />,
        price: 'Rs. 72,500',
        btn: 'View Details',
        expected: '(Expected)'
    },
]



function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`max-w-[40px] bg-gray-500 bg-opacity-50 rounded-full p-3 cursor-pointer absolute ${props.left ? "arrow--left top-[170px] -left-4 z-[1000]" : "arrow--right top-[170px] -right-4 z-[1000]"
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