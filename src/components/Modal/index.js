import { ModalStyles } from './styles.modal'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Loader } from '../'
import { CrateCard, SkeletonCrate } from '../CrateCard'
import StarIcon from '../../assets/icons/star.svg'
import CloseIcon from '../../assets/icons/close-icon.svg'

export const Modal = ({ show, onCloseModal }) => {
  const [showModal, setShowModal] = useState(show)
  const [loading, setLoading] = useState(false)
  const [crates, setCrates] = useState([])
  const [selectedCrate, setSelecteCrate] = useState(undefined)

  useEffect(() => {
    setShowModal(show)
    setLoading(true)

    const fetchData = async () => {
      const crates = await api.getCrates()
      setCrates(crates)
      setSelecteCrate(crates[0])
      setLoading(false)
    }

    if (show === true) {
      fetchData()
    }
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

  const handleSelectCrate = (id) => {
    setSelecteCrate(crates.find((e) => e.crate_id === id))
  }

  return (
    <>
      {show && (
        <>
          <ModalStyles />
          <div className='overlay' onClick={onCloseModal} />
          <div className='ModalContainer'>
            <div className='modal'>
              <div className='modal__wrapper'>
                <button
                  className='modal__close-button'
                  onClick={() => setShowModal(false)}
                >
                  <img src={CloseIcon} height='28' alt='' />
                </button>
                <div className='modal__side-menu'>
                  {loading ? (
                    [1, 2, 3, 4, 5].map((e) => <SkeletonCrate key={e} />)
                  ) : (
                    <>
                      {crates.map((e, i) => (
                        <CrateCard
                          data={e}
                          key={i}
                          onSelect={handleSelectCrate}
                          selectedCrateId={selectedCrate.crate_id}
                        />
                      ))}
                    </>
                  )}
                </div>
                {loading ? (
                  <SkeletonMainCrate />
                ) : (
                  <MainCrate data={selectedCrate} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

const MainCrate = ({ data }) => {
  const [loadingImage, setLoadingImage] = useState(true)

  useEffect(() => {
    setLoadingImage(true)
  }, [data])

  return (
    <>
      <div className='modal__main-crate'>
        <div className='modal__header'>
          {loadingImage && (
            <div className='modal__header-image modal__header-image--skeleton'></div>
          )}
          <img
            style={{ display: loadingImage ? 'none' : 'block' }}
            className='modal__header-image'
            src={data.picture}
            onLoad={() => setLoadingImage(false)}
          />
        </div>
        <div className='modal__content'>
          <h1 className='modal__'>{data.name}</h1>
          <p>{data.description}</p>
          <div className='modal__tea-items'>
            {data.content.map((e) => (
              <TeaItem selectedCrate={data} data={e} />
            ))}
          </div>
          <div className='modal__foter'>
            <button className='TeaItem__button'>
              <p>Sign up</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const SkeletonMainCrate = () => {
  return (
    <div className='modal__main-crate--skeleton'>
      <div className='modal__header'>
        <div className='modal__header-image' />
      </div>
      <div className='modal__content'>
        <Loader />
      </div>
    </div>
  )
}

const TeaItem = ({ data, selectedCrate }) => {
  const [loadingImage, setLoadingImage] = useState(true)

  useEffect(() => {
    setLoadingImage(true)
  }, [selectedCrate])

  return (
    <article className='TeaItem'>
      {loadingImage && (
        <div className='TeaItem__image TeaItem__image--skeleton'></div>
      )}
      <img
        src={data.picture}
        style={{ display: loadingImage ? 'none' : 'block' }}
        onLoad={() => setLoadingImage(false)}
        className='TeaItem__image'
      />
      <h3 className='TeaItem__title'>{data.name}</h3>
      <p className='TeaItem__description'>{data.description}</p>
      <span className='TeaItem__rating'>
        <p>{data.rating}/5</p>
        <img src={StarIcon} width='16' />
      </span>
    </article>
  )
}
