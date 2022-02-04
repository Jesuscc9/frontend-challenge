import { createGlobalStyle } from 'styled-components'

export const NavStyles = createGlobalStyle`

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 1rem;
  }

  .navbar__title {
    font-weight: 100;
    font-size: 24px;
  }

  .navbar__icon {
    width: 20px;
    height: 20px;
    background-color: #0B1113;;
    border-radius: 50%;
  }
`
