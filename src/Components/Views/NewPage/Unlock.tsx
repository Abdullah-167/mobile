import Image from 'next/image';
import React from 'react'
import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Unlock = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({

        slides: {
            perView: 2,
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
        <section className='container'>
            <div className='py-20'>
                <h2 className='text-5xl text-center font-semibold pb-8'>Unlock Global Opportunities</h2>
                <p className='font-poppins text-center font-medium text-gray-500 pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi soluta modi ut vero est, deleniti consequatur maxime asperiores cumque sint esse debitis tenetur ducimus adipisci delectus quo, suscipit minima ab?</p>
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-10'>
                    {data.map((item, index) => {
                        return (
                            <div className='card-shadow pb-6 rounded-md hover:scale-105 transition-all duration-500' key={index}>
                                <Image className='pb-5 rounded-t-md' src={item.img} alt={'cards-img'} width={500} height={500} />
                                <h2 className='text-2xl font-semibold pb-3 px-2'>{item.heading}</h2>
                                <p className='font-poppins font-medium pb-10 px-2'>{item.para}</p>
                                <span className='mx-2 font-medium text-[#8624E1] border-b-2 border-b-[#8624E1] hover:border-black hover:text-black duration-500 cursor-pointer'>
                                    {item.btn}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Unlock;


const data = [
    {
        img: '/handson.webp',
        heading: 'Simultaneous interpretation',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laboriosam.',
        btn: 'Explore interpretation'
    },
    {
        img: '/handson.webp',
        heading: 'Simultaneous interpretation',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laboriosam.',
        btn: 'Explore captions'
    },
    {
        img: '/handson.webp',
        heading: 'Simultaneous interpretation',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laboriosam.',
        btn: 'Explore AI translation'
    },

]


function Arrow(props: any) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <div onClick={props.onClick}
            className={`max-w-[40px] rounded-full p-3 cursor-pointer flex justify-center items-center ${props.left ? "arrow--left bg-tertiary" : "arrow--right -right-4 bg-primary"
                } ${disabeld}`}
        >
            {props.left && (
                <span>  <AiOutlineArrowLeft /> </span>
            )}
            {!props.left && (
                <span> <AiOutlineArrowRight /></span>
            )}
        </div>
    )
}