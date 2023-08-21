import React from 'react'
import CatSideBar from '@/Components/Views/mobCat/CatSidebar'
import Ads from '@/Components/Common/Ads'
import FeaturedBrand from '@/Components/Views/Home/FeaturedBrand'
import HeroSlide from '@/Components/Views/Home/HeroSlide'
import LatestNews from '@/Components/Views/Home/LatestNews'
import MobileCompa from '@/Components/Views/Home/MobileCompa'
import Container from '@/Components/Layout/Container'
import MobSummary from './MobSummary'


const MobCat = () => {
    return (
        <main>
            <Container>
                <Ads />
                <MobSummary />
            </Container>
            <div className='md:flex w-full gap-6 max-w-[1400px] mx-auto'>
                <div>
                    <CatSideBar />
                </div>
                <div className='max-w-[900px] lg:max-w-[757px] mx-auto lg:mx-0 w-full'>
                    <Container>
                    </Container>
                </div>
            </div>
        </main>
    )
}

export default MobCat;


