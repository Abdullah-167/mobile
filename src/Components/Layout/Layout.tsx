import React from 'react'
import Navbar from './Navbar'
import MiniNav from './SubNav'
import Footer from './Footer'
import SideBar from '../Views/Home/SideBar'

const Layout = ({ children }: any) => {

    return (
        <main>
            <Navbar />
            <MiniNav />
            {children}
            <Footer />
        </main>
    )
}

export default Layout