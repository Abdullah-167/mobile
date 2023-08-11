import React from 'react'

const Container = ({ children }: any) => {
    return (
        <section className='max-w-[1180px] mx-auto'>
            {children}
        </section>
    )
}

export default Container