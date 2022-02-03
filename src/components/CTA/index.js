import TeaDesktop from '../../assets/images/tea_desktop.png'
import { CtaStyles } from './cta.styles'

export const Cta = () => {
  return (
    <>
      <CtaStyles />
      <section className='cta'>
        <div className='cta__info'>
          <h1>SIGN UP</h1>
          <p>
            Get the best tea experience you’ll ever taste right at your door
            each month
          </p>
          <button>
            <p>Sign Up</p>
          </button>
        </div>
        <div className='cta__image'>
          <img src={TeaDesktop} alt='Tea image in TeaShop' />
        </div>
      </section>
    </>
  )
}
