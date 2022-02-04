import React from 'react'
import { Hero, Section, Footer } from '../../components/'
import { HomeStyles } from './styles.home'

export const Home = () => {
  return (
    <>
      <HomeStyles />
      <div className='MainContainer'>
        <Hero />
        <Section />
        <Footer />
      </div>
    </>
  )
}
