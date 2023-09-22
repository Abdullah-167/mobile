import React, { useEffect, useState } from 'react'
import Container from './Container'
import { TfiMenu } from 'react-icons/tfi';
import Image from 'next/image';
import { Input } from 'postcss';
import Link from 'next/link';
import Login from '../Common/Login';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {

    const [input, setInput] = useState(false);
    const [handleForm, setHandleForm] = useState<boolean>(false);

    const handleLogIn = () => {
        setHandleForm(!handleForm)
    }

    const handleCloseLogin = () => {
        setHandleForm(false);
    };

    const handleInpt = () => {
        console.log("Before setInput:", input);
        setInput(!input);
        console.log("After setInput:", input);
    };


    useEffect(() => {
        if (handleForm) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [handleForm]);

    return (
        <nav className='bg-primary py-4'>
            <Container>
                {handleForm && (
                    <div className={`absolute bg-opacity-50 pt-5 inset-0 z-[1000] bg-white`}>
                        <Login onClose={handleCloseLogin} />
                    </div>
                )}
                <div className='flex justify-between gap-5 items-center'>
                    <div className='flex gap-4 pr-[150px]'>
                        <span className='text-4xl text-white cursor-pointer'>
                            <TfiMenu />
                        </span>
                        <Image className='cursor-pointer' src={'/profile.svg'} onClick={handleLogIn} alt={''} width={30} height={30} />
                    </div>
                    <div className='pr-32'>
                        <Link href={'/'}>  <Image className='cursor-pointer' src={'/logo.svg'} alt={''} width={200} height={200} /> </Link>
                    </div>
                    <div className='sm:flex hidden gap-4'>
                        <div
                            className={`relative transition-all duration-500 overflow-hidden rounded-full ${input ? 'w-full' : 'w-10'}`}
                            onClick={handleInpt}
                        >
                            <input className={`outline-none rounded-full px-4`} type="text" name="" id="" />
                            <Image className='absolute right-3 top-1 cursor-pointer' src={'/magnify.svg'} alt={''} width={15} height={15} />
                        </div>
                        <Image className='cursor-pointer' src={'/cart.svg'} alt={''} width={30} height={30} />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar