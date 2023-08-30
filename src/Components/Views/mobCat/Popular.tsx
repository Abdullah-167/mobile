import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { AiFillAndroid } from 'react-icons/ai';

const Popular = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 3, spacing: 5 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 10 },
            },
        },
        slides: {
            perView: 1,
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
        <section className=" relative py-10 px-10">
            <div className='flex pb-10 justify-around items-center gap-3'>
                <div>
                    <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                </div>
                <p className='text-xl font-semibold whitespace-nowrap'>Popular Mobile Phones</p>
                <div>
                    <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                </div>
            </div>
            <div ref={sliderRef} className="keen-slider max-w-[900px] mx-auto">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="shadow-md keen-slider__slide  max-w-[200px] cursor-pointer rounded-md max-h-[200px] my-3 py-2 bg-white border- border-transparent hover:border-primary ">
                            <Image className=" flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                            <p className="text-center font-medium pb-1">{item.model}</p>
                            <div className=" text-xs flex gap-1 justify-center items-center pb-4 px-2">
                                <span className=" text-primary font-semibold">{item.price}</span>
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

export default Popular;



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
            className={`max-w-[40px] bg-gray-500 bg-opacity-50 rounded-full p-3 cursor-pointer absolute ${props.left ? "arrow--left top-[195px] left-8 z-[1000]" : "arrow--right top-[195px] right-8 z-[1000]"
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