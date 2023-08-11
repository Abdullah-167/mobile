import React from 'react'
import Container from './Container'
import { TfiMenu } from 'react-icons/tfi';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='bg-primary py-4'>
            <Container>
                <div className='flex justify-between gap-5 items-center'>
                    <div className='flex gap-4 pr-[150px]'>
                        <span className='text-4xl text-white cursor-pointer'>
                            <TfiMenu />
                        </span>
                        <Image className='cursor-pointer' src={'/profile.svg'} alt={''} width={30} height={30} />
                    </div>
                    <div className=''>
                        <Image className='cursor-pointer' src={'/mainlogo.png'} alt={''} width={200} height={200} />
                    </div>
                    <div className='flex gap-4 '>
                        <div className='relative'>
                            <input className=' outline-none rounded-full px-4' type="text" name="" id="" />
                            <Image className='absolute right-3 top-1' src={'/magnify.svg'} alt={''} width={15} height={15} />
                        </div>
                        <Image className='cursor-pointer' src={'/cart.svg'} alt={''} width={30} height={30} />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar