import React, { useEffect, useState } from 'react'

const HeroSlide = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className=''>
            <div className='relative pb-[390px]'>
                {data.map((item, index) => {
                    return (
                        <h2 key={index}
                            className={`absolute top-5 py-40 text-center w-full flex justify-center items-center text-4xl font-bold max-w-[757px] transition-all duration-700 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundColor: item.bg,
                                color: item.color
                            }}
                        >{item.img}</h2>
                    )
                })}
            </div>
        </section>
    )
}

export default HeroSlide;


const data = [
    {
        img: 'Welcome to Buy Mobile',
        color: 'black',
        bg: 'white'
    },
    {
        img: 'Welcome to Buy Mobile',
        color: 'white',
        bg: 'black'
    },
    {
        img: 'Welcome to Buy Mobile',
        color: 'white',
        bg: '#008339'
    },
]