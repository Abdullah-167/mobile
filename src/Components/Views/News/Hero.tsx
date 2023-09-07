import React from 'react'

const Hero = () => {

    function getCurrentDate(): string {
        const currentDate: Date = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString(undefined, options);
    }

    return (
        <header>
            <div>
                <div>

                </div>
            </div>
        </header>
    )
}

export default Hero;

const data = [
    {
        bigImage: '/imgfour.png',
        heading: 'Watch: Google mocks Apple’s late switch to USB-C with iPhone 15 series',
        author: 'Rehan Shah',
        date: ''
    }
]