import React from 'react'
import { Hero, WhyUsSection, Footer } from '../../components/'
import { HomeStyles } from './styles.home'

export const Home = () => {
  return (
    <>
      <HomeStyles />
      <main className='MainContainer'>
        <Hero />
        <WhyUsSection />
        <Footer />
      </main>
    </>
  )
}
