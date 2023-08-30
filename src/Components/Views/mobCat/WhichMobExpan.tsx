import Image from 'next/image'
import React from 'react'

const WhichMobExpan = () => {
    return (
        <section>
            <div className='flex pb-10 justify-around items-center gap-3'>
                <div>
                    <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
                </div>
                <p className='text-xl font-semibold whitespace-nowrap'>Samsung Mobile Phones Price in Pakistan 2023</p>
                <div>
                    <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                    <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
                </div>
            </div>
        </section>
    )
}

export default WhichMobExpan