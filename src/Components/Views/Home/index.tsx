import React from 'react'
import SideBar from './SideBar'
import HeroSlide from './HeroSlide'
import Container from '../../Layout/Container'
import Ads from '@/Components/Common/Ads'
import Pricing from './Pricing'
import ComingSoon from './ComingSoon'
import Under50 from './Under50'
import Under40 from './Under40'
import Under35 from './Under35'
import Under30 from './Under30'
import Under25 from './Under25'
import Under20 from './Under20'
import Under15 from './Under15'
import Under10 from './Under10'
import FeaturedBrand from './FeaturedBrand'
import LatestNews from './LatestNews'
import MobileCompa from './MobileCompa'
import RightSide from './RightSide'

const Home = () => {
    return (
        <main>
            <div className='md:flex w-full justify-between gap-6 max-w-[1400px] mx-auto'>
                <div>
                    <SideBar />
                </div>
                <div className='max-w-[900px] lg:max-w-[757px] mx-auto lg:mx-0 w-full'>
                    <Container>
                        <HeroSlide />
                        <div className=''>
                            <Ads />
                        </div>
                        <Pricing />
                        <ComingSoon />
                        <Under50 />
                        <Under40 />
                        <Under35 />
                        <Under30 />
                        <Under25 />
                        <Under20 />
                        <Under15 />
                        <Under10 />
                    </Container>
                </div>
                <div className='hidden lg:block'>
                    <RightSide />
                </div>
            </div>
            <FeaturedBrand />
            <LatestNews />
            <MobileCompa />
        </main>
    )
}

export default Home


