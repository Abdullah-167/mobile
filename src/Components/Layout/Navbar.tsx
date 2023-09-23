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
        <nav className='bg-primary py-4'>
            <Container>
                {handleForm && (
                    <div className={`fixed bg-opacity-50 inset-0 pt-5 max-h-screen z-[1000] bg-white`}>
                        <Login onClose={handleCloseLogin} />
                    </div>
                )}
                <div className='flex justify-between relative gap-5 items-center'>
                    <div className='flex gap-4 pr-[150px]'>
                        <span className='text-4xl text-white cursor-pointer' onClick={toggleSidebar}>
                            <TfiMenu />
                        </span>
                        <Image className='cursor-pointer' src={'/profile.svg'} onClick={handleLogIn} alt={''} width={30} height={30} />
                    </div>
                    <div className=''> {/* Added "relative" to make absolute positioning work */}
                        <Link href={'/'}>
                            <Image className='cursor-pointer absolute left-1/2 transform -translate-x-1/2' src={'/logo.svg'} alt={''} width={200} height={200} />
                        </Link>
                    </div>
                    <div className='sm:flex hidden gap-4 min-w-'>
                        <div className='flex items-center space-x-4'>
                            <div
                                className={`relative flex items-center transition-all duration-500 overflow-hidden rounded-full ${input ? 'w-48' : 'w-10'
                                    }`}
                            >
                                <input
                                    className={`outline-none rounded-full px-4 w-full h-full`}
                                    type='text'
                                    name=''
                                    id=''
                                    placeholder='Search...'
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
                            <Image
                                className='cursor-pointer'
                                src={'/cart.svg'}
                                alt={''}
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
