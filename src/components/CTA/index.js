import TeaDesktop from '../../assets/images/tea_desktop.png'
import { CtaStyles } from './cta.styles'

export const Cta = () => {
  return (
    <>
      <CtaStyles />
      <section className='cta'>
        <div className='cta__info'>
          <h1 className='cta__title'>SIGN UP</h1>
          <p className='cta__description'>
            Get the best tea experience you’ll ever taste right at your door
            each month
          </p>
          <button className='cta__button'>
            <p>Sign up</p>
          </button>
        </div>
        <div className='cta__image-container'>
          <img src={TeaDesktop} alt='Tea image in TeaShop' className='cta__image' />
        </div>
      </section>
    </>
  )
}
