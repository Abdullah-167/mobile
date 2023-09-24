import Ads from '@/Components/Common/Ads';
import React from 'react'
import MainPage from './MainPage';
import Container from '@/Components/Layout/Container';
import Navbar from '@/Components/Layout/Navbar';
import MiniNav from '@/Components/Layout/SubNav';
import Footer from '@/Components/Layout/Footer';
import ProgressBtn from '@/Components/Layout/ProgressBtn';

const Comparison = () => {
    return (
        <div>
            <Navbar />
            <MiniNav />
            <Container>
                <Ads />
                <MainPage />
            </Container>
            <ProgressBtn />
            <Footer />
        </div>
    )
}

export default Comparison;