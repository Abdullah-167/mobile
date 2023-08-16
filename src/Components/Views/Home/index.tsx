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

const Home = () => {
    return (
        <main>
            <div className='flex w-full gap-6'>
                <div>
                    <SideBar />
                </div>
                <div className='max-w-[757px] w-full'>
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
            </div>
             <FeaturedBrand />

        </main>
    )
}

export default Home


