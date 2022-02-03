import React from 'react'
import { Hero, Section, Cta } from '../../components/'
import { HomeStyles } from './styles.home'

export const Home = () => {
  return (
    <>
      <HomeStyles />
      <div className='mainContainer'>
        <Hero />
        <Section />
        <Cta />
      </div>
    </>
  )
}
