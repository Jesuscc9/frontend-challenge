import { createGlobalStyle, keyframes } from 'styled-components'


const skeletonAnimation = keyframes`
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.7;
  }
`

export const TeaItemStyles = createGlobalStyle`
	.TeaItem {
    width: 150px;
    background-color: #F9F9F7;
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;
    padding: 1rem;
  }

  .TeaItem__image {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto;
  }

  .TeaItem__image--skeleton {
    min-height: 110px;
    background-color: gray;
    animation: ${skeletonAnimation} 0.6s linear infinite alternate;
  }

  .TeaItem__title {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    text-align: left !important;
  }

  .TeaItem__description {
    font-weight: 300;
    font-size: 12px;
    line-height: 17px;
    color: #000000;
  }

  .TeaItem__button {
    background-color: #0B1113;
    padding: 0.6rem 4rem;
    border: none;
    white-space: nowrap;
    width: min-content;

    p {
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
  }

  .TeaItem__rating {
    display: flex;
    justify-content: end;
    height: 100%;
    align-items: end;

    p {
      font-size: 12px;
      font-weight: 300;
      line-height: 17px;
      margin-right: 0.6rem;
    }
  }
`