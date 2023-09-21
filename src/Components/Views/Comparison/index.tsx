import Ads from '@/Components/Common/Ads';
import React from 'react'
import MainPage from './MainPage';
import Container from '@/Components/Layout/Container';

const Comparison = () => {
    return (
        <div>
            <Container>
                <Ads />
                <MainPage />
            </Container>
        </div>
    )
}

export default Comparison;