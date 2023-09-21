import React, { useState } from 'react';


const Faq = ({ faq }: any) => {



    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index: any) => {
        if (index === expandedIndex) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className='container'>

            <div>
                <h1 className='text-2xl sm:text-3xl text-primary font-bold pt-5 border-b-2 border-b-gray-100 pb-8'>Frequently Asked Questions</h1>
                <div className='pt-5'>
                    {faq.map((item: any, index: any) => (
                        <div key={index} className='mb-5 border-b-2 pb-3 border-b-gray-100'>
                            <div
                                className={`team-shadow flex items-center gap-3 cursor-pointer  px-4  transition duration-300 ease-in-out ${expandedIndex === index ? ' ' : ''}`}
                                onClick={() => handleToggle(index)}
                            >
                                <h3 className='text-xl font-semibold'>{item.question}</h3>
                                <span className="ml-auto">{expandedIndex === index ? '-' : '+'}</span>
                            </div>
                            <div
                                className={`team-shadow overflow-hidden transition-all duration-300 ease-in max-w-[568px] mx-auto ${expandedIndex === index ? ' h-auto opacity-100 pb-3' : 'h-0 opacity-50 '
                                    }`}
                            >
                                <p className='text-lg mt-4'>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;