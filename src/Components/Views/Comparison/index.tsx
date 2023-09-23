import Ads from '@/Components/Common/Ads';
import React from 'react'
import MainPage from './MainPage';
import Container from '@/Components/Layout/Container';
import Navbar from '@/Components/Layout/Navbar';
import MiniNav from '@/Components/Layout/SubNav';
import Footer from '@/Components/Layout/Footer';

const Comparison = () => {
    return (
        <div>
            <Navbar />
            <MiniNav />
            <Container>
                <Ads />
                <MainPage />
            </Container>
            <Footer />
        </div>
    )
}

export default Comparison;