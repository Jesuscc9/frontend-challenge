import { createGlobalStyle } from 'styled-components'

export const FooterStyles = createGlobalStyle`
  .footer {
    display: flex;
    justify-content: space-between;
  }

  .footer__info {
    padding: calc(var(--body-padding) - 0.2rem) var(--body-padding);
    background-color: #495664;
    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;
    color: #fff;
    width: 100%;
    flex: 1.2;
  }

  .footer__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
  }

  .footer__description {
    font-size: 24px;
    line-height: 36px;
  }

  .footer__button {
    padding: 0.6rem 4.4rem;
    border: none;
    width: min-content;
    white-space: nowrap;
    background:#0B1113;

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: white;
    }
  }

  .footer__image-container {
    background-color: black;
    display: flex;
    flex: 2;
    width: 100%;
    
  }

  .footer__image {
    width: 100%;
    object-fit: cover;
    opacity: 0.64;
  }

  @media (max-width: 768px) {

    .footer {
      flex-direction: column;
    }

    .footer__info {
      padding: 4rem calc(var(--body-padding) - 1rem);
      text-align: center;
    }
    
    .footer__description {
      font-size: 18px;
      line-height: 36px;
    }

    .footer__button {
      margin: auto;
    }
  }

`
