import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import React from 'react'
import Hero from './Hero'
import NewsBlogs from './NewsBlogs'

const News = () => {
    return (
        <div>
            <Container>
                <Ads />
                <Hero />
                <NewsBlogs />
            </Container>
        </div>
    )
}

export default News