import React, { useEffect, useState } from 'react';
import Container from './Container';
import { TfiMenu } from 'react-icons/tfi';
import Image from 'next/image';
import { Input } from 'postcss';
import Link from 'next/link';
import Login from '../Common/Login';
import { RxCross1 } from 'react-icons/rx';

const Navbar = ({ toggleSidebar }: any) => {
    const [input, setInput] = useState(false);
    const [handleForm, setHandleForm] = useState<boolean>(false);


    const handleLogIn = () => {
        setHandleForm(!handleForm);
    };

    const handleInput = () => {
        setInput(!input);
    };

    const handleCloseLogin = () => {
        setHandleForm(false);
    };

    useEffect(() => {
        if (handleForm) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [handleForm]);

    return (
        <nav className='bg-primary py-4 fixed w-full top-0 mb-10 z-[15000]'>
            <Container>
                {handleForm && (
                    <div className={`fixed bg-opacity-50 inset-0 pt-5 max-h-screen z-[1500] bg-white`}>
                        <Login onClose={handleCloseLogin} />
                    </div>
                )}
                <div className='flex justify-between relative gap-5 items-center'>
                    <div className='flex gap-4 items-center'>
                        <span className='lg:hidden block text-2xl sm:text-4xl text-white cursor-pointer' onClick={toggleSidebar}>
                            <TfiMenu />
                        </span>
                        <span className='hidden lg:block text-2xl sm:text-4xl text-white cursor-pointer'>
                            <TfiMenu />
                        </span>
                        <Image className='cursor-pointer sm:w-full w-6' src={'/profile.svg'} onClick={handleLogIn} alt={''} width={30} height={30} />
                    </div>
                    <Link href={'/'}>
                        <Image className='cursor-pointer max-w-[160px] sm:max-w-full' src={'/newlogo.svg'} alt={''} width={200} height={200} />
                    </Link>
                    <div className='lg:flex hidden gap-4'>
                        <div className='flex items-center space-x-4'>
                            <div className=' absolute right-10'>
                                <div
                                    className={`relative flex items-center transition-all duration-500 overflow-hidden rounded-full ${input ? 'w-48' : 'w-10'
                                        }`}
                                >
                                    <input
                                        className={`outline-none rounded-full px-4 w-full h-full`}
                                        type='text'
                                        name=''
                                        id=''
                                        placeholder={`${input ? 'Search...' : ''}`}
                                    />
                                    <Image
                                        className='absolute right-3 top-1 cursor-pointer'
                                        src={'/magnify.svg'}
                                        alt={''}
                                        width={15}
                                        height={15}
                                        onClick={handleInput}
                                    />
                                </div>
                            </div>
                            <Image
                                className='cursor-pointer lg:block hidden'
                                src={'/cart.svg'}
                                alt={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                    <div className='sm:hidden block'>
                        <div
                            className={`relative flex items-center transition-all bg-white duration-500 overflow-hidden rounded-full w-7 h-7 `}
                        >
                            <Image
                                className=' flex justify-center mx-auto cursor-pointer'
                                src={'/magnify.svg'}
                                alt={''}
                                width={15}
                                height={15}
                                onClick={handleInput}
                            />
                        </div>
                    </div>
                </div>
                <div className={`sm:hidden block transition-all duration-500 absolute top-[60px] left-0 z-[1000] w-full text-white  ${input ? ' opacity-100' : ' opacity-0'}`}>
                    {input && (
                        <input
                            className={`outline-none text-white px-4 w-full h-full py-2 bg-[#01c064] placeholder:text-white`}
                            type='text'
                            name=''
                            id=''
                            placeholder='Search...'
                        />
                    )}
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
