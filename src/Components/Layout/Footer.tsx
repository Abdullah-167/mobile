import Image from 'next/image'
import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='py-10'>
            <Container>
                <Image className='pb-6' src={'/footerlogo.svg'} alt={''} width={300} height={300} />
                <div className='flex flex-wrap gap-8 mx-5 border-b-[0.985px] pb-9 border-b-[#C1C1C1] mb-9'>
                    {links.map((item, index) => {
                        return (
                            <Link href={item.url} passHref key={index}>
                                <p className=' text-primary font-normal cursor-pointer'
                                    key={index} >{item.link}</p>
                            </Link>
                        )
                    })}
                </div>
                <div className='flex flex-wrap gap-8 px-5 pb-5 max-w-[700px]'>
                    {secLinks.map((item, index) => {
                        return (
                            <Link href={item.url} passHref key={index}> <a className=' text-primary font-normal cursor-pointer'
                            >{item.link}</a>
                            </Link>
                        )
                    })}
                </div>
                <div className='px-5 flex gap-2 items-center text-[#717171]'>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_115_142)">
                            <path d="M0.875 7.1194C0.875 8.7196 1.52031 10.2543 2.66897 11.3858C3.81763 12.5173 5.37555 13.153 7 13.153C8.62445 13.153 10.1824 12.5173 11.331 11.3858C12.4797 10.2543 13.125 8.7196 13.125 7.1194C13.125 5.51919 12.4797 3.98453 11.331 2.85301C10.1824 1.7215 8.62445 1.08582 7 1.08582C5.37555 1.08582 3.81763 1.7215 2.66897 2.85301C1.52031 3.98453 0.875 5.51919 0.875 7.1194ZM14 7.1194C14 8.94821 13.2625 10.7021 11.9497 11.9953C10.637 13.2884 8.85652 14.0149 7 14.0149C5.14348 14.0149 3.36301 13.2884 2.05025 11.9953C0.737498 10.7021 0 8.94821 0 7.1194C0 5.29059 0.737498 3.53669 2.05025 2.24353C3.36301 0.950368 5.14348 0.223877 7 0.223877C8.85652 0.223877 10.637 0.950368 11.9497 2.24353C13.2625 3.53669 14 5.29059 14 7.1194ZM7.12775 4.52668C6.06725 4.52668 5.44162 5.31967 5.44162 6.68326V7.59691C5.44162 8.95102 6.05675 9.71901 7.12775 9.71901C7.98438 9.71901 8.56363 9.21391 8.64062 8.49678H9.77375V8.57694C9.68625 9.82503 8.589 10.7033 7.1225 10.7033C5.29288 10.7033 4.26213 9.5518 4.26213 7.59778V6.67291C4.26213 4.72407 5.313 3.53718 7.12337 3.53718C8.59425 3.53718 9.6915 4.44566 9.77375 5.75409V5.82994H8.64062C8.56363 5.07229 7.96863 4.52668 7.12775 4.52668Z" fill="#717171" />
                        </g>
                        <defs>
                            <clipPath id="clip0_115_142">
                                <rect width="14" height="13.791" fill="white" transform="translate(0 0.223877)" />
                            </clipPath>
                        </defs>

                    </svg>
                    <Link href={'https://www.linkedin.com/company/techsync-pk/'}> AryzTech </Link>
                    {new Date().getFullYear()}
                </div>
            </Container>
        </footer>
    )
}

export default Footer


const links = [
    {
        url: '/contact',
        link: 'Contact'

    },
    {
        url: '/news',
        link: 'Blog'

    },
    {
        url: 'contact',
        link: 'FAQ’s'

    },
    {
        url: '/',
        link: 'Prices'

    },
    {
        url: '/app',
        link: 'App'

    },
]

const secLinks = [
    {
        url: '/aboutus',
        link: 'About us',
    },
    {
        url: '/terms-conditions',
        link: 'Term & Condition',
    },
    {
        url: '/feedback',
        link: 'Feedback'

    },
    {
        url: '/advertise-with-us',
        link: 'Advertise'

    },
    {
        url: '/privacy-policy',
        link: 'Privacy Policy',
    },
    {
        url: '/disclaimer',
        link: 'Disclaimer'
    },
]