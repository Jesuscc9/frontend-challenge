import { createGlobalStyle } from 'styled-components'

export const CtaStyles = createGlobalStyle`
  .cta {
    display: flex;
    justify-content: space-between;
  }

  .cta__info {
    padding: calc(var(--body-padding) + 1.4rem) var(--body-padding);
    background-color: #495664;
    display: flex;
    flex-direction: column;
    row-gap: 2.2rem;
    color: #fff;
    width: 100%;
  }

  .cta__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
  }

  .cta__description {
    font-size: 24px;
    line-height: 36px;
  }

  .cta__button {
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

  .cta__image-container {
    background-color: black;
    display: flex;
    width: 100%;
    
    .cta__image {
      width: 100%;
      object-fit: cover;
      opacity: 0.64;
    }

  }
`
