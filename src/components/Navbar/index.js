import { NavStyles } from './styles.navbar'

export const Navbar = () => {
  return (
    <>
      <NavStyles />
      <nav className='navbar'>
        <p className='navbar__title'>TEESH</p>
        <div className='navbar__icon'></div>
      </nav>
    </>
  )
}
