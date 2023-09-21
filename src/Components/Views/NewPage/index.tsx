import React from 'react'
import Hero from './Hero';
import Unlock from './Unlock';
import Speaking from './Speaking';
import WhyUs from './WhyUs';
import NewNavbar from './NewNavbar';
import Tab from './Tab';
import NewFooter from './NewFooter';

const NewPage = () => {
    return (
        <section>
            <NewNavbar />
            <Hero />
            <Unlock />
            <Speaking />
            <WhyUs />
            <Tab />
            <NewFooter />
        </section>
    )
}

export default NewPage;