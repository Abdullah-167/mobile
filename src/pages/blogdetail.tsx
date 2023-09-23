import Footer from '@/Components/Layout/Footer'
import Navbar from '@/Components/Layout/Navbar'
import MiniNav from '@/Components/Layout/SubNav'
import BlogData from '@/Components/Views/BlogDetail/BlogData'
import React from 'react'

const blogdetail = () => {
    return (
        <main>
            <Navbar />
            <MiniNav />
            <BlogData />
            <Footer />
        </main>
    )
}

export default blogdetail