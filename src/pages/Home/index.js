import React from 'react'
import { Hero, WhyUsSection, Footer } from '../../components/'
import './styles.home.css'

export const Home = () => {
  return (
    <>
      <main className='MainContainer'>
        <Hero />
        <WhyUsSection />
        <Footer />
      </main>
    </>
  )
}
