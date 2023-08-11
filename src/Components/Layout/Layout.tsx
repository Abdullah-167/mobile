import React from 'react'
import Navbar from './Navbar'
import MiniNav from './SubNav'

const Layout = ({ children }: any) => {
    return (
        <main>
            <Navbar />
            <MiniNav />
            {children}
        </main>
    )
}

export default Layout