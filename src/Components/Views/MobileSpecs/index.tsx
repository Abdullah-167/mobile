import Ads from '@/Components/Common/Ads'
import Container from '@/Components/Layout/Container'
import React from 'react'
import Hero from './Hero'
import Specs from './Specs'

const MobileSpecs = () => {
  return (
    <div>
      <Container>
        <Ads />
        <Hero />
        <Specs />
      </Container>
    </div>
  )
}

export default MobileSpecs

