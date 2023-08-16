import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div>
                <Image src={'/logo.svg'} alt={''} width={200} height={200} />
            </div>
        </footer>
    )
}

export default Footer