import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Specs from './Specs'
import ResSpecs from './ResSpecs'
import Opinion from './Opinion'
import Similar from './Similar'
import Latest from './Latest'
import Navbar from '@/Components/Layout/Navbar'
import Footer from '@/Components/Layout/Footer'
import MiniNav from '@/Components/Layout/SubNav'
import ProgressBtn from '@/Components/Layout/ProgressBtn'
import ProgressBar from '@/Components/Layout/ProgrssBar'
import { RxCross1 } from 'react-icons/rx'
import SideBar from '../Home/SideBar'


const MobileSpecs = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isSidebarVisible]);


  return (
    <main>
      <div>
        <Navbar toggleSidebar={toggleSidebar} />

        <div className='mt-[72px]'>
          <div className='lg:lg:block hidden'>
            <MiniNav />
          </div>
        </div>
      </div>
      <div className={`z-[50000] transition-all lg:hidden block duration-500 max-h-screen overflow-y-scroll ${isSidebarVisible ? 'lg:relative fixed h-full top-0 translate-x-0' : ' -translate-x-[400px]'}`}>
        {isSidebarVisible && <SideBar />}
        <div className='text-xl lg:hidden block rounded-full text-white border border-white p-2 max-w-[39px] z-[1100] top-3 absolute left-[170px] cursor-pointer'
          onClick={toggleSidebar}
        >
          <RxCross1 />
        </div>
      </div>
      <Container>
        <Ads />
        <Hero />
        <Specs />
        <ResSpecs specs={specs} />
        <p className=' font-semibold text-sm pt-4 pb-2 px-3 border '>Disclaimer: <span className=' font-normal'>Samsung Galaxy Z Fold 3 price in Pakistan is updated daily from the price list provided by local shops and dealers but we can not  guarantee that the information / price / Galaxy Z Fold 3 Prices on this page is 100% correct (Human error is possible), always visit your local shop for exact cell phone cost & rate. Samsung Galaxy Z Fold 3 price Pakistan.</span></p>
        <Ads />
        <Opinion />
        <Similar />
        <Ads />
        <Latest />
      </Container>
      <ProgressBtn />
      <Footer />
    </main>
  )
}

export default MobileSpecs



const specs = [
  {
    mainheading: 'General',
    screenShot: [
      {
        text: 'Screen Shot',
        Images: [
          '/samsungfold.svg',
          '/samsungfold.svg',
          '/samsungfold.svg',
        ]
      }
    ],
    specs: [
      'Launch Date',
      'OS',
      'UI',

    ],
    specsAns: [
      'August 24, 2021 (Official Date)',
      'Android v11OS',
      'Samsung One UI 3.5'
    ]
  },
  {
    mainheading: 'Key Specifications',
    specs: [
      'RAM',
      'Processor',
      'Back Camera',
      'Display',
    ],
    specsAns: [
      'Octa core (2.84 GHz, Single core, Kryo 680 + 2.42 GHz, Tri core, Kryo 680 + 1.8 GHz, Quad core, Kryo 680)',
      '12 MP + 12 MP + 12 MP',
      '7.6 inches (19.3 cm)'
    ]
  },
  {
    mainheading: 'Display',
    specs: [
      'Display Type',
      'Screen Size',
      'Resolution',
      'Aspect Ratio',
    ],
    specsAns: [
      'Dynamic AMOLED',
      '7.6 inches (19.3 cm)',
      '1768 x 2208 pixels',
      '22.5:18'
    ]
  },
  {
    mainheading: 'Design',
    specs: [
      'Height',
      'Width',
      'Weight',
      'Thickness',
    ],
    specsAns: [
      '158.2 mm',
      '128.1 mm',
      '271 grams',
      '6.4 mm'
    ]
  },
  {
    mainheading: 'Camera',
    screenShot: [
      {
        text: 'View All Screen Shots',
        Images: [
          '/samsungfold.svg',
          '/samsungfold.svg',
          '/samsungfold.svg',
        ]
      }
    ],
    specs: [
      'Camera Setup',
      'Touch Screen',
      'HDR+ support'
    ],
    specsAns: [
      'Yes',
      'Yes, Capacitive Touchscreen, Multi-touch',
      '1200 nits'
    ]
  },
  {
    mainheading: 'Battery',
    specs: [
      'Height',
      'Width',
      'Weight',
      'Thickness',
    ],
    specsAns: [
      '158.2 mm',
      '128.1 mm',
      '271 grams',
      '6.4 mm'
    ]
  },
]