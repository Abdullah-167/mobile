import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import React from 'react'
import Hero from './Hero'
import NewsBlogs from './NewsBlogs'
import Navbar from '@/Components/Layout/Navbar'
import MiniNav from '@/Components/Layout/SubNav'
import Footer from '@/Components/Layout/Footer'

const News = () => {
    return (
        <div>
            <Navbar />
            <MiniNav />
            <Container>
                <Ads />
                <Hero />
                <NewsBlogs />
            </Container>
            <Footer />
        </div>
    )
}

export default News