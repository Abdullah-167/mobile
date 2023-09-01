import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import React from 'react'
import Hero from './Hero'
import Specs from './Specs'
import ResSpecs from './ResSpecs'

const MobileSpecs = () => {
  return (
    <div>
      <Container>
        <Ads />
        <Hero />
        <Specs />
        <ResSpecs specs={specs} />
      </Container>
    </div>
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