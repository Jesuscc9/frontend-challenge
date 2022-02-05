import { createGlobalStyle } from 'styled-components'

export const HeroStyles = createGlobalStyle`
  .hero {
    padding: 0 var(--body-padding);
    background-color: var(--main-bg-color);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 4rem;
  }

  .hero__info {
    width: 615px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 0rem;
    padding: 2.4rem 0;
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
    padding: 0.6rem 3.4rem;
    border: none;
    white-space: nowrap;
    width: min-content;
    
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--main-bg-color)
    }

    @media (max-width: 645px) {
      margin: auto;
    }

  }

  .hero__image-container {
    display: flex;
  }

  .hero__image{
    width: 505px;
    max-width: 505px;
    height: 512px;
    border-radius: 2rem 2rem 0 0;
    transform: translateY(70px);
  }

  @media (max-width: 1320px) {
    .hero {
      padding-top: 3rem;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 60px;
      text-align: center;
      margin-bottom: 170px;
    }

    .hero__button {
      margin: auto;
    }

    .hero__image {
      transform: translateY(60px);
    }

    .hero__image-container {
      height: 300px;
    }

    .hero__info {
      row-gap: 3rem;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 3rem 1.25rem 0rem 1.25rem;
      row-gap: 2rem;
      margin-bottom: 260px
    }

    .hero__description {
      font-size: 18px;
    }

    .hero__info {
      text-align: center;
      row-gap: 3rem;
    }

    .hero__image-container {
      width: 100%;
      height: 140px;
    }

    .hero__image {
      width: 100%;
      height: auto;
      margin: auto;
      transform: translateY(40px);
    }
  }

  @media (max-width: 480px) {
    .hero {
      margin-bottom: 200px;
    }

    .hero__image {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .hero {
      margin-bottom: 120px;
    }
  }
`
