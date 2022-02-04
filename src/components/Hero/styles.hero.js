import { createGlobalStyle } from 'styled-components'

export const HeroStyles = createGlobalStyle`
  .hero {
    padding: 3rem var(--body-padding);
    padding-bottom: 2.3rem;
    background-color: var(--main-bg-color);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .hero__info {
    width: 615px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 0.2rem;
  }

  .hero__title {
    color: #fff;
  }

  .hero__description {
    color #fff;
    font-size: 24px;
    line-height: 36px;
  }

  .hero__button {
    background-color: #fff;
    padding: 0.6rem 3rem;
    border: none;
    white-space: nowrap;
    width: min-content;

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--main-bg-color)
    }
  }

  .hero__image{
    width: 420px;
    border-radius: 2rem 2rem 0 0;
    transform: scale(1.204) translate(-35px, 60px);
  }
`
