import React from 'react'

const Container = ({ children }: any) => {
    return (
        <section className='max-w-[1180px] lg:max-w-[1400px]  mx-auto px-5  sm:px-10'>
            {children}
        </section>
    )
}

export default Container