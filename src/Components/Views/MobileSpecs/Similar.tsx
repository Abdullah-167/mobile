import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { useState } from "react"
import { AiFillAndroid } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowRoundBack } from 'react-icons/io';

const Similar = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 3, spacing: 5 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 5, spacing: 10 },
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
        <section className=" relative py-10">
            <div className='flex mb-10 border-b-2 justify-around items-center gap-3'>
                <div className=''>
                    <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                </div>
                <p className='text-xl font-semibold whitespace-nowrap'>Similarly Priced Mobile Phones </p>
                <div>
                    <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                </div>
            </div>
            <div className=" relative">
                <div ref={sliderRef} className="keen-slider max-w-[1000px] mx-auto"> 
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="keen-slider__slide relative  bg-white cursor-pointer rounded pt-3 pb-[50px] border hover:border-primary min-h-[220px]">
                            <Image className="flex justify-center mx-auto pb-1" src={item.img} alt={"slider-images"} width={100} height={100} />
                            <p className="text-center font-medium leading-5">{item.model}</p>
                            <div className="flex px-3 justify-between items-center absolute bottom-2 inset-x-0">
                                <span className="text-primary text-sm">{item.price}</span>
                                <span className="pl-2"><AiFillAndroid /></span>
                            </div>
                        </div>
                        )
                    })}

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

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
            </div>
        </section>
    )
}

export default Similar;



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
        <div
            onClick={props.onClick}
            className={`max-w-[160px] text-[#B6B6B6]  rounded-full p-3 cursor-pointer absolute ${props.left ? "arrow--left top-[70px] left-4 z-[1000]" : "arrow--right top-[70px] -right-4 z-[1000]"
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