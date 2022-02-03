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

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 60px;
    }

    p{
      font-size: 24px;
      line-height: 36px;
    }

    button {
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
  }

  .cta__image {
    background-color: black;
    display: flex;
    
    img {
      opacity: 0.64;
    }

  }
`
