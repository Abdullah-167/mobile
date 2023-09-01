import React from 'react';
import Image from 'next/image';

const ResSpecs = ({ specs }: any) => {
    return (
        <section>
            <div className=' block lg:hidden'>
                {specs.map((spec: any, index: any) => (
                    <div key={index} className="bg- px-5 py-3 sm:py-5  rounded">
                        <h2 className="text-2xl font-semibold pb-2 mb-3 text-primary border-b border-b-primary">{spec.mainheading}</h2>
                        {spec.specs.map((specItem: any, specIndex: any) => (
                            <div key={specIndex} className="flex gap-2">
                                <p className="font-semibold min-w-[120px]">{specItem}:</p>
                                <p>{spec.specsAns[specIndex]}</p>
                            </div>
                        ))}

                        {spec.screenShot && spec.screenShot.length > 0 && (
                            <div className="mt-4">
                                <p>{spec.screenShot[0].text}</p>
                                <div className="flex gap-2">
                                    {spec.screenShot[0].Images.map((image: any, imageIndex: any) => (
                                        <Image key={imageIndex} src={image} alt="screenshot" width={100} height={100} />
                                    ))}
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






