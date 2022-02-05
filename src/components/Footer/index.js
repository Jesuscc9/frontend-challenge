import TeaDesktop from '../../assets/images/tea_desktop.png'
import TeaMobile from '../../assets/images/tea_mobile.png'
import './footer.styles.css'
import { useIsMobile } from '../../hooks'

export const Footer = () => {
  const isMobile = useIsMobile()

  return (
    <footer className='footer'>
      <div className='footer__info'>
        <h1 className='footer__title'>SIGN UP</h1>
        <p className='footer__description'>
          Get the best tea experience you’ll ever taste right at your door each
          month
        </p>
        <button className='footer__button'>
          <p>Sign up</p>
        </button>
      </div>
      <div className='footer__image-container'>
        {isMobile ? (
          <img
            src={TeaMobile}
            alt='Tea image in TeaShop'
            className='footer__image'
            loading='lazy'
          />
        ) : (
          <img
            src={TeaDesktop}
            alt='Tea image in TeaShop'
            className='footer__image'
            loading='lazy'
          />
        )}
      </div>
    </footer>
  )
}
