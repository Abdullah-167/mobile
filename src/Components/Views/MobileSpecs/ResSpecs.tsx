import React, { MutableRefObject, useState } from 'react';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from 'next/link';


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
            mainRef.current.on("animationStarted", (main: any) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}


const ResSpecs = ({ specs }: any) => {

    const [tab, setTab] = useState(false);

    const handleModale = () => {
        setTab(!tab)
    }

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 1.5,
            spacing: 1,
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

    const imageArray: string[] = [
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



    return (
        <section>
            <div className=' block lg:hidden'>
                {specs.map((spec: any, index: any) => (
                    <div key={index} className="bg- px-5 py-3 sm:py-5  rounded">
                        <h2 className="text-2xl font-semibold pb-2 mb-3 text-primary border-b border-b-primary">{spec.mainheading}</h2>
                        {spec.specs.map((specItem: any, specIndex: any) => (
                            <div key={specIndex} className="flex gap-2 pb-3">
                                <p className="font-semibold min-w-[120px]">{specItem}:</p>
                                <p>{spec.specsAns[specIndex]}</p>
                            </div>
                        ))}

                        {spec.screenShot && spec.screenShot.length > 0 && (
                            <div className="mt-4">
                                <p className=' font-semibold'>{spec.screenShot[0].text}</p>
                                <div className="flex gap-2">
                                    {spec.screenShot[0].Images.map((image: any, imageIndex: any) => (
                                        <Image className=' cursor-pointer' onClick={handleModale} key={imageIndex} src={image} alt="screenshot" width={100} height={100} />
                                    ))}
                                </div>
                            </div>
                        )}
                        {tab && (
                            <div className=' fixed inset-0 w-full h-full bg-white bg-opacity-80 top-[60px] z-[2000]'>
                                <div className="flex flex-wrap lg:flex-nowrap pt-8 pb-14 justify-center items-center mx-auto   max-w-[800px] max-h-[500px] ">
                                    <div>
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
                                    <span className='text-4xl cursor-pointer p-3 absolute top-0 right-0'
                                        onClick={handleModale}
                                    ><RxCross2 /></span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}


            </div>
        </section>
    );
};

export default ResSpecs;






