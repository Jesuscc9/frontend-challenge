import { useState, useEffect } from 'react'
import { HeroContainer } from './styles.hero'
import { ModalStyles } from './styles.modal'
import HeroImage from '../../assets/images/hero_tea_cup.jpg'

export const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <HeroContainer>
        <div className='heroInfo'>
          <h1>Fullfill your most peculiar tea wishes.</h1>
          <p>
            From a common black tea to the rarest Da Hong Pao, each of them
            delivered right at your door.
          </p>
          <button onClick={() => setShowModal(true)}>
            <p>Learn More</p>
          </button>
        </div>
        <div className='hero__image'>
          <img
            src={HeroImage}
            alt='Tea background image'
            className='hero-image'
          />
        </div>
      </HeroContainer>
      <Modal show={showModal} onCloseModal={() => setShowModal(false)} />
    </>
  )
}

const Modal = ({ show, onCloseModal }) => {
  const [showModal, setShowModal] = useState(show)

  useEffect(() => {
    setShowModal(show)
  }, [show])

  useEffect(() => {
    if (!showModal) onCloseModal()
  }, [showModal])

  useEffect(() => {
    const escFn = (e) => {
      if (e.key === 'Escape') setShowModal(false)
    }
    document.addEventListener('keydown', escFn, false)
    return () => {
      document.removeEventListener('keydown', escFn, false)
    }
  }, [])

  return (
    <>
      {show && (
        <>
          <ModalStyles />
          <div className='overlay' onClick={onCloseModal} />
          <div className='modal'>
            <div className='modalSidemenu'>
              <div className='item'>
                <img
                  src='https://cdn.shopify.com/s/files/1/0311/4398/5197/collections/AOT-Location-Header-Banner_8135451a-0507-4cc5-a2e4-ea40a5618661_1800x.jpg?v=1586193127'
                  alt=''
                />
                <div className='itemInfo'>
                  <h3>Tea Pack2</h3>
                  <p>4.4/5 *</p>
                </div>
              </div>
            </div>
            <div className='modalMainContent'>
              {/* <button className='close' onClick={onCloseModal}>
                CERRAR
              </button> */}

              <div className='modalHeader'>
                <img
                  src='https://cdn.shopify.com/s/files/1/0311/4398/5197/collections/AOT-Location-Header-Banner_8135451a-0507-4cc5-a2e4-ea40a5618661_1800x.jpg?v=1586193127'
                  alt=''
                />
              </div>

              <h1>Este es el titulo</h1>
            </div>
          </div>
        </>
      )}
    </>
  )
}
