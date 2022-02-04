import { useState } from 'react'
import { HeroStyles } from './styles.hero'
import HeroImage from '../../assets/images/hero_tea_cup.jpg'
import { Modal } from '../Modal'

export const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <HeroStyles />
      <section className='hero'>
        <div className='hero__info'>
          <h1 className='hero__title'>Fullfill your most peculiar tea wishes.</h1>
          <p className='hero__description'>
            From a common black tea to the rarest Da Hong Pao, each of them
            delivered right at your door.
          </p>
          <button className='hero__button' onClick={() => setShowModal(true)}>
            <p>Learn more</p>
          </button>
        </div>
        <div className='hero__image-container'>
          <img
            src={HeroImage}
            alt='Tea background image'
            className='hero__image'
          />
        </div>
      </section>
      <Modal show={showModal} onCloseModal={() => setShowModal(false)} />
    </>
  )
}
