import React from 'react'
import SideBar from './SideBar'
import HeroSlide from './HeroSlide'
import Container from '../../Layout/Container'
import Ads from '@/Components/Common/Ads'

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
                    </Container>
                </div>
            </div>
        </main>
    )
}

export default Home