import { ModalStyles } from './styles.modal'
import { useState, useEffect, useRef } from 'react'
import { api } from '../../services/api'
import { CrateCard, SkeletonCrate } from '../CrateCard'
import CloseIcon from '../../assets/icons/close-icon.svg'
import { MainCrate, SkeletonMainCrate } from './MainCrate'
import { ErrorMessage } from './ErrorMessage'

export const Modal = ({ show, onCloseModal }) => {
  const [showModal, setShowModal] = useState(show)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [crates, setCrates] = useState([])
  const [selectedCrate, setSelecteCrate] = useState()

  useEffect(() => {
    setShowModal(show)
    setLoading(true)

    const fetchData = async () => {
      try {
        const crates = await api.getCrates()
        setCrates(crates)
        setSelecteCrate(crates[0])
      } catch (e) {
        console.error(e)
        setError(true)
      }
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
    modalContainerRef.current.scrollTo(0, 0)
    setSelecteCrate(crates.find((e) => e.crate_id === id))
  }

  const modalContainerRef = useRef(null)

  return (
    <>
      {show && (
        <>
          <ModalStyles />
          <div className='overlay' onClick={onCloseModal} />
          <div className='ModalContainer' ref={modalContainerRef}>
            <div className='modal'>
              <div className='modal__wrapper'>
                <button
                  className='modal__close-button'
                  onClick={() => setShowModal(false)}
                >
                  <img src={CloseIcon} height='28' alt='' />
                </button>

                <aside className={`${!error && 'modal__side-menu'}`}>
                  <>
                    {loading ? (
                      [1, 2, 3, 4, 5].map((e) => <SkeletonCrate key={e} />)
                    ) : (
                      <>
                        {!error && (
                          <>
                            {crates.map((e, i) => (
                              <CrateCard
                                key={i}
                                data={e}
                                onSelect={handleSelectCrate}
                                selectedCrateId={selectedCrate.crate_id}
                              />
                            ))}
                          </>

                        )}
                      </>
                    )}
                  </>
                </aside>

                {loading ? (
                  <SkeletonMainCrate />
                ) : (
                  <>
                    {error ? (
                      <ErrorMessage onBackClick={() => setShowModal(false)} />
                    ) : (
                      <MainCrate data={selectedCrate} />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}